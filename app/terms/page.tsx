import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Dezolve Labs websites and content.',
};

export default function TermsPage() {
  return (
    <Container>
      <section className="section" style={{ maxWidth: 800 }}>
        <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '2rem' }}>Terms of Use</h1>
        <p>Last updated: February 14, 2026</p>
        <p>
          By using this site, you agree to use it lawfully and not attempt to disrupt service or misuse content.
          Product-specific terms may apply when using individual Dezolve Labs products.
        </p>
        <p>All rights reserved by Dezolve Labs.</p>
      </section>
    </Container>
  );
}
