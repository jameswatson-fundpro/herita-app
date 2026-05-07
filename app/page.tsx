import { Suspense } from 'react';
import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { Calculator } from '@/components/calculator';
import { Illust } from '@/components/illustrations';
import { Icons } from '@/components/icons';
import { SITE } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section style={{ padding: '80px 0 60px', borderBottom: '1px solid var(--hairline)' }}>
          <div className="container">
            <div
              className="hero-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.3fr 1fr',
                gap: 60,
                alignItems: 'end',
              }}
            >
              <div>
                <h1
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontSize: 'clamp(56px, 8vw, 104px)',
                    lineHeight: 0.95,
                    margin: '0 0 28px',
                    letterSpacing: '-0.015em',
                    color: 'var(--ink)',
                  }}
                >
                  Your inheritance,
                  <br />
                  <em style={{ fontStyle: 'italic', color: 'var(--brand)' }}>when you need it.</em>
                </h1>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 22,
                    lineHeight: 1.5,
                    color: 'var(--text)',
                    maxWidth: 540,
                    margin: '0 0 32px',
                  }}
                >
                  Estate settlement takes time. We advance funds against your confirmed inheritance — no monthly repayments, and everything settles when the estate finalises.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="/apply" className="btn btn-primary">Check eligibility →</Link>
                  <Link href="#how-it-works" className="btn btn-ghost">How it works</Link>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Illust.estateHouse size={320} stroke="var(--ink)" accent="var(--brand-2)" fill="var(--surface-2)" />
              </div>
            </div>

            {/* KPI strip */}
            <div
              className="grid-3"
              style={{
                marginTop: 56,
                paddingTop: 28,
                borderTop: '1px solid var(--hairline)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
              }}
            >
              {SITE.trustKpis.map(([k, v]) => {
                const parenIdx = v.indexOf('(');
                const main = parenIdx > -1 ? v.slice(0, parenIdx).trim() : v;
                const sub = parenIdx > -1 ? v.slice(parenIdx) : null;
                return (
                  <div key={k}>
                    <div className="eyebrow">{k}</div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 36,
                        fontWeight: 500,
                        color: 'var(--ink)',
                        marginTop: 4,
                        lineHeight: 1.2,
                      }}
                    >
                      {main}
                    </div>
                    {sub && (
                      <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4, lineHeight: 1.4 }}>
                        {sub}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="The process" title="Four simple steps">
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {SITE.howItWorks.map(([t, d], i) => (
              <article key={t}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 56,
                    fontWeight: 400,
                    color: 'var(--brand-2)',
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ height: 1, background: 'var(--ink)', margin: '14px 0', opacity: 0.6 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, margin: '0 0 8px', lineHeight: 1.2 }}>
                  {t}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>{d}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Calculator */}
        <Section id="calculator" eyebrow="The estimate" title="See what an advance could cost">
          <Suspense><Calculator initialViz="donut" /></Suspense>
        </Section>

        {/* Why */}
        <Section eyebrow="Why families choose us" title="Financial support when you need it most.">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {SITE.whyInherit.map(([t, d], i) => (
              <div key={t} style={{ borderLeft: '1px solid var(--hairline)', paddingLeft: 28 }}>
                <div className="eyebrow eyebrow-brand">0{i + 1}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, margin: '8px 0 12px', lineHeight: 1.2 }}>
                  {t}
                </h3>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </Section>


        {/* Money uses */}
        <Section eyebrow="Common purposes" title="What people use their advance for">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {SITE.moneyUses.map((u) => (
              <div
                key={u}
                style={{
                  padding: '20px 24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                }}
              >
                <span>{u}</span>
                <Icons.arrowSm size={18} style={{ color: 'var(--brand-2)' }} />
              </div>
            ))}
          </div>
        </Section>

        {/* Partner CTA */}
        <Section title="">
          <div
            className="hero-grid"
            style={{
              background: 'var(--ink)',
              color: 'var(--surface)',
              padding: 56,
              borderRadius: 'var(--radius-xl)',
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 40,
              alignItems: 'center',
            }}
          >
            <div>
              <div className="eyebrow eyebrow-brand">For professionals</div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 44,
                  margin: '12px 0 16px',
                  lineHeight: 1.1,
                  color: 'var(--surface)',
                }}
              >
                Estate lawyers, financial planners &amp; advisers.
              </h2>
              <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: 24, maxWidth: 480 }}>
                We work closely with the professionals who guide families through estate administration. If your clients need liquidity before settlement, we&rsquo;d like to hear from you.
              </p>
              <Link href="/partners" className="btn btn-on-dark">Working with us →</Link>
            </div>
            <Illust.fairness size={220} stroke="var(--brand-2)" accent="var(--surface)" />
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: '70px 0' }}>
      <div className="container">
        {(eyebrow || title) && (
          <div style={{ marginBottom: 36, maxWidth: 720 }}>
            {eyebrow && <div className="eyebrow">{eyebrow}</div>}
            {title && (
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'calc(44px * var(--head-scale, 1))',
                  lineHeight: 1.05,
                  margin: '12px 0 0',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
