import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Button } from '@/components/Button';
import type { Project } from '@/src/data/projects';

type ProjectDetailProps = {
  project: Project;
};

const projectPalettes: Record<string, [string, string]> = {
  manacamp: ['#5b8cff', '#ff8b3d'],
  favstir: ['#315fd0', '#16c6b6'],
  refreshly: ['#1b9ad6', '#5bd49b'],
  'nexus-pos': ['#f59e0b', '#ef4444'],
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [accentFrom, accentTo] = projectPalettes[project.slug] ?? [project.visuals.gradientFrom, project.visuals.gradientTo];
  const heroStyle = {
    ['--project-accent-from' as string]: accentFrom,
    ['--project-accent-to' as string]: accentTo,
  } as CSSProperties;

  return (
    <article className="product-shell">
      <section className="product-hero" style={heroStyle} data-reveal>
        <div className="product-hero-copy">
          <div className="product-hero-meta">
            <span className="status-pill">{project.status}</span>
            <span>{project.category}</span>
          </div>
          <Image src={project.visuals.logo} alt="" width={72} height={72} className="product-detail-logo" />
          <h1>{project.name}</h1>
          <p className="product-positioning">{project.oneLiner}</p>
          <p className="product-summary">{project.description}</p>
          <div className="product-hero-actions">
            <Button href={project.links.primary}>{project.links.primaryLabel}</Button>
            {project.links.secondary ? (
              <Button href={project.links.secondary} variant="secondary">
                {project.links.secondaryLabel ?? 'Learn more'}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="product-hero-visual" aria-hidden="true">
          <div className="product-preview-glow" />
          <Image className="product-preview-image" src={project.visuals.preview} alt="" width={600} height={1240} priority />
        </div>
      </section>

      <section className="product-context-grid">
        <article data-reveal>
          <p className="kicker">Why it exists</p>
          <h2>A product with a clear job.</h2>
          <p>{project.whyItExists}</p>
        </article>

        <article data-reveal>
          <p className="kicker">Why it belongs</p>
          <h2>Its role in the portfolio.</h2>
          <p>{project.whyBelongs}</p>
        </article>
      </section>

      <section className="product-qualities" aria-labelledby="qualities-heading">
        <div className="section-heading" data-reveal>
          <p className="kicker">Product qualities</p>
          <h2 id="qualities-heading" className="section-title">
            What defines the experience.
          </h2>
        </div>
        <div className="benefit-list">
          {project.features.map((feature, index) => (
            <article key={feature.title} className="benefit-item" data-reveal>
              <span>0{index + 1}</span>
              <Image src={feature.icon} alt="" width={24} height={24} />
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section product-next-step" data-reveal>
        <div>
          <p className="kicker kicker-light">Keep exploring</p>
          <h2 className="section-title">See the product in company context.</h2>
        </div>
        <div className="support-links action-links">
          <Button href="/portfolio" variant="ghost">
            Back to products
          </Button>
          <Button href="/studio" variant="ghost">
            Inside the studio
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Dezolve Labs
          </Button>
        </div>
      </section>

      {project.extraLinks.length > 0 ? (
        <section className="product-reference-links" data-reveal>
          <p className="kicker">Product links</p>
          <div className="support-links">
            {project.extraLinks.map((link) => (
              <a className="support-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
