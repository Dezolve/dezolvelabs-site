import Link from 'next/link';
import { Container } from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <section className="section" style={{ maxWidth: 640 }}>
        <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '2rem' }}>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link href="/" style={{ color: 'var(--accent)' }}>
          Return home
        </Link>
      </section>
    </Container>
  );
}
