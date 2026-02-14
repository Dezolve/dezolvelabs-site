import Link from 'next/link';
import type { Project } from '@/src/data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      style={{
        border: '1px solid var(--line)',
        borderRadius: '16px',
        background: 'var(--surface)',
        padding: '1rem',
        display: 'grid',
        gap: '0.65rem',
      }}
    >
      <p style={{ margin: 0, color: 'var(--accent-strong)', fontWeight: 600 }}>{project.status}</p>
      <h3 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '1.5rem' }}>{project.name}</h3>
      <p style={{ margin: 0 }}>{project.oneLiner}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{ border: '1px solid var(--line)', borderRadius: 999, fontSize: '0.8rem', padding: '0.2rem 0.55rem' }}
          >
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} style={{ marginTop: '0.2rem', color: 'var(--accent)' }}>
        View project details
      </Link>
    </article>
  );
}
