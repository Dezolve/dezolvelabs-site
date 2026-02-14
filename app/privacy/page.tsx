import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Dezolve Labs and its websites.',
};

export default function PrivacyPage() {
  return (
    <Container>
      <section className="section" style={{ maxWidth: 800 }}>
        <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '2rem' }}>Privacy Policy</h1>
        <p>Last updated: February 14, 2026</p>
        <p>
          Dezolve Labs collects only the minimum information needed to run this website and support customer inquiries.
          We do not sell personal data. If you contact us, we use your message details solely to respond.
        </p>
        <p>
          Individual products may have their own privacy policies, available on each product detail page and product
          site.
        </p>
      </section>
    </Container>
  );
}
