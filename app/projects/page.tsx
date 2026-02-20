import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';

const selectionNotes = [
  {
    title: 'Focused scope over feature volume',
    copy: 'We prioritize products with clear daily value and low interface noise.',
  },
  {
    title: 'Craft quality over rushed growth',
    copy: 'Interaction quality and long-term trust take priority over short-term novelty.',
  },
];

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore product tracks designed and maintained by Dezolve Labs.',
};

export default function ProjectsPage() {
  return (
    <Container>
      <section className="page-shell" aria-labelledby="projects-heading">
        <header className="page-intro">
          <p className="kicker" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
            Projects
          </p>
          <h1 id="projects-heading" className="page-title" data-reveal style={{ ['--reveal-delay' as string]: '90ms' }}>
            Product chapters built for clarity and momentum.
          </h1>
          <p className="page-copy" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
            Each project is designed as a focused system with intentional interaction, strong visual hierarchy, and room to
            evolve without interface sprawl.
          </p>
        </header>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} revealDelay={120 + index * 70} />
          ))}
          <article className="project-card project-card-static" data-reveal style={{ ['--reveal-delay' as string]: `${120 + projects.length * 70}ms` }}>
            <p className="project-status">Coming Soon</p>
            <h3>New Studio Track</h3>
            <p>A fresh product concept is in research and prototype review.</p>
            <div className="project-tags">
              <span>In Discovery</span>
              <span>2026</span>
            </div>
          </article>
        </div>

        <section className="page-chapter">
          <h2 className="section-title" data-reveal style={{ ['--reveal-delay' as string]: '60ms' }}>
            How we evaluate new product ideas
          </h2>
          <div className="accordion-list">
            {selectionNotes.map((note, index) => (
              <details key={note.title} className="accordion-item" data-reveal style={{ ['--reveal-delay' as string]: `${90 + index * 70}ms` }}>
                <summary>{note.title}</summary>
                <p>{note.copy}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </Container>
  );
}
