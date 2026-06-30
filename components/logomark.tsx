// Logomark — Inherita "capped branch" (concept 4c).
// A serif cap crowns a single stem that descends and divides to two
// beneficiary nodes: one estate, passed down and shared. Reads as an
// abstract 'I' at a glance; holds its shape down to a 16px favicon.
//
// Colours come from the theme tokens so the mark adapts to light/dark:
//   cap    → forest (--brand)     stem → brass (--brand-2)   beads → terracotta (--accent)
// In `tile` form the mark reverses out of a forest square (avatars, app icon).

type Props = {
  size?: number;
  variant?: 'mark' | 'tile';   // standalone on the page | reversed inside a forest tile
  className?: string;
};

export function Logomark({ size = 36, variant = 'mark', className }: Props) {
  const tile = variant === 'tile';
  const cap = tile ? 'var(--surface)' : 'var(--brand)';
  const stem = tile ? 'var(--surface)' : 'var(--brand-2)';
  const bead = tile ? 'var(--brand-2)' : 'var(--accent)';

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {tile && <rect x="2" y="2" width="60" height="60" rx="14" fill="var(--brand)" />}
      <rect x="22" y="14" width="20" height="3.6" rx="0.5" fill={cap} />
      <path
        d="M32 19 V33 M32 33 L22 47 M32 33 L42 47"
        fill="none"
        stroke={stem}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="22" cy="48" r="4.5" fill={bead} />
      <circle cx="42" cy="48" r="4.5" fill={bead} />
    </svg>
  );
}
