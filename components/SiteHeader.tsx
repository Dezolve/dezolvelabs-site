'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '@/components/Container';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/studio', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
];

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${isScrolled || pathname !== '/' || menuOpen ? 'site-header-solid' : 'site-header-overlay'} ${menuOpen ? 'is-menu-open' : ''}`}>
      <Container className="site-header-inner">
        <Link href="/" className="brand" aria-label="Dezolve Labs home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-lockup">
            <strong>Dezolve Labs</strong>
            <em>Software studio and holding company</em>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav-link ${isActivePath(pathname, item.href) ? 'is-active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-controls">
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
            <span />
          </button>
        </div>
      </Container>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} id="mobile-menu">
        <nav className="mobile-menu-nav" aria-label="Mobile">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-menu-link ${isActivePath(pathname, item.href) ? 'is-active' : ''}`}
              style={{ ['--item-index' as string]: String(index) }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-meta">
          <p>The studio behind a growing portfolio of focused digital products.</p>
          <div className="mobile-menu-socials" aria-label="Social links">
            <a href="https://www.linkedin.com/company/dezolvelabs" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/dezolvelabs" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://github.com/Dezolve" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
