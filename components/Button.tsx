import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:');
}

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  const classes = ['button', `button-${variant}`, className].filter(Boolean).join(' ');

  if (isExternalHref(href)) {
    const shouldOpenNewTab = href.startsWith('http://') || href.startsWith('https://');

    return (
      <a href={href} className={classes} target={shouldOpenNewTab ? '_blank' : undefined} rel={shouldOpenNewTab ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
