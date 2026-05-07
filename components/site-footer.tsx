import Link from 'next/link';
import { Logomark } from './logomark';
import { SITE } from '@/lib/site';

export function SiteFooter() {
  const groups: { title: string; items: { label: string; href: string }[] }[] = [
    {
      title: 'Company',
      items: [
        { label: 'Partners', href: '/partners' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      items: SITE.legal.pages
        .filter((p) => p.slug !== 'terms')
        .map((p) => ({ label: p.title, href: `/legal/${p.slug}` })),
    },
  ];

  return (
    <footer
      style={{
        marginTop: 60,
        padding: '60px 0 40px',
        borderTop: '1px solid var(--hairline)',
        background: 'var(--bg)',
      }}
    >
      <div className="container">
        <div
          className="grid-3"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 32 }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <Logomark size={32} fill="var(--brand)" glyph="var(--surface)" />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>Herita</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 360 }}>
              Loans made by {SITE.brand.legalName} (ACN {SITE.brand.acn}). Authorised Credit Representative under [ACL Holder] (ACL {SITE.brand.acl}). Information is general in nature and does not consider your circumstances.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="eyebrow">{g.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
                {g.items.map((i) => (
                  <li key={i.label} style={{ padding: '6px 0', fontSize: 14 }}>
                    <Link href={i.href} style={{ color: 'var(--text)', textDecoration: 'none' }}>
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: '1px solid var(--hairline)',
            fontSize: 12,
            color: 'var(--muted)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <span>© {new Date().getFullYear()} {SITE.brand.legalName}.</span>
          <span className="eyebrow">Australian Credit Licence {SITE.brand.acl}</span>
        </div>
      </div>
    </footer>
  );
}
