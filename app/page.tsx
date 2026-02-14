import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';

export default function HomePage() {
  return (
    <Container>
      <section className="section" style={{ paddingTop: '4.5rem' }}>
        <p style={{ marginBottom: '0.5rem', fontWeight: 600, color: 'var(--accent-strong)' }}>Dezolve Labs</p>
        <h1 style={{ fontFamily: 'var(--font-heading), serif', fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
          Dissolving complexity, one simple product at a time
        </h1>
        <p style={{ maxWidth: 700, marginTop: '1.2rem' }}>
          Dezolve Labs is a product studio and holding brand focused on calm software. We build practical products that
          remove friction from daily decisions and habits.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.4rem' }}>
          <Button href="/projects">Explore Projects</Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </section>

      <section className="section">
        <h2 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '2rem', marginBottom: '1rem' }}>Featured projects</h2>
        <div className="grid cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
