import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';

const valueBlocks = [
  {
    title: 'Clarity first',
    copy: 'Every product starts by removing confusion and cognitive noise before adding features.',
    icon: '/icons/clarity.svg',
  },
  {
    title: 'Purposeful shipping',
    copy: 'We release focused tools with explicit jobs, measurable value, and sustainable maintenance.',
    icon: '/icons/curation.svg',
  },
  {
    title: 'Calm interaction',
    copy: 'Micro-interactions support momentum and confidence without hijacking attention.',
    icon: '/icons/focus.svg',
  },
  {
    title: 'Built to evolve',
    copy: 'Each product is architected as a modular experiment that can mature into a durable business.',
    icon: '/icons/streak.svg',
  },
];

export default function HomePage() {
  return (
    <>
      <Container>
        <section className="home-hero">
          <div className="hero-copy">
            <span className="section-kicker reveal" style={{ ['--delay' as string]: '40ms' }}>
              Studio / Lab
            </span>
            <h1 className="hero-title reveal" style={{ ['--delay' as string]: '100ms' }}>
              Dezolve Labs <span className="hero-title-accent">builds calm software.</span>
            </h1>
            <p className="hero-sub reveal" style={{ ['--delay' as string]: '170ms' }}>
              Dissolving complexity into simple, meaningful digital experiences.
            </p>
            <div className="hero-actions reveal" style={{ ['--delay' as string]: '230ms' }}>
              <Button href="/projects">Explore Projects</Button>
              <Button href="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>

          <div className="hero-visual reveal" style={{ ['--delay' as string]: '180ms' }}>
            <div className="hero-mesh-wrap">
              <img src="/graphics/hero-mesh.svg" alt="Abstract lab-inspired motif" className="hero-mesh" />
            </div>
            <p className="floating-note">Curated Experiments</p>
          </div>
        </section>
      </Container>

      <Container>
        <section className="section" aria-labelledby="what-we-build-heading">
          <header className="section-head">
            <span className="section-kicker">What We Build</span>
            <h2 id="what-we-build-heading" className="section-title">
              Product experiments with clear outcomes
            </h2>
            <p className="section-copy">
              Two active products currently represent the Dezolve Labs portfolio. Each is intentionally scoped, visually distinct,
              and designed to solve one real workflow extremely well.
            </p>
          </header>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Container>

      <Container>
        <section className="section" aria-labelledby="value-heading">
          <header className="section-head">
            <span className="section-kicker">Lab Principles</span>
            <h2 id="value-heading" className="section-title">
              How Dezolve designs and ships
            </h2>
          </header>

          <div className="value-grid">
            {valueBlocks.map((block, index) => (
              <article className="value-card reveal" key={block.title} style={{ ['--delay' as string]: `${80 + index * 60}ms` }}>
                <span className="value-icon" aria-hidden="true">
                  <img src={block.icon} alt="" />
                </span>
                <h3 className="value-title">{block.title}</h3>
                <p>{block.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
