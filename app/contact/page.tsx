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
      <section className="section" aria-labelledby="contact-heading">
        <header className="page-intro">
          <span className="section-kicker">Contact</span>
          <h1 id="contact-heading" className="page-title reveal" style={{ ['--delay' as string]: '50ms' }}>
            Let&apos;s talk about product support or collaboration
          </h1>
          <p className="section-copy reveal" style={{ ['--delay' as string]: '110ms' }}>
            Reach out for product questions, partnerships, or media inquiries. Messages go directly to the Dezolve Labs
            team mailbox.
          </p>
        </header>

        <div className="contact-grid">
          <form className="contact-form reveal" style={{ ['--delay' as string]: '130ms' }} action="mailto:hello@dezolvelabs.com" method="post" encType="text/plain">
            <h2>Quick message</h2>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us what you need" required />
            </div>
            <button className="button button-primary" type="submit">
              Open Email Draft
            </button>
          </form>

          <aside className="contact-card reveal" style={{ ['--delay' as string]: '180ms' }}>
            <h2>Direct channels</h2>
            <p>
              Prefer direct email? Use <a className="inline-link" href="mailto:hello@dezolvelabs.com">hello@dezolvelabs.com</a>.
            </p>
            <p style={{ marginTop: '0.85rem' }}>
              We usually reply within two business days.
            </p>
            <div className="support-links" style={{ marginTop: '1rem' }}>
              <a className="support-link" href="mailto:hello@dezolvelabs.com">
                Email
              </a>
              <a className="support-link" href="https://github.com/Dezolve" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div style={{ marginTop: '1.2rem' }}>
              <Button href="/projects" variant="ghost">
                Explore Projects
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </Container>
  );
}
