import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore products built by Dezolve Labs, including FavStir and Refreshly.',
};

export default function ProjectsPage() {
  return (
    <Container>
      <section className="section" aria-labelledby="projects-heading">
        <header className="page-intro">
          <span className="section-kicker">Portfolio</span>
          <h1 id="projects-heading" className="page-title reveal" style={{ ['--delay' as string]: '40ms' }}>
            Products designed as focused systems
          </h1>
          <p className="section-copy reveal" style={{ ['--delay' as string]: '100ms' }}>
            Each card represents a product track in the Dezolve Labs portfolio. The system is modular by design, so we can
            expand into additional experiments without losing clarity.
          </p>
        </header>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
