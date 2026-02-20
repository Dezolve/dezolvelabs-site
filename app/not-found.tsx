import Link from 'next/link';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <section className="not-found">
        <p className="kicker" data-reveal>
          404
        </p>
        <h1 className="page-title" data-reveal style={{ ['--reveal-delay' as string]: '70ms' }}>
          Page not found
        </h1>
        <p data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
          The requested route does not exist in the Dezolve Labs site map.
        </p>
        <Link href="/" className="button button-secondary" style={{ width: 'fit-content' }}>
          Return home
        </Link>
      </section>
    </Container>
  );
}
