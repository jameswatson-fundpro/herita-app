// Logomark — block tile (the locked direction). Filled rounded square,
// reversed-out symmetric H. Reads as a clean wordmark initial at any size.

type Props = {
  size?: number;
  fill?: string;       // tile colour
  glyph?: string;      // H colour (defaults to var(--surface))
  className?: string;
};

export function Logomark({ size = 36, fill, glyph, className }: Props) {
  const s = fill ?? 'var(--brand)';
  const a = glyph ?? 'var(--surface)';
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
      <rect x="2" y="2" width="60" height="60" rx="14" fill={s} />
      <rect x="16" y="14" width="8" height="36" fill={a} />
      <rect x="40" y="14" width="8" height="36" fill={a} />
      <rect x="16" y="28" width="32" height="8" fill={a} />
    </svg>
  );
}
