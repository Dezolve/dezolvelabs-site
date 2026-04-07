import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Button } from '@/components/Button';
import type { Project } from '@/src/data/projects';

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const heroStyle = {
    ['--project-accent-from' as string]: project.visuals.gradientFrom,
    ['--project-accent-to' as string]: project.visuals.gradientTo,
  } as CSSProperties;

  return (
    <article className="product-shell">
      <section className="product-hero" style={heroStyle} data-reveal>
        <div className="product-hero-copy">
          <span className="status-pill">{project.status}</span>
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
          <Image className="device-frame" src="/graphics/device-frame.svg" alt="" width={420} height={820} />
          <Image className="device-screen" src={project.visuals.preview} alt="" width={300} height={620} />
        </div>
      </section>

      <section className="product-grid">
        <article className="surface-card detail-card" data-reveal>
          <p className="kicker">Product summary</p>
          <h2>Why it exists</h2>
          <p>{project.whyItExists}</p>
        </article>

        <article className="surface-card detail-card" data-reveal>
          <p className="kicker">Portfolio context</p>
          <h2>Why it belongs in the portfolio</h2>
          <p>{project.whyBelongs}</p>
        </article>
      </section>

      <section className="surface-card detail-card" data-reveal>
        <p className="kicker">What defines the product</p>
        <h2>Core qualities</h2>
        <ul className="benefit-list">
          {project.features.map((feature) => (
            <li key={feature.title} className="benefit-item">
              <Image src={feature.icon} alt="" width={20} height={20} />
              <div>
                <p className="benefit-title">{feature.title}</p>
                <p>{feature.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="product-bottom-grid">
        <article className="surface-card detail-card" data-reveal>
          <p className="kicker">Category</p>
          <h2>{project.category}</h2>
          <p>{project.description}</p>
        </article>

        <article className="surface-card detail-card" data-reveal>
          <p className="kicker">Next step</p>
          <h2>Explore the company context</h2>
          <div className="support-links action-links">
            <Button href="/portfolio" variant="secondary">
              Back to Portfolio
            </Button>
            <Button href="/studio" variant="secondary">
              Explore the Studio
            </Button>
            <Button href="/contact" variant="secondary">
              Contact the Studio
            </Button>
          </div>
        </article>
      </section>

      {project.extraLinks.length > 0 ? (
        <section className="surface-card detail-card" data-reveal>
          <p className="kicker">References</p>
          <h2>Support and links</h2>
          <div className="support-links">
            {project.extraLinks.map((link) => (
              <a className="support-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
