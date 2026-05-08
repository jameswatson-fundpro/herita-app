import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'FAQs — Herita',
  description: 'Answers to common questions about inheritance advances and the Herita application process.',
};

export default function FaqsPage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Header */}
        <section style={{ padding: '70px 0 50px', borderBottom: '1px solid var(--hairline)' }}>
          <div className="container">
            <div className="eyebrow eyebrow-brand">Help</div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(44px, 6vw, 76px)',
                lineHeight: 1,
                margin: '14px 0 20px',
                letterSpacing: '-0.01em',
                maxWidth: 700,
              }}
            >
              Frequently asked questions.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 20,
                lineHeight: 1.5,
                color: 'var(--muted)',
                maxWidth: 560,
                margin: 0,
              }}
            >
              Everything you need to know about how inheritance advances work. Can&rsquo;t find your answer?{' '}
              <Link href="/contact" style={{ color: 'var(--brand)' }}>Get in touch.</Link>
            </p>
          </div>
        </section>

        {/* FAQ sections */}
        <section style={{ padding: '60px 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 56, maxWidth: 760 }}>
              {SITE.faqs.map((section) => (
                <div key={section.category}>
                  <div className="eyebrow" style={{ marginBottom: 24 }}>{section.category}</div>
                  <div>
                    {section.items.map((item, idx) => (
                      <div
                        key={item.q}
                        style={{
                          borderTop: '1px solid var(--hairline)',
                          paddingTop: 24,
                          paddingBottom: 24,
                          ...(idx === section.items.length - 1 ? { borderBottom: '1px solid var(--hairline)' } : {}),
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 500,
                            fontSize: 20,
                            margin: '0 0 10px',
                            lineHeight: 1.25,
                            color: 'var(--ink)',
                          }}
                        >
                          {item.q}
                        </h3>
                        <p style={{ color: 'var(--muted)', lineHeight: 1.65, margin: 0, fontSize: 15 }}>
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '60px 0', borderTop: '1px solid var(--hairline)' }}>
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
              Ready to check eligibility?
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto 28px', lineHeight: 1.6 }}>
              The application takes around 10 minutes. We ask about the estate, not your income.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/apply" className="btn btn-primary">Check eligibility →</Link>
              <Link href="/#calculator" className="btn btn-ghost">See cost estimate</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
