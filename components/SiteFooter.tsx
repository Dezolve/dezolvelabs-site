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
      </Container>
    </footer>
  );
}
