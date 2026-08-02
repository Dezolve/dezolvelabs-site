import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Project } from '@/src/data/projects';

type ProjectCardProps = {
  project: Project;
  revealDelay?: number;
};

const projectPalettes: Record<string, [string, string]> = {
  manacamp: ['#5b8cff', '#ff8b3d'],
  favstir: ['#315fd0', '#16c6b6'],
  refreshly: ['#1b9ad6', '#5bd49b'],
  'nexus-pos': ['#f59e0b', '#ef4444'],
};

export function ProjectCard({ project, revealDelay = 100 }: ProjectCardProps) {
  const [accentFrom, accentTo] = projectPalettes[project.slug] ?? [project.visuals.gradientFrom, project.visuals.gradientTo];
  const cardStyle = {
    ['--reveal-delay' as string]: `${revealDelay}ms`,
    ['--card-accent-from' as string]: accentFrom,
    ['--card-accent-to' as string]: accentTo,
  } as CSSProperties;

  return (
    <article className="portfolio-card" data-reveal style={cardStyle}>
      <div className="portfolio-card-visual" aria-hidden="true">
        <div className="portfolio-card-glow" />
        <Image src={project.visuals.preview} alt="" width={300} height={620} className="portfolio-card-preview" />
      </div>

      <div className="portfolio-card-content">
        <header className="portfolio-card-head">
          <div className="project-branding">
            <span className="project-logo-badge">
              <Image src={project.visuals.logo} alt="" width={30} height={30} />
            </span>
            <div>
              <h3>{project.name}</h3>
              <p className="portfolio-category">{project.category}</p>
            </div>
          </div>
          <span className="status-pill">{project.status}</span>
        </header>

        <p className="portfolio-summary">{project.description}</p>
        <p className="portfolio-fit">{project.portfolioFit}</p>

        <Link href={`/portfolio/${project.slug}`} className="portfolio-link" aria-label={`Explore ${project.name}`}>
          Explore product <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
