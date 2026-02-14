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
      <section className="section">
        <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Projects</h1>
        <p>Each project is scoped to do one job clearly and reliably.</p>
        <div className="grid cols-2" style={{ marginTop: '1.25rem' }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
