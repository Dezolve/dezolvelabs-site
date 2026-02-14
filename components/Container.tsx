import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 1rem' }}>{children}</div>;
}
