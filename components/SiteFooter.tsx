import Link from 'next/link';
import { Container } from '@/components/Container';
import { projects } from '@/src/data/projects';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <div className="footer-topline">
          <div className="footer-intro">
            <span className="brand-mark brand-mark-footer" aria-hidden="true">
              D
            </span>
            <div>
              <p className="kicker kicker-light">Dezolve Labs</p>
              <h2>Independent products. Patient ownership.</h2>
            </div>
          </div>
          <a className="footer-email" href="mailto:hello@dezolvelabs.com">
            hello@dezolvelabs.com ↗
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-column footer-company-copy">
            <p className="footer-column-title">Studio</p>
            <p>
              Building software across communication, consumer utility, wellness, and business operations from Northern
              California.
            </p>
          </div>

          <nav className="footer-column" aria-label="Footer navigation">
            <p className="footer-column-title">Explore</p>
            <Link href="/portfolio">Products</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <nav className="footer-column" aria-label="Portfolio links">
            <p className="footer-column-title">Products</p>
            {projects.map((project) => (
              <Link key={project.slug} href={`/portfolio/${project.slug}`}>
                {project.name}
              </Link>
            ))}
          </nav>

          <div className="footer-column">
            <p className="footer-column-title">Follow</p>
            <a href="https://www.linkedin.com/company/dezolvelabs" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://x.com/dezolvelabs" target="_blank" rel="noreferrer">
              X ↗
            </a>
            <a href="https://github.com/Dezolve" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="footer-bottomline">
          <p>© {new Date().getFullYear()} Dezolve Labs</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
