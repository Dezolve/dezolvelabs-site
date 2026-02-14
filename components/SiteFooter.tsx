import Link from 'next/link';
import { Container } from '@/components/Container';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <div className="footer-brand">
          <p className="footer-brand-title">Dezolve Labs</p>
          <p>Independent digital products built with clarity-first design.</p>
          <p>© {new Date().getFullYear()} Dezolve Labs</p>
          <p className="footer-powered">Powered by Dezolve Labs</p>
        </div>

        <div className="footer-links-wrap">
          <div className="footer-links">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="https://github.com/Dezolve" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
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
      </Container>
    </footer>
  );
}
