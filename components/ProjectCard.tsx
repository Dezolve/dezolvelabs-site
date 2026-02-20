import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Project } from '@/src/data/projects';

type ProjectCardProps = {
  project: Project;
  revealDelay?: number;
};

function getStatusLabel(status: Project['status']) {
  return status === 'Building' ? 'In Development' : 'Live';
}

export function ProjectCard({ project, revealDelay = 100 }: ProjectCardProps) {
  const cardStyle = {
    ['--reveal-delay' as string]: `${revealDelay}ms`,
    ['--card-accent-from' as string]: project.visuals.gradientFrom,
    ['--card-accent-to' as string]: project.visuals.gradientTo,
  } as CSSProperties;

  const logoStyle = {
    background: `linear-gradient(135deg, ${project.visuals.gradientFrom}, ${project.visuals.gradientTo})`,
  } as CSSProperties;

  return (
    <article className="project-card" data-reveal style={cardStyle}>
      <header className="project-card-head">
        <div className="project-brand">
          <span className="project-logo" style={logoStyle} aria-hidden="true">
            <Image src={project.visuals.logo} alt="" width={28} height={28} />
          </span>
          <h3>{project.name}</h3>
        </div>
        <p className="project-status">{getStatusLabel(project.status)}</p>
      </header>

      <p>{project.oneLiner}</p>

      <div className="project-tags" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <Link href={`/projects/${project.slug}`} className="project-cta" aria-label={`View ${project.name} details`}>
        View project
      </Link>
    </article>
  );
}
