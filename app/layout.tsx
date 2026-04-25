import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://herita.com.au'),
  title: {
    default: 'Herita — Your inheritance, when you need it',
    template: '%s · Herita',
  },
  description:
    'Estate settlement takes time. Herita advances funds against your confirmed inheritance — no monthly repayments, repaid from the estate at settlement.',
  openGraph: {
    title: 'Herita — Your inheritance, when you need it',
    description:
      'Estate settlement takes time. Herita advances funds against your confirmed inheritance.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
