import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Dezolve Labs for support, collaboration, and partnership inquiries.',
};

export default function ContactPage() {
  return (
    <Container>
      <section className="section" style={{ maxWidth: 720 }}>
        <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Contact</h1>
        <p>Questions, support, or partnership inquiries are welcome.</p>
        <div style={{ marginTop: '1rem' }}>
          <Button href="mailto:hello@dezolvelabs.com">Email hello@dezolvelabs.com</Button>
        </div>

        <div
          style={{
            marginTop: '2rem',
            border: '1px solid var(--line)',
            padding: '1.25rem',
            background: 'var(--surface)',
            borderRadius: '16px',
          }}
        >
          <h2 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '1.4rem' }}>Quick form</h2>
          <p style={{ marginTop: '0.5rem' }}>Use your mail app to send us a note with context.</p>
          <a href="mailto:hello@dezolvelabs.com?subject=Dezolve%20Labs%20Inquiry" style={{ color: 'var(--accent)' }}>
            Open mail draft
          </a>
        </div>
      </section>
    </Container>
  );
}
