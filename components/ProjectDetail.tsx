import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Button } from '@/components/Button';
import type { Project } from '@/src/data/projects';

type ProjectDetailProps = {
  project: Project;
};

function getStatusLabel(status: Project['status']) {
  return status === 'Building' ? 'In Development' : 'Live';
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const heroStyle = {
    ['--project-accent-from' as string]: project.visuals.gradientFrom,
    ['--project-accent-to' as string]: project.visuals.gradientTo,
  } as CSSProperties;

  return (
    <article className="project-detail">
      <section className="project-detail-hero" style={heroStyle} data-reveal>
        <div className="project-detail-hero-copy">
          <p className="project-status">{getStatusLabel(project.status)}</p>
          <h1>{project.name}</h1>
          <p className="project-detail-oneliner">{project.oneLiner}</p>
          <p className="project-detail-description">{project.description}</p>
          <div className="project-detail-actions">
            <Button href={project.links.primary}>{project.links.primaryLabel}</Button>
            {project.links.secondary ? (
              <Button href={project.links.secondary} variant="secondary">
                {project.links.secondaryLabel ?? 'Learn more'}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="project-detail-hero-visual" aria-hidden="true">
          <Image className="device-frame" src="/graphics/device-frame.svg" alt="" width={420} height={820} />
          <Image className="device-screen" src={project.visuals.preview} alt="" width={300} height={620} />
        </div>
      </section>

      <section className="project-detail-grid">
        <article className="detail-card" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
          <h2>About {project.name}</h2>
          <p>{project.description}</p>
        </article>

        <article className="detail-card" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
          <h2>Key benefits</h2>
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
        </article>
      </section>

      {project.extraLinks.length > 0 ? (
        <section className="detail-card" data-reveal style={{ ['--reveal-delay' as string]: '200ms' }}>
          <h2>Support and references</h2>
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
