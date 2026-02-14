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
    <header className="site-header">
      <Container className="site-header-inner">
        <Link href="/" className="brand" aria-label="Dezolve Labs home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Dezolve Labs</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
