import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Link
      href={href}
      style={{
        display: 'inline-flex',
        padding: '0.62rem 1rem',
        borderRadius: '999px',
        border: isPrimary ? '1px solid var(--accent)' : '1px solid var(--line)',
        background: isPrimary ? 'var(--accent)' : 'transparent',
        color: isPrimary ? '#f8fafc' : 'var(--text)',
        fontWeight: 600,
      }}
    >
      {children}
    </Link>
  );
}
