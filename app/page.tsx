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
                Focused software products, built with long-term intent.
              </h1>
              <p className="page-copy hero-copy">
                Dezolve Labs builds software across utility, business, and digital communication, creating focused
                products with clear value today and room to grow over time.
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
                The company portfolio spans practical utility, business software, and long-horizon communication
                products built to earn staying power.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section" aria-labelledby="company-intro-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">Company</p>
            <h2 id="company-intro-heading" className="section-title max-copy-width">
              A company built to create products that last.
            </h2>
          </div>
          <div className="two-column-copy" data-reveal>
            <p>
              Dezolve Labs is the strategic home for a growing portfolio of software products. Some are practical tools,
              some are business-focused systems, and some are larger long-term platform bets, but all are built with the
              same commitment to clarity, usefulness, and thoughtful execution.
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
              A growing set of products spanning foundational web experiences, modern mobile utility, business software,
              and long-term communication platforms.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} revealDelay={index * 80} />
            ))}
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
                Dezolve Labs builds across different categories, but the standard stays the same: focused scope, clear
                utility, strong product taste, and the intention to create software that becomes more valuable over time.
              </p>
              <p>
                The goal is not to launch everything. It is to build the right products well and give them a durable
                home.
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
              Dezolve Labs is designed to keep building, from practical tools and business software to larger platform
              bets with long horizons. ManaCamp represents the company’s clearest long-term flagship, while the broader
              portfolio reflects a steady pattern of shipping useful products with care.
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
