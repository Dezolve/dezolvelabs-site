import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn why Dezolve Labs builds simple tools and what it means to be a calm, focused holding studio.',
};

export default function AboutPage() {
  return (
    <Container>
      <section className="section" style={{ maxWidth: 800 }}>
        <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>About Dezolve Labs</h1>
        <p>
          Dezolve Labs is a holding studio for focused software products. Instead of trying to build everything in one
          platform, we build and support independent tools with clear jobs.
        </p>
        <h2 style={{ fontFamily: 'var(--font-heading), serif', marginTop: '2rem', fontSize: '1.65rem' }}>Philosophy</h2>
        <p>
          Software should reduce mental load, not increase it. Our products are intentionally scoped, calm by default,
          and designed for long-term usefulness instead of short-term attention.
        </p>
        <h2 style={{ fontFamily: 'var(--font-heading), serif', marginTop: '2rem', fontSize: '1.65rem' }}>Mission & values</h2>
        <p>
          We build simple tools that help people make better small decisions. We value clarity, privacy-minded design,
          and sustainable product quality over noise and feature sprawl.
        </p>
      </section>
    </Container>
  );
}
