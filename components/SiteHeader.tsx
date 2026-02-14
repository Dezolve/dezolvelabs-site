import Link from 'next/link';
import { Container } from '@/components/Container';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header style={{ borderBottom: '1px solid var(--line)', background: 'color-mix(in srgb, var(--surface) 92%, white)' }}>
      <Container>
        <div
          style={{
            minHeight: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            padding: '0.75rem 0',
          }}
        >
          <Link href="/" style={{ fontFamily: 'var(--font-heading), serif', fontWeight: 600, fontSize: '1.2rem' }}>
            Dezolve Labs
          </Link>
          <nav style={{ display: 'flex', gap: '0.95rem', flexWrap: 'wrap' }} aria-label="Primary">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ color: 'var(--muted)', fontWeight: 500 }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
