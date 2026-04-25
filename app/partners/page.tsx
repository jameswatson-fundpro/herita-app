import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { Illust } from '@/components/illustrations';
import { Icons } from '@/components/icons';
import { SITE } from '@/lib/site';

export const metadata = { title: 'For partners' };

export default function PartnersPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section style={{ padding: '70px 0 50px', borderBottom: '1px solid var(--hairline)' }}>
          <div className="container">
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'center' }}>
              <div>
                <div className="eyebrow eyebrow-brand">For estate professionals</div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1, margin: '14px 0 24px', letterSpacing: '-0.01em' }}>
                  A liquidity partner you can <em style={{ color: 'var(--brand)' }}>recommend.</em>
                </h1>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, maxWidth: 540, margin: '0 0 28px' }}>
                  Estate lawyers, financial planners and trustee firms refer clients to Herita when their families need funds before settlement. Plain documentation, no client out-of-pocket exposure, no surprises.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link href="mailto:partners@herita.com.au" className="btn btn-primary">Get in touch →</Link>
                </div>
              </div>
              <Illust.fairness size={260} stroke="var(--ink)" accent="var(--brand-2)" />
            </div>
          </div>
        </section>

        <section style={{ padding: '60px 0' }}>
          <div className="container">
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {SITE.partners.valueProps.map(([who, headline, body]) => (
                <article key={who} style={{ borderLeft: '1px solid var(--hairline)', paddingLeft: 24 }}>
                  <div className="eyebrow">{who}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, margin: '8px 0 12px', lineHeight: 1.1 }}>{headline}</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '60px 0', background: 'var(--surface)' }}>
          <div className="container">
            <div className="eyebrow">How we operate</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, margin: '12px 0 32px', lineHeight: 1.1 }}>
              Conservative by design.
            </h2>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              {SITE.partners.trust.map(([t, d]) => (
                <div key={t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 0', borderTop: '1px solid var(--hairline)' }}>
                  <Icons.shield size={20} stroke={1.5} style={{ color: 'var(--brand)', marginTop: 2, flex: '0 0 auto' }} />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, margin: '0 0 6px' }}>{t}</h4>
                    <p style={{ color: 'var(--muted)', lineHeight: 1.55, margin: 0, fontSize: 14 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '70px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, margin: '0 0 16px', lineHeight: 1.1 }}>
              Let&rsquo;s talk.
            </h2>
            <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto 24px', lineHeight: 1.6 }}>
              We&rsquo;re happy to walk through the product, our security framework, and how referrals work.
            </p>
            <Link href="mailto:partners@herita.com.au" className="btn btn-primary">partners@herita.com.au →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
