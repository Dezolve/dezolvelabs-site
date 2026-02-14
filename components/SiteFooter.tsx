import Link from 'next/link';
import { Container } from '@/components/Container';

export function SiteFooter() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', marginTop: '2rem' }}>
      <Container>
        <div
          style={{
            minHeight: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            padding: '1rem 0',
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Dezolve Labs</p>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <Link href="/privacy" style={{ color: 'var(--muted)' }}>
              Privacy
            </Link>
            <Link href="/terms" style={{ color: 'var(--muted)' }}>
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
