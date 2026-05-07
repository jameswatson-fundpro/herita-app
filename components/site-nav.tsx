'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logomark } from './logomark';
import { useTheme } from './theme-provider';
import { useState } from 'react';

const NAV: { href: string; label: string }[] = [
  { href: '/inheritance-advance', label: 'Inheritance Advance' },
  { href: '/executor-loan', label: 'Executor Loan' },
  { href: '/partners', label: 'Partners' },
];

export function SiteNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        padding: '20px 0',
        borderBottom: '1px solid var(--hairline)',
        background: 'var(--bg)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none',
            color: 'var(--ink)',
          }}
        >
          <Logomark size={36} fill="var(--brand)" glyph="var(--surface)" />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 28,
              letterSpacing: '0.01em',
            }}
          >
            Herita
          </span>
        </Link>

        <nav
          className="nav-links"
          style={{ display: 'flex', gap: 28, alignItems: 'center' }}
        >
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 15,
                  color: active ? 'var(--ink)' : 'var(--muted)',
                  fontWeight: active ? 600 : 500,
                  textDecoration: 'none',
                  borderBottom: active ? '1px solid var(--ink)' : '1px solid transparent',
                  paddingBottom: 2,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-strong)',
              borderRadius: 999,
              width: 36,
              height: 36,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ink)',
            }}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <Link href="/apply" className="btn btn-primary">
            Apply Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: '1px solid var(--border-strong)',
            borderRadius: 8,
            padding: '8px 12px',
            cursor: 'pointer',
            color: 'var(--ink)',
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className="container"
          style={{
            display: 'flex',
            paddingTop: 16,
            paddingBottom: 16,
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--text)', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/apply" className="btn btn-primary" onClick={() => setOpen(false)}>
            Apply Now
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
