import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

const buildStages = [
  {
    step: '01',
    title: 'Find the useful core',
    copy: 'Start with the behavior or problem that genuinely matters. Remove the idea-shaped decoration around it.',
  },
  {
    step: '02',
    title: 'Build the smallest honest product',
    copy: 'Ship enough to prove the experience, learn from real use, and avoid spending months polishing the wrong shape.',
  },
  {
    step: '03',
    title: 'Own the long iteration',
    copy: 'Improve the product through usage, technical depth, and disciplined expansion instead of feature accumulation.',
  },
];

const selectionSignals = [
  'A clear user behavior or operational need',
  'A product experience that can become meaningfully better',
  'A focused first version with room to compound',
  'A reason for Dezolve Labs to remain a committed owner',
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
            A product company designed for patient building.
          </h1>
          <div className="page-intro-split" data-reveal>
            <p className="page-copy">
              Dezolve Labs is the strategic, technical, and creative home behind an independent software portfolio.
            </p>
            <p>
              The studio exists to choose focused ideas, give them a strong foundation, and stay close enough to the work
              to make better decisions over time.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="process-heading">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="kicker">How we build</p>
              <h2 id="process-heading" className="section-title">
                From useful idea to owned product.
              </h2>
            </div>
            <p className="page-copy">
              The process is deliberately straightforward. Most product mistakes are not caused by a lack of ceremony.
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
            <p className="kicker">What we choose</p>
            <h2 id="selection-heading" className="section-title">
              Products that benefit from clarity and committed ownership.
            </h2>
            <p>
              Dezolve Labs is category-flexible but judgment-driven. A product does not need to be enormous. It needs a
              real reason to exist and a path toward becoming more useful over time.
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
            <p className="kicker kicker-light">Independent by design</p>
            <h2 id="independent-heading" className="section-title">
              Close enough to the product to keep the judgment intact.
            </h2>
          </div>
          <div>
            <p>
              Dezolve Labs is independently operated from Northern California. That structure keeps strategy, design,
              engineering, and product ownership connected instead of handing the product from one detached function to
              the next.
            </p>
            <Button href="/portfolio" variant="ghost">
              Explore the products
            </Button>
          </div>
        </section>

        <section className="contact-panel-v2 studio-contact" aria-labelledby="studio-contact-heading" data-reveal>
          <div>
            <p className="kicker">Aligned opportunities</p>
            <h2 id="studio-contact-heading" className="section-title">
              Partnerships should make the product stronger.
            </h2>
          </div>
          <div className="contact-panel-content">
            <p>
              Dezolve Labs is open to conversations around product partnerships, integrations, strategic collaboration,
              investment, and acquisition where the fit is specific and credible.
            </p>
            <Button href="/contact">Start a conversation</Button>
          </div>
        </section>
      </div>
    </Container>
  );
}
