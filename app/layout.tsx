import type { Metadata } from 'next';
import './globals.css';
import './screenshots.css';
import './theme-hybrid.css';
import { SiteShell } from '@/components/SiteShell';

const siteUrl = 'https://dezolvelabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dezolve Labs — Independent Product Studio',
    template: '%s — Dezolve Labs',
  },
  description:
    'Dezolve Labs builds and grows independent software products across communication, consumer utility, wellness, and business operations.',
  openGraph: {
    title: 'Dezolve Labs — Independent Product Studio',
    description: 'Focused software products, built and owned for the long term.',
    url: siteUrl,
    siteName: 'Dezolve Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dezolve Labs — Independent Product Studio',
    description: 'Focused software products, built and owned for the long term.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
