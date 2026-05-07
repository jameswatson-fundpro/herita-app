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
            <div className="eyebrow eyebrow-brand">Apply</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(44px, 6vw, 72px)', lineHeight: 1, margin: '12px 0 20px', letterSpacing: '-0.01em' }}>
              A short, considered application.
            </h1>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, lineHeight: 1.55, color: 'var(--text)', maxWidth: 600, margin: 0 }}>
              Around five minutes, three steps, no payslips. We ask about you, the estate and your role within it — that&rsquo;s how we assess every application.
            </p>
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
