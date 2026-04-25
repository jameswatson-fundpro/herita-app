import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { listSubmissions } from '@/lib/submissions';

export const dynamic = 'force-dynamic';

const COOKIE = 'herita_admin';

async function login(formData: FormData) {
  'use server';
  const pw = String(formData.get('password') || '');
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    redirect('/admin?error=ADMIN_PASSWORD%20is%20not%20set');
  }
  if (pw !== expected) {
    redirect('/admin?error=Incorrect%20password');
  }
  cookies().set(COOKIE, pw, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8 hours
  });
  redirect('/admin');
}

async function logout() {
  'use server';
  cookies().delete(COOKIE);
  redirect('/admin');
}

function isAuthed(): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const c = cookies().get(COOKIE);
  return !!c && c.value === expected;
}

export default function AdminPage({ searchParams }: { searchParams: { error?: string } }) {
  const authed = isAuthed();

  if (!authed) {
    return (
      <>
        <SiteNav />
        <main>
          <section style={{ padding: '90px 0' }}>
            <div className="container-sm" style={{ maxWidth: 440 }}>
              <div className="eyebrow eyebrow-brand">Restricted</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, margin: '12px 0 20px', lineHeight: 1.1 }}>
                Admin sign-in
              </h1>
              <form action={login} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 28 }}>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--border-strong)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                    fontSize: 15,
                    fontFamily: 'inherit',
                  }}
                />
                {searchParams.error && (
                  <div style={{ marginTop: 12, fontSize: 13, color: 'var(--accent)' }}>{searchParams.error}</div>
                )}
                <button type="submit" className="btn btn-primary" style={{ marginTop: 16, width: '100%' }}>
                  Sign in
                </button>
              </form>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16 }}>
                Set <code>ADMIN_PASSWORD</code> in your environment to enable this page.
              </p>
            </div>
          </section>
        </main>
        <SiteFooter />
      </>
    );
  }

  const subs = listSubmissions();

  return (
    <>
      <SiteNav />
      <main>
        <section style={{ padding: '50px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div className="eyebrow eyebrow-brand">Admin · Submissions</div>
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, margin: '8px 0 0', lineHeight: 1.1 }}>
                  Recent applications
                </h1>
              </div>
              <form action={logout}>
                <button type="submit" className="btn btn-ghost">Sign out</button>
              </form>
            </div>

            {subs.length === 0 ? (
              <div style={{ padding: 40, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', textAlign: 'center', color: 'var(--muted)' }}>
                No submissions yet. They&rsquo;ll appear here as soon as the first application comes in.
              </div>
            ) : (
              <div style={{ overflow: 'auto', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', background: 'var(--surface)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: 'var(--surface-2)', textAlign: 'left' }}>
                      <Th>Reference</Th>
                      <Th>Received</Th>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th>Product</Th>
                      <Th>Amount</Th>
                      <Th>Status</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {subs.map((s) => {
                      const d = s.data as Record<string, string>;
                      return (
                        <tr key={s.ref} style={{ borderTop: '1px solid var(--hairline)' }}>
                          <Td><code style={{ fontSize: 12 }}>{s.ref}</code></Td>
                          <Td>{new Date(s.receivedAt).toLocaleString('en-AU')}</Td>
                          <Td>{[d.firstName, d.lastName].filter(Boolean).join(' ') || '—'}</Td>
                          <Td>{d.email || '—'}</Td>
                          <Td>{d.product || '—'}</Td>
                          <Td>{d.estimatedAmount ? `$${d.estimatedAmount}` : '—'}</Td>
                          <Td>
                            <span style={{
                              fontSize: 11,
                              padding: '3px 8px',
                              borderRadius: 999,
                              background: s.status === 'webhook-ok' ? 'color-mix(in oklab, var(--brand) 14%, var(--surface))' : s.status === 'webhook-failed' ? 'color-mix(in oklab, var(--accent) 18%, var(--surface))' : 'var(--surface-2)',
                              color: s.status === 'webhook-failed' ? 'var(--accent)' : 'var(--ink)',
                              fontWeight: 600,
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                            }}>
                              {s.status}
                            </span>
                          </Td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 18 }}>
              Submissions are stored in memory and reset on redeploy. For production, swap{' '}
              <code>lib/submissions.ts</code> for a real database.
              {' '}
              <Link href="/" style={{ color: 'var(--muted)' }}>← Back to site</Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ padding: '12px 16px', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
  return <td style={{ padding: '14px 16px', verticalAlign: 'middle' }}>{children}</td>;
}
