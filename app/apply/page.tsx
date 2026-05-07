import { Suspense } from 'react';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { Wizard } from '@/components/wizard';

export const metadata = { title: 'Begin your application' };

export default function ApplyPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section style={{ padding: '60px 0 30px', borderBottom: '1px solid var(--hairline)' }}>
          <div className="container">
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'end' }}>
              <div>
                <div className="eyebrow eyebrow-brand">Apply</div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1, margin: '12px 0 20px', letterSpacing: '-0.01em' }}>
                  A short, considered application.
                </h1>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.55, color: 'var(--text)', maxWidth: 600, margin: 0 }}>
                  Around five minutes, three steps, no payslips. We ask about you, the estate and your role within it — that&rsquo;s how we assess every application.
                </p>
              </div>
              <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {[
                  ['What we ask', 'About you, the estate, your role.'],
                  ["What you'll need", 'A Will or probate paperwork, ID.'],
                  ['What happens next', 'A specialist replies within 1 business day.'],
                ].map(([h, d]) => (
                  <div key={h} style={{ borderTop: '1px solid var(--ink)', paddingTop: 12 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16, marginBottom: 6 }}>{h}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '50px 0 70px' }}>
          <div className="container">
            <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--muted)' }}>Loading…</div>}>
              <Wizard />
            </Suspense>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
