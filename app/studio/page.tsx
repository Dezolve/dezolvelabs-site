import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

const buildStages = [
  {
    step: '01',
    title: 'Understand the problem',
    copy: 'Start with the people, workflow, or daily behavior the product needs to improve.',
  },
  {
    step: '02',
    title: 'Ship a focused first version',
    copy: 'Build the smallest complete experience that can be used, tested, and improved with real feedback.',
  },
  {
    step: '03',
    title: 'Improve it through use',
    copy: 'Use product feedback, technical learning, and observed behavior to decide what should come next.',
  },
];

const selectionSignals = [
  'A clear audience or operational need',
  'A product experience that can be meaningfully improved',
  'A focused first release that can stand on its own',
  'A reason for Dezolve Labs to support the product over time',
];

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Learn how Dezolve Labs selects, builds, and grows independent software products.',
};

export default function StudioPage() {
  return (
    <Container>
      <div className="page-shell studio-page-shell">
        <section className="page-intro studio-intro" aria-labelledby="studio-heading">
          <p className="kicker" data-reveal>
            The studio
          </p>
          <h1 id="studio-heading" className="page-title" data-reveal>
            How Dezolve Labs builds and supports its products.
          </h1>
          <div className="page-intro-split" data-reveal>
            <p className="page-copy">
              Dezolve Labs is an independent product studio responsible for strategy, design, engineering, launch, and
              ongoing improvement across the portfolio.
            </p>
            <p>
              Keeping those responsibilities connected makes it easier to make clear decisions, maintain quality, and
              support each product after launch.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="process-heading">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="kicker">How we build</p>
              <h2 id="process-heading" className="section-title">
                A straightforward product process.
              </h2>
            </div>
            <p className="page-copy">
              The process stays simple so the team can spend more time understanding the product and less time managing
              ceremony around it.
            </p>
          </div>
          <div className="studio-process-grid">
            {buildStages.map((stage) => (
              <article key={stage.step} data-reveal>
                <span>{stage.step}</span>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-selection" aria-labelledby="selection-heading" data-reveal>
          <div className="studio-selection-copy">
            <p className="kicker">What we build</p>
            <h2 id="selection-heading" className="section-title">
              Products with a clear user and a practical reason to exist.
            </h2>
            <p>
              Dezolve Labs works across different categories, but every product needs a specific audience, a useful first
              release, and a credible path to becoming better over time.
            </p>
          </div>
          <div className="selection-signal-list">
            {selectionSignals.map((signal) => (
              <p key={signal}>{signal}</p>
            ))}
          </div>
        </section>

        <section className="dark-section founder-note" aria-labelledby="independent-heading" data-reveal>
          <div>
            <p className="kicker kicker-light">Independent studio</p>
            <h2 id="independent-heading" className="section-title">
              Product decisions stay close to the work.
            </h2>
          </div>
          <div>
            <p>
              Dezolve Labs operates independently from Northern California. Product strategy, design, and engineering
              remain connected, which keeps accountability clear and reduces the distance between an idea and its
              implementation.
            </p>
            <Button href="/portfolio" variant="ghost">
              Explore the products
            </Button>
          </div>
        </section>

        <section className="contact-panel-v2 studio-contact" aria-labelledby="studio-contact-heading" data-reveal>
          <div>
            <p className="kicker">Work with the studio</p>
            <h2 id="studio-contact-heading" className="section-title">
              Have a specific opportunity in mind?
            </h2>
          </div>
          <div className="contact-panel-content">
            <p>
              We consider integrations, product partnerships, investment, and acquisition conversations when the fit is
              clear and the opportunity can make a product stronger.
            </p>
            <Button href="/contact">Start a conversation</Button>
          </div>
        </section>
      </div>
    </Container>
  );
}
