'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const mainClassName = isHome ? 'main-home' : 'main-site';

  return (
    <>
      {!isHome ? <SiteHeader /> : null}
      <main className={mainClassName}>{children}</main>
      {!isHome ? <SiteFooter /> : null}
    </>
  );
}
