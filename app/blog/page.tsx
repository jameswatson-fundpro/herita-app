import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Insights — Inherita',
  description:
    'Guides on inheritance advances, deceased estate administration, and accessing your inheritance early.',
};

export default function BlogIndexPage() {
  const borrowerArticles = articles.filter((a) => a.audience === 'borrower');
  const referrerArticles = articles.filter((a) => a.audience === 'referrer');

  function ArticleCard({ slug, audience, title, summary, readTime }: {
    slug: string;
    audience: 'borrower' | 'referrer';
    title: string;
    summary: string;
    readTime: number;
  }) {
    return (
      <Link
        href={`/blog/${slug}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <article
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--hairline)',
            borderRadius: 12,
            padding: 'clamp(20px, 3vw, 28px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            height: '100%',
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--hairline)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '2px 10px',
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
                background: audience === 'borrower' ? 'var(--brand)' : 'var(--brand-2)',
                color: 'var(--bg)',
              }}
            >
              {audience === 'borrower' ? 'For beneficiaries' : 'For professionals'}
            </span>
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>{readTime} min read</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              fontWeight: 600,
              lineHeight: 1.35,
              color: 'var(--ink)',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
              flexGrow: 1,
            }}
          >
            {summary}
          </p>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--brand)',
            }}
          >
            Read →
          </span>
        </article>
      </Link>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: 'var(--linen)',
          padding: 'clamp(48px, 8vw, 80px) 0 clamp(40px, 6vw, 64px)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: 640 }}>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--ink)',
              marginBottom: 16,
            }}
          >
            Insights
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            Guides on inheritance advances, deceased estate administration, and
            accessing your inheritance early.
          </p>
        </div>
      </section>

      {/* For beneficiaries */}
      <section style={{ padding: 'clamp(40px, 6vw, 64px) 0' }}>
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: 24,
              paddingBottom: 12,
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            For beneficiaries
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {borrowerArticles.map((a) => (
              <ArticleCard
                key={a.slug}
                slug={a.slug}
                audience={a.audience}
                title={a.title}
                summary={a.summary}
                readTime={a.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* For professionals */}
      <section
        style={{
          padding: 'clamp(40px, 6vw, 64px) 0',
          borderTop: '1px solid var(--hairline)',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              fontWeight: 600,
              color: 'var(--ink)',
              marginBottom: 24,
              paddingBottom: 12,
              borderBottom: '1px solid var(--hairline)',
            }}
          >
            For professionals
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {referrerArticles.map((a) => (
              <ArticleCard
                key={a.slug}
                slug={a.slug}
                audience={a.audience}
                title={a.title}
                summary={a.summary}
                readTime={a.readTime}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'var(--linen)',
          padding: 'clamp(40px, 6vw, 64px) 0',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: 600 }}>
          <h2
            style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              marginBottom: 16,
            }}
          >
            Ready to check your eligibility?
          </h2>
          <p
            style={{
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            Apply online in 10 minutes. We assess the estate — not your income.
          </p>
          <Link href="/apply" className="btn btn-primary">
            Check eligibility →
          </Link>
        </div>
      </section>
    </main>
  );
}
