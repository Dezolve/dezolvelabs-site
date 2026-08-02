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
    title: 'Useful first',
    copy: 'Every product begins with a real problem, a clear user, and a reason to exist beyond novelty.',
  },
  {
    number: '02',
    title: 'Focused by design',
    copy: 'Scope stays disciplined so the experience can become simpler, sharper, and easier to trust.',
  },
  {
    number: '03',
    title: 'Built to endure',
    copy: 'We own what we build and keep improving it with a long horizon instead of chasing launch-day attention.',
  },
];

const opportunityTypes = [
  'Product and technology partnerships',
  'Platform integrations',
  'Investment or acquisition conversations',
  'Early product feedback',
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
              <p className="kicker">The portfolio</p>
              <h2 id="portfolio-heading" className="section-title">
                Products are the proof.
              </h2>
            </div>
            <p className="page-copy">
              Different categories, one standard: clear utility, careful design, and a product worth owning for the long
              term.
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
            <div className={`project-spotlight-visual ${hasRealProjectScreenshot(manaCamp.slug) ? 'has-real-preview' : ''}`} aria-hidden="true">
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
            <p className="kicker">The shared standard</p>
            <h2 id="principles-heading" className="section-title max-copy-width">
              Build less. Make it matter more.
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
            <p className="kicker kicker-light">Why Dezolve Labs exists</p>
            <h2 id="studio-story-heading" className="section-title">
              One home for products that deserve patient ownership.
            </h2>
          </div>
          <div className="studio-story-copy">
            <p>
              Dezolve Labs is an independent studio built to turn focused ideas into durable software. It gives each
              product the same strategic, technical, and design foundation without forcing them into the same mold.
            </p>
            <Button href="/studio" variant="ghost">
              Inside the studio
            </Button>
          </div>
        </section>

        <section className="content-section current-direction" aria-labelledby="direction-heading">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="kicker">Current direction</p>
              <h2 id="direction-heading" className="section-title">
                Building now, not someday.
              </h2>
            </div>
            <p className="page-copy">
              The portfolio is intentionally early. Status is visible because progress matters more than pretending every
              product is finished.
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
            <p className="kicker">Open conversations</p>
            <h2 id="home-contact-heading" className="section-title">
              The right opportunities start with useful context.
            </h2>
          </div>
          <div className="contact-panel-content">
            <ul>
              {opportunityTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button href="/contact">Contact Dezolve Labs</Button>
          </div>
        </section>
      </div>
    </Container>
  );
}
