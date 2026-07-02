import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle, getAllSlugs, type Block } from '@/lib/blog';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'p':
      return (
        <p
          key={i}
          dangerouslySetInnerHTML={{ __html: block.html }}
          style={{ marginBottom: '1.25rem', lineHeight: 1.75 }}
        />
      );
    case 'h2':
      return (
        <h2
          key={i}
          style={{
            fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
            fontWeight: 600,
            marginTop: '2.25rem',
            marginBottom: '0.75rem',
            color: 'var(--ink)',
          }}
        >
          {block.text}
        </h2>
      );
    case 'ul':
      return (
        <ul
          key={i}
          style={{
            paddingLeft: '1.4rem',
            marginBottom: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
          }}
        >
          {block.items.map((item, j) => (
            <li
              key={j}
              dangerouslySetInnerHTML={{ __html: item }}
              style={{ lineHeight: 1.7 }}
            />
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div
          key={i}
          dangerouslySetInnerHTML={{ __html: block.html }}
          style={{
            background: 'var(--linen)',
            borderLeft: '4px solid var(--brand)',
            borderRadius: 8,
            padding: '1rem 1.25rem',
            marginBottom: '1.25rem',
            lineHeight: 1.7,
          }}
        />
      );
    case 'table':
      return (
        <div key={i} style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.95rem',
            }}
          >
            <tbody>
              {block.rows.map(([label, value, flag], j) => (
                <tr
                  key={j}
                  style={{
                    background:
                      flag === 'bg-linen'
                        ? 'var(--linen)'
                        : flag === 'bg-alt'
                        ? 'var(--surface)'
                        : 'transparent',
                  }}
                >
                  <td
                    style={{
                      padding: '0.6rem 0.75rem',
                      borderBottom: '1px solid var(--hairline)',
                      fontWeight: flag === 'bold' ? 600 : 400,
                      color: 'var(--ink)',
                    }}
                  >
                    {label}
                  </td>
                  <td
                    style={{
                      padding: '0.6rem 0.75rem',
                      borderBottom: '1px solid var(--hairline)',
                      fontWeight: flag === 'bold' ? 600 : 400,
                      textAlign: 'right',
                      color: 'var(--ink)',
                    }}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'script-box':
      return (
        <div
          key={i}
          dangerouslySetInnerHTML={{ __html: block.html }}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: 8,
            padding: '1rem 1.25rem',
            marginBottom: '1.25rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        />
      );
    default:
      return null;
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.h1,
    description: article.metaDescription,
    author: { '@type': 'Organization', name: 'Inherita' },
    publisher: {
      '@type': 'Organization',
      name: 'Inherita',
      url: 'https://inherita.com.au',
    },
  };

  const faqSchema =
    article.hasFAQSchema && article.faqs
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.items.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main>
        {/* Hero */}
        <section
          style={{
            background: 'var(--linen)',
            padding: 'clamp(48px, 8vw, 80px) 0 clamp(32px, 5vw, 56px)',
          }}
        >
          <div className="container" style={{ maxWidth: 760 }}>
            {/* Audience pill + read time */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 20,
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  padding: '3px 12px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  background:
                    article.audience === 'borrower'
                      ? 'var(--brand)'
                      : 'var(--brand-2)',
                  color: 'var(--bg)',
                }}
              >
                {article.audience === 'borrower' ? 'For beneficiaries' : 'For professionals'}
              </span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                {article.readTime} min read
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                fontWeight: 700,
                lineHeight: 1.25,
                color: 'var(--ink)',
                marginBottom: article.quickAnswer ? 24 : 0,
              }}
            >
              {article.h1}
            </h1>

            {article.quickAnswer && (
              <div
                style={{
                  marginTop: 24,
                  background: 'var(--bg)',
                  border: '1px solid var(--hairline)',
                  borderRadius: 10,
                  padding: '1rem 1.25rem',
                  lineHeight: 1.7,
                  color: 'var(--ink)',
                  fontSize: '1.05rem',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: 8,
                  }}
                >
                  Quick answer
                </span>
                {article.quickAnswer}
              </div>
            )}
          </div>
        </section>

        {/* Body */}
        <section style={{ padding: 'clamp(40px, 6vw, 64px) 0' }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <div style={{ fontSize: '1.05rem', color: 'var(--ink)' }}>
              {article.body.map((block, i) => renderBlock(block, i))}
            </div>

            {/* FAQs */}
            {article.faqs && (
              <div style={{ marginTop: '2.5rem' }}>
                <h2
                  style={{
                    fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                    fontWeight: 600,
                    marginBottom: '1.25rem',
                    color: 'var(--ink)',
                  }}
                >
                  {article.faqs.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {article.faqs.items.map((faq, i) => (
                    <div
                      key={i}
                      style={{
                        borderTop: '1px solid var(--hairline)',
                        paddingTop: '1rem',
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 600,
                          marginBottom: '0.4rem',
                          color: 'var(--ink)',
                        }}
                      >
                        {faq.q}
                      </p>
                      <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div
              style={{
                marginTop: '3rem',
                background: 'var(--linen)',
                borderRadius: 12,
                padding: 'clamp(24px, 4vw, 40px)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--ink)',
                  marginBottom: 20,
                }}
              >
                {article.cta.text}
              </p>
              <Link href={article.cta.href} className="btn btn-primary">
                {article.cta.linkText}
              </Link>
            </div>

            {/* Back to blog */}
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link
                href="/blog"
                style={{ color: 'var(--muted)', fontSize: 14, textDecoration: 'none' }}
              >
                ← All articles
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
