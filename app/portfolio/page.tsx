import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore the growing portfolio of focused software products behind Dezolve Labs.',
};

export default function PortfolioPage() {
  return (
    <Container>
      <div className="page-shell">
        <section className="page-intro" aria-labelledby="portfolio-page-heading">
          <p className="kicker" data-reveal>
            Portfolio
          </p>
          <h1 id="portfolio-page-heading" className="page-title" data-reveal>
            A growing portfolio of focused software products.
          </h1>
          <p className="page-copy max-copy-width" data-reveal>
            Dezolve Labs builds and grows software across utility, business, and digital communication. Each product
            reflects a shared standard of clarity, usefulness, and long-term product thinking.
          </p>
        </section>

        <section className="content-section" aria-labelledby="portfolio-grid-heading">
          <h2 id="portfolio-grid-heading" className="sr-only">
            Portfolio entries
          </h2>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} revealDelay={index * 80} />
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="portfolio-rationale-heading">
          <div className="feature-panel" data-reveal>
            <div className="section-heading compact-heading">
              <p className="kicker">Why the portfolio fits</p>
              <h2 id="portfolio-rationale-heading" className="section-title max-copy-width">
                Why these products belong together
              </h2>
            </div>
            <div className="two-column-copy">
              <p>
                The portfolio is intentionally broad in category but consistent in standard. Each product begins with a
                real use case, is shaped around focused execution, and is built to earn long-term value rather than
                short-term attention.
              </p>
              <p>
                Some products are small and practical. Others are larger, longer-horizon bets. What connects them is the
                discipline behind how they are built.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section" aria-labelledby="portfolio-next-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">What’s next</p>
            <h2 id="portfolio-next-heading" className="section-title max-copy-width">
              The portfolio is still early.
            </h2>
            <p className="page-copy max-copy-width">
              The portfolio is still early, but the direction is clear: build focused software products across categories
              where utility, quality, and long-term value can compound.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}