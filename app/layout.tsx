import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/SiteShell';

const siteUrl = 'https://dezolvelabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dezolve Labs',
    template: '%s | Dezolve Labs',
  },
  description: 'Dezolve Labs dissolves complexity into simple, meaningful digital experiences.',
  openGraph: {
    title: 'Dezolve Labs',
    description: 'Studio-built software products focused on clarity, calm interactions, and practical outcomes.',
    url: siteUrl,
    siteName: 'Dezolve Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dezolve Labs',
    description: 'Dissolving complexity into simple, meaningful digital experiences.',
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
