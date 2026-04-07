import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

const outreachReasons = [
  'Strategic partnership ideas',
  'Venture or product collaboration',
  'Select product or company opportunities',
  'Press or speaking inquiries',
];

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach Dezolve Labs for aligned partnerships, collaboration, and product opportunities.',
};

export default function ContactPage() {
  return (
    <Container>
      <div className="page-shell" aria-labelledby="contact-heading">
        <section className="page-intro">
          <p className="kicker" data-reveal>
            Contact
          </p>
          <h1 id="contact-heading" className="page-title" data-reveal>
            Reach out if the fit is right.
          </h1>
          <p className="page-copy max-copy-width" data-reveal>
            Dezolve Labs welcomes thoughtful outreach around partnerships, collaboration, product opportunities, and
            conversations aligned with the company’s long-term direction.
          </p>
        </section>

        <section className="contact-layout">
          <aside className="surface-card contact-sidebar" data-reveal>
            <p className="kicker">Good reasons to reach out</p>
            <div className="bullet-panel compact-bullets">
              {outreachReasons.map((reason) => (
                <p key={reason} className="bullet-line">
                  {reason}
                </p>
              ))}
            </div>

            <div className="contact-direct-block">
              <h2>Direct contact</h2>
              <p>
                Email is the primary path for thoughtful outreach. Reach the studio at{' '}
                <a className="inline-link" href="mailto:hello@dezolvelabs.com">
                  hello@dezolvelabs.com
                </a>
                .
              </p>
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
            className="surface-card contact-form-panel"
            data-reveal
            action="mailto:hello@dezolvelabs.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-heading">
              <p className="kicker">Contact the studio</p>
              <h2>Start a conversation</h2>
            </div>

            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>

            <div className="field">
              <label htmlFor="topic">What are you reaching out about?</label>
              <input id="topic" name="topic" type="text" placeholder="Partnership, collaboration, product opportunity" required />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Share the context and what makes the opportunity relevant." required />
            </div>

            <div className="form-actions">
              <button className="button button-primary" type="submit">
                Contact the Studio
              </button>
              <Button href="mailto:hello@dezolvelabs.com" variant="secondary">
                Email Directly
              </Button>
            </div>
          </form>
        </section>
      </div>
    </Container>
  );
}
