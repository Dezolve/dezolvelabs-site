import Link from 'next/link';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <section className="not-found">
        <span className="section-kicker">404</span>
        <h1 className="page-title">Page not found</h1>
        <p>The requested route does not exist in the Dezolve Labs site map.</p>
        <Link href="/" className="button button-secondary" style={{ width: 'fit-content' }}>
          Return home
        </Link>
      </section>
    </Container>
  );
}
