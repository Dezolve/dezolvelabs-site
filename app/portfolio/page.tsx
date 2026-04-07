import type { Metadata } from 'next';
import { Button } from '@/components/Button';
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
            Dezolve Labs builds and grows products across communication, utility, and modern digital experience. Each
            venture reflects a shared standard of clarity, restraint, and long-term product thinking.
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

            <article className="portfolio-card surface-card" data-reveal>
              <div className="portfolio-card-topline">
                <span className="status-pill">In Research</span>
                <p className="portfolio-category">Studio incubation</p>
              </div>
              <h3>Future Venture</h3>
              <p>New ideas in active exploration as the portfolio continues to expand.</p>
              <p className="portfolio-fit">
                <strong>Portfolio fit</strong>
                Reinforces that Dezolve Labs is designed to keep building.
              </p>
              <Button href="/studio" variant="secondary">
                Explore the Studio
              </Button>
            </article>
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
                Dezolve Labs treats the portfolio as more than a collection of launches. Each product is selected and
                shaped around the same operating principles: useful scope, strong interaction quality, and the ability to
                become more valuable over time.
              </p>
              <p>
                The aim is coherence, not volume. Each venture should feel like it belongs inside the same company because
                the standard behind it is visible.
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
              Dezolve Labs is built to keep exploring new software categories and launching products that fit the
              company’s long-term thesis.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}