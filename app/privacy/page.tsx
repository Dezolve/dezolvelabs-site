import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Dezolve Labs and its websites.',
};

export default function PrivacyPage() {
  return (
    <Container>
      <article className="legal-shell">
        <p className="kicker" data-reveal>
          Legal
        </p>
        <h1 data-reveal style={{ ['--reveal-delay' as string]: '60ms' }}>
          Privacy Policy
        </h1>
        <p className="legal-meta" data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
          Last updated: February 14, 2026
        </p>

        <p data-reveal style={{ ['--reveal-delay' as string]: '130ms' }}>
          Dezolve Labs collects only the information needed to operate this website and respond to direct inquiries. We do
          not sell personal data or use personal information for unrelated marketing.
        </p>

        <h2>Information we receive</h2>
        <p>
          If you contact us, we receive the information you include in your message, such as your name, email address,
          and inquiry details.
        </p>

        <h2>How we use information</h2>
        <p>We use submitted information only to respond to support, partnership, or business requests.</p>

        <h2>Product-specific policies</h2>
        <p>
          Individual products under Dezolve Labs may publish separate privacy policies. Those policies apply when using
          the specific product service.
        </p>
      </article>
    </Container>
  );
}
