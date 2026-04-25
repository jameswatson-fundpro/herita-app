import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { Illust } from '@/components/illustrations';
import { Icons } from '@/components/icons';
import { SITE, type ProductSlug } from '@/lib/site';
import { notFound } from 'next/navigation';

export function ProductPage({ slug }: { slug: ProductSlug }) {
  const product = SITE.products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <SiteNav />
      <main>
        <section style={{ padding: '70px 0 50px', borderBottom: '1px solid var(--hairline)' }}>
          <div className="container">
            <div
              className="hero-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 1fr',
                gap: 60,
                alignItems: 'center',
              }}
            >
              <div>
                <div className="eyebrow eyebrow-brand">{product.eyebrow}</div>
                <h1
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: 'clamp(44px, 6vw, 76px)',
                    lineHeight: 1,
                    margin: '14px 0 24px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {product.title}
                </h1>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 22,
                    lineHeight: 1.5,
                    color: 'var(--text)',
                    maxWidth: 560,
                    margin: '0 0 28px',
                  }}
                >
                  {product.lead}
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="/apply" className="btn btn-primary">Begin application →</Link>
                  <Link href="/#calculator" className="btn btn-ghost">Run the calculator</Link>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {slug === 'inheritance-advance' ? (
                  <Illust.willDocument size={300} stroke="var(--ink)" accent="var(--brand-2)" />
                ) : (
                  <Illust.fundsForward size={320} stroke="var(--ink)" accent="var(--brand-2)" />
                )}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '60px 0' }}>
          <div className="container">
            <div
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }}
            >
              <div>
                <div className="eyebrow">What&apos;s included</div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: 36,
                    margin: '10px 0 16px',
                    lineHeight: 1.1,
                  }}
                >
                  Designed around the realities of estate settlement.
                </h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {product.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: 'flex',
                      gap: 14,
                      alignItems: 'flex-start',
                      padding: '16px 0',
                      borderBottom: '1px solid var(--hairline)',
                    }}
                  >
                    <Icons.check size={18} stroke={2} style={{ color: 'var(--brand)', marginTop: 2 }} />
                    <span style={{ fontSize: 17, lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={{ padding: '60px 0', background: 'var(--surface)' }}>
          <div className="container-sm">
            <div className="eyebrow eyebrow-brand">{product.secondaryTitle}</div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 28,
                lineHeight: 1.4,
                margin: '14px 0 0',
                color: 'var(--ink)',
              }}
            >
              {product.secondaryText}
            </p>
          </div>
        </section>

        <section style={{ padding: '70px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 44,
                margin: '0 0 16px',
                lineHeight: 1.1,
              }}
            >
              Ready to begin?
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto 24px', lineHeight: 1.6 }}>
              The application takes around ten minutes. We&rsquo;ll come back to you within one business day.
            </p>
            <Link href="/apply" className="btn btn-primary">Start your application →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
