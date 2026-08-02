'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '@/components/Container';

const navItems = [
  { href: '/portfolio', label: 'Products' },
  { href: '/studio', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

function isActivePath(pathname: string, href: string) {
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className={`site-header ${isScrolled || pathname !== '/' || menuOpen ? 'site-header-solid' : ''}`}>
      <Container className="site-header-inner">
        <Link href="/" className="brand" aria-label="Dezolve Labs home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            D
          </span>
          <span className="brand-lockup">
            <strong>Dezolve Labs</strong>
            <em>Independent product studio</em>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`site-nav-link ${isActivePath(pathname, item.href) ? 'is-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/portfolio" className="header-cta" onClick={closeMenu}>
            View portfolio
          </Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </Container>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} id="mobile-menu">
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          <Link href="/" className={pathname === '/' ? 'is-active' : ''} onClick={closeMenu}>
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={isActivePath(pathname, item.href) ? 'is-active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p>Focused software products, built and owned for the long term.</p>
      </div>
    </header>
  );
}
