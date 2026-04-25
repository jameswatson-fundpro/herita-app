// Stroke-only icon set. Inherits currentColor.
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number; stroke?: number };

const Icon = ({ children, size = 20, stroke = 1.5, ...rest }: IconProps & { children: React.ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const Icons = {
  arrow: (p: IconProps) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>,
  arrowSm: (p: IconProps) => <Icon {...p}><path d="M7 12h10M12 7l5 5-5 5" /></Icon>,
  check: (p: IconProps) => <Icon {...p}><path d="M4 12.5l4.5 4.5L20 5.5" /></Icon>,
  close: (p: IconProps) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18" /></Icon>,
  menu: (p: IconProps) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>,
};
