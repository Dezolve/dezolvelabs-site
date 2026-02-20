import type { Metadata } from 'next';
import { Container } from '@/components/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Dezolve Labs and connect through direct channels.',
};

export default function ContactPage() {
  return (
    <Container>
      <section className="page-shell" aria-labelledby="contact-heading">
        <header className="page-intro">
          <p className="kicker" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
            Contact
          </p>
          <h1 id="contact-heading" className="page-title" data-reveal style={{ ['--reveal-delay' as string]: '90ms' }}>
            Start your project with a clear first step.
          </h1>
          <p className="page-copy" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
            Share your context, timeline, and constraints. We will respond with practical guidance and the next best action.
          </p>
        </header>

        <div className="contact-grid">
          <form
            className="contact-form-panel"
            data-reveal
            style={{ ['--reveal-delay' as string]: '100ms' }}
            action="mailto:hello@dezolvelabs.com"
            method="post"
            encType="text/plain"
          >
            <h2>Project brief</h2>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>

            <div className="field">
              <label htmlFor="summary">Project summary</label>
              <textarea id="summary" name="summary" placeholder="What are you building and where are you blocked?" required />
            </div>

            <button className="button button-primary" type="submit">
              Send project brief
            </button>
          </form>

          <aside className="contact-card-panel" data-reveal style={{ ['--reveal-delay' as string]: '160ms' }}>
            <h2>Direct channels</h2>
            <p>
              Email us directly at{' '}
              <a className="inline-link" href="mailto:hello@dezolvelabs.com">
                hello@dezolvelabs.com
              </a>
              .
            </p>
            <p>Typical response time: two business days.</p>

            <div className="contact-social-list">
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
          </aside>
        </div>
      </section>
    </Container>
  );
}
