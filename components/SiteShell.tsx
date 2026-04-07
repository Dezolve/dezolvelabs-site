'use client';

import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.dataset.motion = prefersReduced ? 'reduced' : 'full';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      if (prefersReduced || document.documentElement.dataset.motion === 'reduced') {
        element.classList.add('is-visible');
        return;
      }

      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <SiteHeader />
      <main className={pathname === '/' ? 'main-shell main-shell-home' : 'main-shell'}>{children}</main>
      <SiteFooter />
    </>
  );
}
