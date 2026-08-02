import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

const outreachReasons = [
  'Product partnerships',
  'Platform integrations',
  'Investment or acquisition',
  'Product feedback',
  'Press or studio inquiries',
];

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Dezolve Labs about product partnerships, integrations, investment, and studio inquiries.',
};

export default function ContactPage() {
  return (
    <Container>
      <div className="page-shell contact-page-shell" aria-labelledby="contact-heading">
        <section className="page-intro contact-intro">
          <p className="kicker" data-reveal>
            Contact
          </p>
          <h1 id="contact-heading" className="page-title" data-reveal>
            Tell us what you have in mind.
          </h1>
          <p className="page-copy max-copy-width" data-reveal>
            Share the opportunity, why you think Dezolve Labs may be a fit, and what you would like to discuss next.
          </p>
        </section>

        <section className="contact-layout">
          <aside className="contact-sidebar" data-reveal>
            <p className="kicker">Reasons to reach out</p>
            <div className="contact-reason-list">
              {outreachReasons.map((reason) => (
                <p key={reason}>{reason}</p>
              ))}
            </div>

            <div className="contact-direct-block">
              <h2>Email Dezolve Labs</h2>
              <p>Email is the best way to start a conversation.</p>
              <a className="contact-email-link" href="mailto:hello@dezolvelabs.com">
                hello@dezolvelabs.com ↗
              </a>
              <div className="contact-social-list" aria-label="Social links">
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
            </div>
          </aside>

          <form
            className="contact-form-panel"
            data-reveal
            action="mailto:hello@dezolvelabs.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-heading">
              <p className="kicker">Start a conversation</p>
              <h2>What would you like to discuss?</h2>
              <p>A few clear details will help us give you a useful reply.</p>
            </div>

            <div className="field-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="topic">Topic</label>
              <input id="topic" name="topic" type="text" placeholder="Partnership, integration, investment, feedback" required />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="What is the opportunity, why do you think there may be a fit, and what would you like to do next?"
                required
              />
            </div>

            <div className="form-actions">
              <button className="button button-primary" type="submit">
                Open email draft
              </button>
              <Button href="mailto:hello@dezolvelabs.com" variant="secondary">
                Email directly
              </Button>
            </div>
          </form>
        </section>
      </div>
    </Container>
  );
}
