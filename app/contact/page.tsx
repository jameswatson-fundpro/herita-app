import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';

export const metadata = { title: 'Contact — Herita' };

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section style={{ padding: '60px 0 40px', borderBottom: '1px solid var(--hairline)' }}>
          <div className="container">
            <div className="eyebrow eyebrow-brand">Contact</div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1,
                margin: '12px 0 20px',
                letterSpacing: '-0.01em',
              }}
            >
              Get in touch.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 20,
                lineHeight: 1.55,
                color: 'var(--text)',
                margin: 0,
              }}
            >
              We&rsquo;re here to help. Reach out and a member of our team will respond within one business day.
            </p>
          </div>
        </section>

        <section style={{ padding: '60px 0 80px' }}>
          <div className="container">
            <div
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: 28,
                    margin: '0 0 24px',
                    lineHeight: 1.2,
                  }}
                >
                  Contact details
                </h2>

                {[
                  { label: 'Email', value: 'hello@herita.com.au', href: 'mailto:hello@herita.com.au' },
                  { label: 'Phone', value: '+61 2 0000 0000', href: 'tel:+61200000000' },
                  { label: 'Hours', value: 'Monday – Friday, 9 am – 5 pm AEST', href: null },
                ].map(({ label, value, href }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                      padding: '20px 0',
                      borderTop: '1px solid var(--hairline)',
                    }}
                  >
                    <div className="eyebrow">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 20,
                          color: 'var(--ink)',
                          textDecoration: 'none',
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--ink)' }}>
                        {value}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 36,
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: 24,
                    margin: '0 0 8px',
                    lineHeight: 1.2,
                  }}
                >
                  Office address
                </h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, margin: '0 0 28px' }}>
                  Placeholder Street<br />
                  Sydney NSW 2000<br />
                  Australia
                </p>

                <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 24 }}>
                  <div className="eyebrow" style={{ marginBottom: 8 }}>Ready to apply?</div>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 16px', fontSize: 14 }}>
                    Start your application online — it takes around five minutes.
                  </p>
                  <a href="/apply" className="btn btn-primary" style={{ display: 'inline-flex' }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
