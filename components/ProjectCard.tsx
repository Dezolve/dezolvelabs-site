import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Project } from '@/src/data/projects';

type ProjectCardProps = {
  project: Project;
};

function getStatusLabel(status: Project['status']) {
  return status === 'Building' ? 'In Development' : 'Live';
}

export function ProjectCard({ project }: ProjectCardProps) {
  const logoStyle = {
    background: `linear-gradient(135deg, ${project.visuals.gradientFrom}, ${project.visuals.gradientTo})`,
  } as CSSProperties;

  return (
    <article className="project-card reveal" style={{ ['--delay' as string]: '90ms' }}>
      <header className="project-card-head">
        <div className="project-brand">
          <span className="project-logo" style={logoStyle} aria-hidden="true">
            <img src={project.visuals.logo} alt="" />
          </span>
          <h3 className="project-name">{project.name}</h3>
        </div>
        <span className="status-badge">{getStatusLabel(project.status)}</span>
      </header>

      <p className="project-line">{project.oneLiner}</p>

      <div className="tag-list" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <span className="tag-pill" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/projects/${project.slug}`} className="card-link" aria-label={`View ${project.name} details`}>
        View project details
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 12H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13 8L17 12L13 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </article>
  );
}
