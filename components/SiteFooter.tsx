import Link from 'next/link';
import { Container } from '@/components/Container';
import { projects } from '@/src/data/projects';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <section className="footer-intro" aria-labelledby="footer-company-heading">
          <p className="kicker">Dezolve Labs</p>
          <h2 id="footer-company-heading">Built for a durable portfolio of software ventures.</h2>
          <p>
            Dezolve Labs is a software studio and holding company building focused digital products with long-term
            intent.
          </p>
        </section>

        <div className="footer-grid">
          <div className="footer-column">
            <p className="footer-column-title">Company</p>
            <p>The strategic home behind a growing portfolio of focused software products.</p>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <p className="footer-column-title">Navigation</p>
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>

          <nav className="footer-column" aria-label="Portfolio links">
            <p className="footer-column-title">Portfolio</p>
            {projects.map((project) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                {project.name}
              </Link>
            ))}
          </nav>

          <div className="footer-column">
            <p className="footer-column-title">Contact</p>
            <a href="mailto:hello@dezolvelabs.com">hello@dezolvelabs.com</a>
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

        <p className="footer-copyright">Copyright {new Date().getFullYear()} Dezolve Labs</p>
      </Container>
    </footer>
  );
}
