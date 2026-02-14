import { Button } from '@/components/Button';
import type { Project } from '@/src/data/projects';

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article style={{ maxWidth: 850 }}>
      <p style={{ marginBottom: '0.45rem', fontWeight: 600, color: 'var(--accent-strong)' }}>{project.status}</p>
      <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{project.name}</h1>
      <p style={{ marginTop: '0.9rem' }}>{project.description}</p>

      <h2 style={{ fontFamily: 'var(--font-heading), serif', marginTop: '2rem', fontSize: '1.55rem' }}>Key features</h2>
      <ul style={{ color: 'var(--muted)', lineHeight: 1.65 }}>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div style={{ marginTop: '1.2rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Button href={project.links.primary}>{project.links.primaryLabel}</Button>
        {project.links.secondary ? (
          <Button href={project.links.secondary} variant="secondary">
            {project.links.secondaryLabel ?? 'Learn more'}
          </Button>
        ) : null}
      </div>

      {project.extraLinks.length > 0 ? (
        <div style={{ marginTop: '1.3rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
          {project.extraLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ color: 'var(--accent)' }}>
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
