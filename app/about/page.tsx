import type { Metadata } from 'next';
import { Container } from '@/components/Container';

const processSteps = [
  {
    title: 'Observe the friction',
    copy: 'We start by mapping where people lose time, attention, or confidence in a workflow.',
  },
  {
    title: 'Dissolve complexity',
    copy: 'We reduce the problem to a clear loop, then remove unnecessary choices and visual noise.',
  },
  {
    title: 'Ship a focused system',
    copy: 'Each product launches with a tight scope, strong defaults, and a measurable value proposition.',
  },
  {
    title: 'Refine with evidence',
    copy: 'Usage data and support feedback guide iterative improvements without feature sprawl.',
  },
];

const values = [
  {
    title: 'Clarity over novelty',
    copy: 'People should understand a product in seconds, not after reading documentation.',
  },
  {
    title: 'Calm product behavior',
    copy: 'We avoid manipulative mechanics and optimize for trust, rhythm, and steady utility.',
  },
  {
    title: 'Studio-level stewardship',
    copy: 'As a holding studio, we support each product as a long-term asset with dedicated attention.',
  },
];

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn why Dezolve Labs builds simple tools and what it means to be a calm, focused holding studio.',
};

export default function AboutPage() {
  return (
    <Container>
      <section className="section" aria-labelledby="about-heading">
        <header className="page-intro">
          <span className="section-kicker">About</span>
          <h1 id="about-heading" className="page-title reveal" style={{ ['--delay' as string]: '50ms' }}>
            A holding studio for clear, useful software
          </h1>
          <p className="section-copy reveal" style={{ ['--delay' as string]: '110ms' }}>
            Dezolve Labs operates as an independent product lab. Rather than stacking every idea into one platform, we
            build focused tools with explicit jobs, then steward each product as its own business unit.
          </p>
        </header>

        <div className="about-grid">
          <section className="detail-card reveal" style={{ ['--delay' as string]: '130ms' }} aria-labelledby="process-heading">
            <h2 id="process-heading">How Dezolve thinks and builds</h2>
            <div className="timeline">
              {processSteps.map((step) => (
                <article key={step.title} className="timeline-item">
                  <span className="timeline-node" aria-hidden="true" />
                  <h3 className="timeline-title">{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="detail-card reveal" style={{ ['--delay' as string]: '180ms' }} aria-labelledby="values-heading">
            <h2 id="values-heading">Mission and values</h2>
            <p>
              Our mission is to turn confusing daily workflows into simple, meaningful experiences people can trust.
              This means fewer features, stronger defaults, and thoughtful product cadence.
            </p>
            <div className="value-grid" style={{ marginTop: '1rem' }}>
              {values.map((value) => (
                <article key={value.title} className="value-card">
                  <h3 className="value-title">{value.title}</h3>
                  <p>{value.copy}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Container>
  );
}
