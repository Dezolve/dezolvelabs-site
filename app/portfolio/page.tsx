import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';
import styles from './portfolio.module.css';

const productStandards = [
  {
    title: 'A real problem',
    copy: 'The product should solve a specific need for a clear group of people or a real operation.',
  },
  {
    title: 'A focused experience',
    copy: 'The main job should be easy to understand, easy to use, and worth returning to.',
  },
  {
    title: 'Room to improve',
    copy: 'The product should have a practical path from a useful first release to something stronger over time.',
  },
];

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore the independent software products being built and grown by Dezolve Labs.',
};

export default function PortfolioPage() {
  return (
    <Container>
      <div className="page-shell portfolio-page-shell">
        <section className="page-intro portfolio-intro" aria-labelledby="portfolio-page-heading">
          <p className="kicker" data-reveal>
            Products
          </p>
          <h1 id="portfolio-page-heading" className="page-title" data-reveal>
            Explore the Dezolve Labs portfolio.
          </h1>
          <div className="page-intro-split" data-reveal>
            <p className="page-copy">
              Dezolve Labs builds software for communication, recommendations, wellness, and retail operations.
            </p>
            <p>
              Each product has its own audience, purpose, and website. This page gives you a clear view of what it does,
              where it stands, and where to learn more.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="portfolio-grid-heading">
          <h2 id="portfolio-grid-heading" className="sr-only">
            Dezolve Labs products
          </h2>
          <div className={`portfolio-grid portfolio-page-grid ${styles.productGrid}`}>
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} revealDelay={index * 80} />
            ))}
          </div>
        </section>

        <section className="dark-section portfolio-thesis" aria-labelledby="portfolio-rationale-heading" data-reveal>
          <div>
            <p className="kicker kicker-light">Why one studio</p>
            <h2 id="portfolio-rationale-heading" className="section-title">
              Different products, supported by the same team.
            </h2>
          </div>
          <p>
            Dezolve Labs provides the product strategy, design, engineering, and ongoing support behind the portfolio.
            That shared foundation helps each product move faster without forcing them to look or behave the same.
          </p>
        </section>

        <section className="content-section" aria-labelledby="portfolio-logic-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">What we look for</p>
            <h2 id="portfolio-logic-heading" className="section-title">
              The basics behind every product we take on.
            </h2>
          </div>
          <div className="portfolio-logic-grid">
            {productStandards.map((item, index) => (
              <article key={item.title} data-reveal>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
