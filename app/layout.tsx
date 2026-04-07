import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';

const siteUrl = 'https://dezolvelabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dezolve Labs — Software Studio and Holding Company',
    template: '%s — Dezolve Labs',
  },
  description: 'Dezolve Labs builds focused software products across utility, business, and digital communication.',
  openGraph: {
    title: 'Dezolve Labs — Software Studio and Holding Company',
    description: 'Dezolve Labs builds focused software products across utility, business, and digital communication.',
    url: siteUrl,
    siteName: 'Dezolve Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dezolve Labs — Software Studio and Holding Company',
    description: 'Dezolve Labs builds focused software products across utility, business, and digital communication.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
