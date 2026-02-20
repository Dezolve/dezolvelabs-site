'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Container } from '@/components/Container';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
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
  const isHome = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const userPreference = window.localStorage.getItem('dl-motion');
    const systemPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    return userPreference ? userPreference === 'reduced' : systemPreference;
  });

  useEffect(() => {
    document.documentElement.dataset.motion = reducedMotion ? 'reduced' : 'full';
    window.localStorage.setItem('dl-motion', reducedMotion ? 'reduced' : 'full');
  }, [reducedMotion]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 14);
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

  const headerClassName = useMemo(() => {
    const base = 'site-header';
    const state = isHome && !isScrolled ? 'site-header-overlay' : 'site-header-solid';
    const menuState = menuOpen ? 'is-menu-open' : '';

    return [base, state, menuState].filter(Boolean).join(' ');
  }, [isHome, isScrolled, menuOpen]);

  return (
    <header className={headerClassName}>
      <Container className="site-header-inner">
        <Link href="/" className="brand" aria-label="Dezolve Labs home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Dezolve Labs</span>
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
            className="motion-toggle"
            onClick={() => setReducedMotion((value) => !value)}
            aria-pressed={reducedMotion}
            aria-label="Toggle reduced motion mode"
          >
            {reducedMotion ? 'Motion Off' : 'Motion On'}
          </button>

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
          <p>Dissolving complexity into elegant experiences.</p>
          <div className="mobile-menu-socials" aria-label="Social links">
            <a href="https://www.linkedin.com/company/dezolvelabs" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/dezolvelabs" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://www.youtube.com/@dezolvelabs" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
