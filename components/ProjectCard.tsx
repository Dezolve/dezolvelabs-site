import Link from 'next/link';
import type { CSSProperties } from 'react';
import { Bookmark, Droplets, Flame, Store } from 'lucide-react';
import type { Project } from '@/src/data/projects';

type ProjectCardProps = {
  project: Project;
  revealDelay?: number;
};

export function ProjectCard({ project, revealDelay = 100 }: ProjectCardProps) {
  const cardStyle = {
    ['--reveal-delay' as string]: `${revealDelay}ms`,
    ['--card-accent-from' as string]: project.visuals.gradientFrom,
    ['--card-accent-to' as string]: project.visuals.gradientTo,
  } as CSSProperties;

  const logoStyle = {
    background: project.visuals.logoBackground ?? `linear-gradient(135deg, ${project.visuals.gradientFrom}, ${project.visuals.gradientTo})`,
  } as CSSProperties;

  const LogoIcon =
    project.visuals.logoIcon === 'Flame'
      ? Flame
      : project.visuals.logoIcon === 'Bookmark'
        ? Bookmark
        : project.visuals.logoIcon === 'Store'
          ? Store
          : Droplets;

  return (
    <article className="portfolio-card surface-card" data-reveal style={cardStyle}>
      <header className="portfolio-card-head">
        <div className="project-branding">
          <span className="project-logo-badge" style={logoStyle} aria-hidden="true">
            <LogoIcon size={28} strokeWidth={2.1} />
          </span>
          <div>
            <h3>{project.name}</h3>
            <p className="portfolio-category">{project.category}</p>
          </div>
        </div>
        <span className="status-pill">{project.status}</span>
      </header>

      <p className="portfolio-summary">{project.description}</p>
      <p className="portfolio-fit">
        <strong>Portfolio fit</strong>
        {project.portfolioFit}
      </p>

      <Link href={`/portfolio/${project.slug}`} className="button button-secondary portfolio-link" aria-label={`View ${project.name} details`}>
        View Portfolio Entry
      </Link>
    </article>
  );
}
