import type { Metadata } from 'next';
import { Fraunces, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

const headingFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
});

const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
});

const siteUrl = 'https://dezolvelabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dezolve Labs',
    template: '%s | Dezolve Labs',
  },
  description: 'Dezolve Labs builds calm, practical software products that dissolve complexity into simple daily actions.',
  openGraph: {
    title: 'Dezolve Labs',
    description:
      'Dissolving complexity, one simple product at a time. Explore FavStir, Refreshly, and future tools from Dezolve Labs.',
    url: siteUrl,
    siteName: 'Dezolve Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dezolve Labs',
    description:
      'Dissolving complexity, one simple product at a time. Explore products built by Dezolve Labs.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body
        style={{
          fontFamily: 'var(--font-body), sans-serif',
        }}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
