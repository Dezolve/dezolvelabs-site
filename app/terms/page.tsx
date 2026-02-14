import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for Dezolve Labs websites and content.',
};

export default function TermsPage() {
  return (
    <Container>
      <article className="legal-shell">
        <h1>Terms of Use</h1>
        <p className="legal-meta">Last updated: February 14, 2026</p>

        <p>
          By using this website, you agree to use it lawfully and in a way that does not harm service availability,
          website integrity, or other users.
        </p>

        <h2>Content and ownership</h2>
        <p>
          Unless otherwise noted, content on this site is owned by Dezolve Labs and may not be reproduced or distributed
          without permission.
        </p>

        <h2>Product-specific terms</h2>
        <p>
          Separate terms may apply when using individual products in the Dezolve Labs portfolio. Review those terms on
          each product website.
        </p>

        <h2>Changes</h2>
        <p>We may update these terms periodically. Continued use of the site constitutes acceptance of updates.</p>
      </article>
    </Container>
  );
}
