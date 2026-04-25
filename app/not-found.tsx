import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main>
        <section style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="container-sm">
            <div className="eyebrow eyebrow-brand">404</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 7vw, 88px)', lineHeight: 1, margin: '12px 0 24px' }}>
              We can&rsquo;t find that page.
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 18, lineHeight: 1.6, marginBottom: 28 }}>
              The page may have moved, or the link might be incorrect.
            </p>
            <Link href="/" className="btn btn-primary">Back to home →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
