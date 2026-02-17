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
  const accentSoft = `${project.visuals.gradientTo}45`;
  const accentStrongSoft = `${project.visuals.gradientFrom}38`;
  const bannerTone = {
    ['--project-accent' as string]: project.visuals.gradientTo,
    ['--project-accent-strong' as string]: project.visuals.gradientFrom,
    background:
      `linear-gradient(145deg, rgba(7, 14, 30, 0.96), rgba(6, 12, 26, 0.9)), ` +
      `radial-gradient(circle at 84% 18%, ${accentSoft}, transparent 58%), ` +
      `radial-gradient(circle at 14% 88%, ${accentStrongSoft}, transparent 60%)`,
    borderColor: `${project.visuals.gradientTo}66`,
  } as CSSProperties;

  return (
    <article className="project-detail">
      <section className="project-banner reveal" style={bannerTone}>
        <div className="project-banner-grid">
          <div className="project-banner-copy">
            <span className="status-badge">{getStatusLabel(project.status)}</span>
            <h1 className="project-title">{project.name}</h1>
            <p className="project-one-liner">{project.oneLiner}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-actions">
              <Button href={project.links.primary}>{project.links.primaryLabel}</Button>
              {project.links.secondary ? <Button href={project.links.secondary} variant="secondary">{project.links.secondaryLabel ?? 'Learn more'}</Button> : null}
            </div>
          </div>

          <div className="project-visual" aria-hidden="true">
            <Image className="device-frame" src="/graphics/device-frame.svg" alt="" width={420} height={820} />
            <Image className="device-screen" src={project.visuals.preview} alt="" width={300} height={620} />
          </div>
        </div>
      </section>

      <div className="divider-line" aria-hidden="true" />

      <section className="detail-grid">
        <div className="detail-card reveal" style={{ ['--delay' as string]: '80ms' }}>
          <h2>About {project.name}</h2>
          <p>{project.description}</p>
        </div>

        <div className="detail-card reveal" style={{ ['--delay' as string]: '130ms' }}>
          <h2>Key benefits</h2>
          <ul className="benefit-list">
            {project.features.map((feature) => (
              <li key={feature.title} className="benefit-item">
                <Image src={feature.icon} alt="" width={20} height={20} />
                <div>
                  <p className="value-title">{feature.title}</p>
                  <p>{feature.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.extraLinks.length > 0 ? (
        <section className="detail-card reveal" style={{ ['--delay' as string]: '160ms' }}>
          <h2>Support & references</h2>
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
