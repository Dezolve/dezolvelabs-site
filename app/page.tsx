import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';

const directionItems = [
  'Build focused internal products',
  'Grow a coherent software portfolio',
  'Maintain a clear product and design standard',
  'Create businesses with staying power',
];

export const metadata: Metadata = {
  title: {
    absolute: 'Dezolve Labs — Software Studio and Holding Company',
  },
  description: 'Dezolve Labs is a software studio and holding company behind a growing portfolio of focused digital products.',
};

export default function HomePage() {
  return (
    <Container>
      <div className="page-shell home-shell">
        <section className="hero-section" aria-labelledby="home-heading">
          <div className="hero-grid">
            <div className="hero-copy-block" data-reveal>
              <p className="kicker">Software studio and holding company</p>
              <h1 id="home-heading" className="hero-title">
                The studio behind focused software ventures.
              </h1>
              <p className="page-copy hero-copy">
                Dezolve Labs is the company behind a growing portfolio of software products built with clarity, utility,
                and long-term ambition.
              </p>
              <div className="hero-actions">
                <Button href="/portfolio">View Portfolio</Button>
                <Button href="/studio" variant="secondary">
                  Explore the Studio
                </Button>
              </div>
            </div>

            <aside className="hero-aside surface-card" data-reveal>
              <div className="chip-list" aria-label="Company descriptors">
                <span className="status-pill">Software studio</span>
                <span className="status-pill">Holding company</span>
                <span className="status-pill">Portfolio-led</span>
                <span className="status-pill">Long-term product focus</span>
              </div>
              <p>
                Dezolve Labs serves as the strategic home for ventures spanning communication, utility, and modern digital
                experience.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section" aria-labelledby="company-intro-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">Company</p>
            <h2 id="company-intro-heading" className="section-title max-copy-width">
              A company built to launch, operate, and grow software products over time.
            </h2>
          </div>
          <div className="two-column-copy" data-reveal>
            <p>
              Dezolve Labs is the strategic home for a growing portfolio of software ventures. The company builds
              products internally, supports them with a consistent standard of quality, and develops them with long-term
              product value in mind.
            </p>
            <p>
              Rather than functioning as a traditional services business, Dezolve Labs is structured around the work of
              building and compounding durable software products.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="portfolio-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">Portfolio</p>
            <h2 id="portfolio-heading" className="section-title">
              Current portfolio
            </h2>
            <p className="page-copy max-copy-width">
              A growing set of products across communication, utility, and modern digital experience.
            </p>
          </div>

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

        <section className="content-section" aria-labelledby="rationale-heading">
          <div className="feature-panel" data-reveal>
            <div className="section-heading compact-heading">
              <p className="kicker">Shared standard</p>
              <h2 id="rationale-heading" className="section-title max-copy-width">
                A portfolio connected by product discipline.
              </h2>
            </div>
            <div className="two-column-copy">
              <p>
                The products may serve different needs, but they are built around the same standard: clear utility,
                focused scope, thoughtful experience design, and room to grow into lasting businesses.
              </p>
              <p>
                Dezolve Labs is not built around volume. It is built around conviction, choosing products deliberately and
                giving them a consistent strategic home.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section" aria-labelledby="direction-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">Direction</p>
            <h2 id="direction-heading" className="section-title max-copy-width">
              Built for long-term product ambition.
            </h2>
            <p className="page-copy max-copy-width">
              Dezolve Labs exists to create a portfolio of software ventures that can grow with clarity and intention over
              time. The company is designed to keep launching, refining, and supporting products that have real value
              beyond a single moment or trend.
            </p>
          </div>

          <div className="principles-grid direction-grid">
            {directionItems.map((item) => (
              <article key={item} className="surface-card stat-card" data-reveal>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="home-contact-heading">
          <div className="contact-panel" data-reveal>
            <div>
              <p className="kicker">Opportunities</p>
              <h2 id="home-contact-heading" className="section-title max-copy-width">
                Open to aligned opportunities.
              </h2>
              <p className="page-copy max-copy-width">
                Dezolve Labs is open to thoughtful conversations around partnerships, product strategy, venture
                collaboration, and opportunities that fit the company’s long-term direction.
              </p>
            </div>
            <div className="hero-actions">
              <Button href="/contact">Contact the Studio</Button>
              <Button href="mailto:hello@dezolvelabs.com" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
