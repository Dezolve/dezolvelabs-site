import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/src/data/projects';

const portfolioLogic = [
  {
    title: 'A real use case',
    copy: 'Each product starts with a concrete behavior, problem, or operational need worth improving.',
  },
  {
    title: 'A distinct identity',
    copy: 'Products share a quality standard without being flattened into one visual or commercial formula.',
  },
  {
    title: 'A long horizon',
    copy: 'The goal is not a crowded launch calendar. It is a smaller set of products that can compound over time.',
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
            Different products. One deliberate standard.
          </h1>
          <div className="page-intro-split" data-reveal>
            <p className="page-copy">
              Dezolve Labs builds and grows software across communication, consumer utility, wellness, and business
              operations.
            </p>
            <p>
              Some products are small and practical. Others are long-horizon platform bets. Each one must earn its place
              through usefulness, focus, and a credible path to lasting value.
            </p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="portfolio-grid-heading">
          <h2 id="portfolio-grid-heading" className="sr-only">
            Dezolve Labs products
          </h2>
          <div className="portfolio-grid portfolio-page-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} revealDelay={index * 80} />
            ))}
          </div>
        </section>

        <section className="dark-section portfolio-thesis" aria-labelledby="portfolio-rationale-heading" data-reveal>
          <div>
            <p className="kicker kicker-light">Portfolio thesis</p>
            <h2 id="portfolio-rationale-heading" className="section-title">
              Broad in category. Consistent in judgment.
            </h2>
          </div>
          <p>
            The portfolio is not held together by one market. It is held together by the way products are chosen and
            built: real utility, disciplined scope, strong product taste, and patient ownership.
          </p>
        </section>

        <section className="content-section" aria-labelledby="portfolio-logic-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">What earns a place</p>
            <h2 id="portfolio-logic-heading" className="section-title">
              A simple filter for new products.
            </h2>
          </div>
          <div className="portfolio-logic-grid">
            {portfolioLogic.map((item, index) => (
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
