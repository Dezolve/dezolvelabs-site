import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjectScreenshot, hasRealProjectScreenshot } from '@/src/data/projectScreenshots';
import { projects } from '@/src/data/projects';
import styles from './home.module.css';

const principles = [
  {
    number: '01',
    title: 'Clear purpose',
    copy: 'Each product is built around a specific problem, audience, and reason to be used.',
  },
  {
    number: '02',
    title: 'Focused experience',
    copy: 'Features and design choices stay centered on the job the product is meant to do.',
  },
  {
    number: '03',
    title: 'Ongoing improvement',
    copy: 'Products continue to evolve through real use, customer feedback, and long-term technical investment.',
  },
];

export const metadata: Metadata = {
  title: {
    absolute: 'Dezolve Labs — Independent Product Studio',
  },
  description:
    'Dezolve Labs builds and grows independent software products across communication, consumer utility, wellness, and business operations.',
};

export default function HomePage() {
  const [manaCamp, ...supportingProjects] = projects;
  const [favstir, refreshly] = supportingProjects;
  const manaScreenshot = getProjectScreenshot(manaCamp.slug, manaCamp.visuals.preview);
  const favstirScreenshot = getProjectScreenshot(favstir.slug, favstir.visuals.preview);
  const refreshlyScreenshot = getProjectScreenshot(refreshly.slug, refreshly.visuals.preview);
  const spotlightStyle = {
    ['--project-accent-from' as string]: '#5b8cff',
    ['--project-accent-to' as string]: '#ff8b3d',
  } as CSSProperties;

  return (
    <Container>
      <div className="home-shell-v2">
        <section className={styles.hero} style={{ minHeight: 'auto' }} aria-labelledby="home-heading">
          <div className={styles.heroCopy} data-reveal>
            <p className="kicker">Independent product studio</p>
            <h1 id="home-heading" className={styles.heroTitle}>
              Focused software. Built for the long run.
            </h1>
            <p className={`page-copy ${styles.heroLede}`}>
              Dezolve Labs builds, owns, and grows independent products across communication, consumer utility,
              wellness, and business operations.
            </p>
            <div className="hero-actions">
              <Button href="/portfolio">Explore our products</Button>
              <Button href="/studio" variant="secondary">
                How we build
              </Button>
            </div>
            <div className={styles.heroProof} aria-label="Portfolio summary">
              <span>
                <strong>{projects.length}</strong>
                Products
              </span>
              <span>
                <strong>2</strong>
                Live today
              </span>
              <span>
                <strong>1</strong>
                Flagship platform
              </span>
            </div>
          </div>

          <div className={styles.productMosaic} data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
            <Link href={`/portfolio/${manaCamp.slug}`} className={styles.manaCard}>
              <div className={styles.manaCardCopy}>
                <span className={styles.cardLabel}>Flagship platform</span>
                <Image src={manaCamp.visuals.logo} alt="" width={54} height={54} className={styles.manaLogo} />
                <div>
                  <h2>{manaCamp.name}</h2>
                  <p>Presence-first communication for the moments that deserve more than another feed.</p>
                </div>
                <span className={styles.cardLink}>Explore product ↗</span>
              </div>
              <Image
                src={manaScreenshot}
                alt="ManaCamp application interface"
                width={1600}
                height={1000}
                className={styles.manaPreview}
                sizes="(max-width: 720px) 88vw, 46vw"
                priority
              />
            </Link>

            <Link href={`/portfolio/${favstir.slug}`} className={`${styles.sideCard} ${styles.favstirCard}`}>
              <div className={styles.sideCardCopy}>
                <span className={styles.cardLabel}>Live product</span>
                <Image src={favstir.visuals.logo} alt="" width={38} height={38} className={styles.sideLogo} />
                <h2>{favstir.name}</h2>
                <p>Trusted recommendations without the noise.</p>
              </div>
              <Image
                src={favstirScreenshot}
                alt="Favstir application interface"
                width={1200}
                height={760}
                className={styles.sidePreview}
                sizes="(max-width: 720px) 44vw, 18vw"
              />
            </Link>

            <Link href={`/portfolio/${refreshly.slug}`} className={`${styles.sideCard} ${styles.refreshlyCard}`}>
              <div className={styles.sideCardCopy}>
                <span className={styles.cardLabel}>Daily utility</span>
                <Image src={refreshly.visuals.logo} alt="" width={38} height={38} className={styles.sideLogo} />
                <h2>{refreshly.name}</h2>
                <p>Hydration tracking designed to stay easy.</p>
              </div>
              <Image
                src={refreshlyScreenshot}
                alt="Refreshly application interface"
                width={1200}
                height={760}
                className={styles.sidePreview}
                sizes="(max-width: 720px) 44vw, 18vw"
              />
            </Link>
          </div>
        </section>

        <section className="content-section portfolio-led-section" aria-labelledby="portfolio-heading">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="kicker">Products</p>
              <h2 id="portfolio-heading" className="section-title">
                See what we are building.
              </h2>
            </div>
            <p className="page-copy">
              Explore live products and active development across communication, recommendations, wellness, and retail
              software.
            </p>
          </div>

          <article className="project-spotlight" style={spotlightStyle} data-reveal>
            <div className="project-spotlight-copy">
              <div className="spotlight-meta">
                <span className="status-pill">{manaCamp.status}</span>
                <span>{manaCamp.category}</span>
              </div>
              <Image src={manaCamp.visuals.logo} alt="" width={68} height={68} className="spotlight-logo" />
              <h3>{manaCamp.name}</h3>
              <p className="spotlight-lede">{manaCamp.oneLiner}</p>
              <p>{manaCamp.description}</p>
              <div className="hero-actions">
                <Button href={`/portfolio/${manaCamp.slug}`}>Explore ManaCamp</Button>
                <Button href={manaCamp.links.primary} variant="secondary">
                  Visit product
                </Button>
              </div>
            </div>
            <div
              className={`project-spotlight-visual ${hasRealProjectScreenshot(manaCamp.slug) ? 'has-real-preview' : ''}`}
              aria-hidden="true"
            >
              <Image src={manaScreenshot} alt="" width={1600} height={1000} sizes="(max-width: 820px) 92vw, 48vw" />
            </div>
          </article>

          <div className="portfolio-grid portfolio-support-grid">
            {supportingProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} revealDelay={index * 80} />
            ))}
          </div>
        </section>

        <section className="content-section philosophy-section" aria-labelledby="principles-heading">
          <div className="section-heading" data-reveal>
            <p className="kicker">What to expect</p>
            <h2 id="principles-heading" className="section-title max-copy-width">
              Software with a clear job to do.
            </h2>
          </div>
          <div className="principles-grid editorial-principles">
            {principles.map((principle) => (
              <article key={principle.number} className="principle-card" data-reveal>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="studio-story dark-section" aria-labelledby="studio-story-heading" data-reveal>
          <div>
            <p className="kicker kicker-light">About the studio</p>
            <h2 id="studio-story-heading" className="section-title">
              One team behind a growing product portfolio.
            </h2>
          </div>
          <div className="studio-story-copy">
            <p>
              Dezolve Labs brings product strategy, design, engineering, and long-term support together under one studio.
              Each product keeps its own identity while benefiting from a shared technical foundation and quality
              standard.
            </p>
            <Button href="/studio" variant="ghost">
              How the studio works
            </Button>
          </div>
        </section>

        <section className="content-section current-direction" aria-labelledby="direction-heading">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="kicker">Portfolio status</p>
              <h2 id="direction-heading" className="section-title">
                Where the portfolio stands today.
              </h2>
            </div>
            <p className="page-copy">
              See which products are live, in development, or used internally. Select any product for details and links.
            </p>
          </div>
          <div className="build-status-list">
            {projects.map((project) => (
              <a key={project.slug} href={`/portfolio/${project.slug}`} className="build-status-row" data-reveal>
                <span className="build-status-name">{project.name}</span>
                <span className="build-status-category">{project.category}</span>
                <span className="status-pill">{project.status}</span>
                <span aria-hidden="true" className="status-arrow">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-panel-v2" aria-labelledby="home-contact-heading" data-reveal>
          <div>
            <p className="kicker">Work with Dezolve Labs</p>
            <h2 id="home-contact-heading" className="section-title">
              Have a product, partnership, or opportunity worth discussing?
            </h2>
          </div>
          <div className="contact-panel-content">
            <p>
              Tell us what you are working on, why you think there may be a fit, and what a useful next step would look
              like.
            </p>
            <Button href="/contact">Start a conversation</Button>
          </div>
        </section>
      </div>
    </Container>
  );
}
