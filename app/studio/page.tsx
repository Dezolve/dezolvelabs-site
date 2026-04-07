import type { Metadata } from 'next';
import { Container } from '@/components/Container';

const studioActivities = [
  'Builds internal software products',
  'Launches and grows portfolio ventures',
  'Incubates new ideas',
  'Maintains a high standard for product clarity and design quality',
  'Explores selective strategic opportunities where there is strong fit',
];

const operatingPrinciples = [
  {
    title: 'Clear utility wins.',
    copy: 'Products should solve real problems without unnecessary friction.',
  },
  {
    title: 'Focus compounds.',
    copy: 'Strong products begin with disciplined scope and improve through deliberate iteration.',
  },
  {
    title: 'Quality builds trust.',
    copy: 'Interface, interaction, and brand quality are part of the product’s value.',
  },
  {
    title: 'Durability matters.',
    copy: 'The goal is to build products that can still matter years from now.',
  },
  {
    title: 'The portfolio should feel intentional.',
    copy: 'Each venture should earn its place in the company.',
  },
];

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Learn how Dezolve Labs operates as a software studio and holding company.',
};

export default function StudioPage() {
  return (
    <Container>
      <div className="page-shell">
        <section className="page-intro" aria-labelledby="studio-heading">
          <p className="kicker" data-reveal>
            Studio
          </p>
          <h1 id="studio-heading" className="page-title" data-reveal>
            A studio structure built for long-term software products.
          </h1>
          <p className="page-copy max-copy-width" data-reveal>
            Dezolve Labs is the company behind a growing portfolio of software ventures. It exists to build products
            internally, support them with a consistent standard, and develop them into durable businesses over time.
          </p>
        </section>

        <section className="content-section" aria-labelledby="studio-what-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">What the company is</p>
            <h2 id="studio-what-heading" className="section-title max-copy-width">
              What the company is
            </h2>
          </div>
          <div className="feature-panel" data-reveal>
            <p className="page-copy max-copy-width">
              Dezolve Labs is a software studio and holding company. It provides the strategic, operational, and creative
              foundation for the products it builds and grows.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="studio-does-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">What the company does</p>
            <h2 id="studio-does-heading" className="section-title max-copy-width">
              What the company does
            </h2>
          </div>
          <div className="bullet-panel" data-reveal>
            {studioActivities.map((item) => (
              <p key={item} className="bullet-line">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="studio-principles-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">Operating principles</p>
            <h2 id="studio-principles-heading" className="section-title max-copy-width">
              Operating principles
            </h2>
          </div>
          <div className="principles-grid">
            {operatingPrinciples.map((principle) => (
              <article key={principle.title} className="surface-card principle-card" data-reveal>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="studio-fit-heading">
          <div className="feature-panel" data-reveal>
            <div className="section-heading compact-heading">
              <p className="kicker">Opportunity fit</p>
              <h2 id="studio-fit-heading" className="section-title max-copy-width">
                What fits the studio
              </h2>
            </div>
            <p className="page-copy max-copy-width">
              Dezolve Labs is most interested in opportunities connected to product quality, software utility,
              communication, digital experience, and ventures that benefit from clear long-term direction.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="studio-direction-heading">
          <div className="feature-panel" data-reveal>
            <div className="section-heading compact-heading">
              <p className="kicker">Long-term direction</p>
              <h2 id="studio-direction-heading" className="section-title max-copy-width">
                Where the company is headed
              </h2>
            </div>
            <p className="page-copy max-copy-width">
              The long-term goal is to build a durable portfolio of software ventures united by strong standards,
              practical value, and a clear point of view on product quality.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}