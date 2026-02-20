import Link from 'next/link';
import { Container } from '@/components/Container';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <section className="footer-cta" aria-labelledby="footer-cta-heading">
          <p className="footer-kicker">Start your project</p>
          <h2 id="footer-cta-heading">Bring your product idea into focus</h2>
          <p>Share your email and we will reply within two business days.</p>

          <form className="footer-capture" action="mailto:hello@dezolvelabs.com" method="post" encType="text/plain">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input id="footer-email" name="email" type="email" placeholder="you@company.com" required />
            <button type="submit" className="button button-primary">
              Start your project
            </button>
          </form>
        </section>

        <div className="footer-meta">
          <div className="footer-brand">
            <p className="footer-brand-title">Dezolve Labs</p>
            <p>Independent software crafted for clarity and momentum.</p>
          </div>

          <div className="footer-follow">
            <p className="footer-follow-title">Follow us</p>
            <div className="footer-socials" aria-label="Social links">
              <a href="https://www.linkedin.com/company/dezolvelabs" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://x.com/dezolvelabs" target="_blank" rel="noreferrer">
                X
              </a>
              <a href="https://www.youtube.com/@dezolvelabs" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer links">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </div>

        <p className="footer-copyright">Copyright {new Date().getFullYear()} Dezolve Labs</p>
      </Container>
    </footer>
  );
}
