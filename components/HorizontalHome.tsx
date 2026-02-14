'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Project } from '@/src/data/projects';

type HorizontalHomeProps = {
  projects: Project[];
};

type ProjectSlot = {
  slug: string;
  name: string;
  oneLiner: string;
  tags: string[];
  status: string;
  link?: string;
};

type PanelId = 'hero' | 'projects' | 'philosophy' | 'process' | 'contact';

const panelOrder: PanelId[] = ['hero', 'projects', 'philosophy', 'process', 'contact'];

const panelLabels: Record<PanelId, string> = {
  hero: 'Intro',
  projects: 'Projects',
  philosophy: 'Philosophy',
  process: 'Process',
  contact: 'Contact',
};

const studioPhrases = [
  'We solve problems, not amplify them.',
  'Clean tools. Clear outcomes.',
  'Focused software with durable intent.',
];

const processSteps = [
  {
    title: 'Discover',
    description: 'Identify the highest-friction moment before defining interface behavior.',
  },
  {
    title: 'Iterate',
    description: 'Prototype quickly and test assumptions with realistic usage scenarios.',
  },
  {
    title: 'Refine',
    description: 'Tighten language, visual hierarchy, and interaction pacing until flow feels obvious.',
  },
  {
    title: 'Deploy',
    description: 'Ship with observability, support loops, and clear standards for ongoing quality.',
  },
];

function getStatusLabel(status: Project['status']) {
  return status === 'Building' ? 'In Development' : 'Live';
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function HorizontalHome({ projects }: HorizontalHomeProps) {
  const [progress, setProgress] = useState(0);
  const [activePanel, setActivePanel] = useState<PanelId>('hero');
  const projectStripRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<PanelId, HTMLElement | null>>({
    hero: null,
    projects: null,
    philosophy: null,
    process: null,
    contact: null,
  });

  const projectSlots = useMemo<ProjectSlot[]>(
    () => [
      ...projects.map((project) => ({
        slug: project.slug,
        name: project.name,
        oneLiner: project.oneLiner,
        tags: project.tags,
        status: getStatusLabel(project.status),
        link: `/projects/${project.slug}`,
      })),
      {
        slug: 'future-lab-slot',
        name: 'Future Project',
        oneLiner: 'A new focused product experiment is currently in research.',
        tags: ['In Discovery'],
        status: 'Coming Soon',
      },
    ],
    [projects],
  );

  useEffect(() => {
    const sections = panelOrder.map((panel) => sectionRefs.current[panel]).filter(Boolean) as HTMLElement[];
    const projectStrip = projectStripRef.current;

    if (sections.length === 0) {
      return;
    }

    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? clamp(window.scrollY / total, 0, 1) : 0);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.34,
      },
    );

    const panelObserver = new IntersectionObserver(
      (entries) => {
        const visiblePanels = entries.filter((entry) => entry.isIntersecting);

        if (visiblePanels.length === 0) {
          return;
        }

        visiblePanels.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const mostVisible = visiblePanels[0];
        const id = mostVisible.target.getAttribute('data-panel-id') as PanelId | null;

        if (id) {
          setActivePanel(id);
        }
      },
      {
        threshold: [0.35, 0.5, 0.7],
      },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      revealObserver.observe(element);
    });

    sections.forEach((section) => {
      panelObserver.observe(section);
    });

    const handleProjectStripWheel = (event: WheelEvent) => {
      if (!projectStrip) {
        return;
      }

      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        projectStrip.scrollBy({
          left: event.deltaY,
          behavior: 'auto',
        });
      }
    };

    projectStrip?.addEventListener('wheel', handleProjectStripWheel, { passive: false });

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      projectStrip?.removeEventListener('wheel', handleProjectStripWheel);
      revealObserver.disconnect();
      panelObserver.disconnect();
    };
  }, []);

  const registerSection = (id: PanelId) => (element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  };

  const jumpToPanel = (id: PanelId) => {
    const panel = sectionRefs.current[id];

    if (!panel) {
      return;
    }

    panel.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollProjectStrip = (direction: 'left' | 'right') => {
    const strip = projectStripRef.current;

    if (!strip) {
      return;
    }

    strip.scrollBy({
      left: (direction === 'right' ? 1 : -1) * strip.clientWidth * 0.82,
      behavior: 'smooth',
    });
  };

  return (
    <div className="hz-shell" data-active-panel={activePanel}>
      <div className="hz-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav className="hz-panel-nav" data-tone={activePanel === 'contact' ? 'light' : 'dark'} aria-label="Homepage section navigation">
        {panelOrder.map((panel) => (
          <button
            key={panel}
            type="button"
            className={activePanel === panel ? 'is-active' : undefined}
            onClick={() => jumpToPanel(panel)}
            aria-label={`Jump to ${panelLabels[panel]}`}
          >
            <span />
            <em>{panelLabels[panel]}</em>
          </button>
        ))}
      </nav>

      <div className="hz-stack" role="region" aria-label="Dezolve Labs vertical narrative panels">
        <section className="hz-panel hz-hero-panel" data-panel-id="hero" ref={registerSection('hero')}>
          <div className="hz-panel-inner hz-hero-layout">
            <div className="hz-hero-top" data-reveal style={{ ['--reveal-delay' as string]: '20ms' }}>
              <Link href="/" className="hz-brand" aria-label="Dezolve Labs home">
                <span className="hz-brand-mark" aria-hidden="true" />
                Dezolve Labs
              </Link>
              <div className="hz-hero-mini-nav" aria-label="Primary home links">
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="hz-hero-main" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
              <p className="hz-eyebrow">Software Innovation Studio</p>
              <h1 className="hz-title">Dezolve Labs</h1>
              <p className="hz-subtitle">Dissolving complexity into elegant software.</p>
              <div className="hz-hero-actions">
                <button className="hz-button hz-button-primary" type="button" onClick={() => jumpToPanel('projects')}>
                  Explore →
                </button>
                <Link className="hz-button hz-button-ghost" href="/contact">
                  Contact
                </Link>
              </div>
            </div>

            <div className="hz-hero-art" aria-hidden="true" data-reveal style={{ ['--reveal-delay' as string]: '160ms' }}>
              <div className="hz-hero-gridlines" />
              <p>Lab Narrative // v2.0</p>
            </div>

            <button className="hz-scroll-cue" type="button" onClick={() => jumpToPanel('projects')} aria-label="Scroll to projects">
              <span className="hz-scroll-arrow" aria-hidden="true">
                ↓
              </span>
              Scroll Down
            </button>
          </div>
        </section>

        <section className="hz-panel hz-projects-panel" data-panel-id="projects" ref={registerSection('projects')}>
          <div className="hz-panel-inner">
            <header className="hz-section-head" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
              <p className="hz-eyebrow">What We Build</p>
              <h2 className="hz-heading">Horizontal product bands in a vertical journey</h2>
              <p className="hz-copy">Scroll down through sections, then drag this strip left to right to explore project tracks.</p>
            </header>

            <div className="hz-project-strip-shell" data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
              <button className="hz-strip-control" type="button" onClick={() => scrollProjectStrip('left')} aria-label="Scroll projects left">
                ←
              </button>

              <div className="hz-project-strip" role="list" aria-label="Dezolve Labs project strip" ref={projectStripRef}>
                {projectSlots.map((project, index) => (
                  <article
                    className="hz-project-card"
                    key={project.slug}
                    role="listitem"
                    data-reveal
                    style={{ ['--reveal-delay' as string]: `${120 + index * 70}ms` }}
                  >
                    <p className="hz-project-status">{project.status}</p>
                    <h3>{project.name}</h3>
                    <p>{project.oneLiner}</p>
                    <div className="hz-tag-row">
                      {project.tags.map((tag) => (
                        <span className="hz-tag" key={`${project.slug}-${tag}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="hz-divider" />
                    {project.link ? (
                      <Link href={project.link} className="hz-card-link">
                        View Details →
                      </Link>
                    ) : (
                      <p className="hz-card-muted">Details publish once this track exits discovery.</p>
                    )}
                  </article>
                ))}
              </div>

              <button className="hz-strip-control" type="button" onClick={() => scrollProjectStrip('right')} aria-label="Scroll projects right">
                →
              </button>
            </div>
          </div>
        </section>

        <section className="hz-panel hz-philosophy-panel" data-panel-id="philosophy" ref={registerSection('philosophy')}>
          <div className="hz-panel-inner hz-philosophy-layout">
            <header className="hz-section-head" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
              <p className="hz-eyebrow">Studio Philosophy</p>
              <h2 className="hz-heading">Clear software over noisy software</h2>
            </header>

            <div className="hz-phrase-stack">
              {studioPhrases.map((phrase, index) => (
                <p
                  key={phrase}
                  className={`hz-phrase ${index % 2 === 0 ? 'hz-phrase-left' : 'hz-phrase-right'}`}
                  data-reveal
                  style={{ ['--reveal-delay' as string]: `${120 + index * 80}ms` }}
                >
                  <span className="hz-phrase-line" aria-hidden="true" />
                  <span>{phrase}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="hz-panel hz-process-panel" data-panel-id="process" ref={registerSection('process')}>
          <div className="hz-panel-inner">
            <header className="hz-section-head" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
              <p className="hz-eyebrow">How We Think</p>
              <h2 className="hz-heading">A repeatable delivery loop</h2>
            </header>

            <div className="hz-process-grid">
              {processSteps.map((step, index) => (
                <article
                  className="hz-process-card"
                  key={step.title}
                  data-reveal
                  style={{ ['--reveal-delay' as string]: `${120 + index * 80}ms` }}
                >
                  <span className="hz-process-icon" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hz-panel hz-contact-panel" data-panel-id="contact" ref={registerSection('contact')}>
          <div className="hz-panel-inner hz-contact-layout">
            <div className="hz-contact-copy" data-reveal style={{ ['--reveal-delay' as string]: '60ms' }}>
              <p className="hz-eyebrow hz-eyebrow-dark">Get In Touch</p>
              <h2 className="hz-heading hz-heading-dark">Build something clear with us.</h2>
              <p className="hz-copy hz-copy-dark">Reach out for support, partnerships, or product collaboration.</p>
              <div className="hz-legal-links">
                <Link href="/privacy">Privacy</Link>
                <span aria-hidden="true">•</span>
                <Link href="/terms">Terms</Link>
              </div>
            </div>

            <aside className="hz-contact-card" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
              <p>Share your context and goals. We usually respond within two business days.</p>
              <a className="hz-button hz-button-primary" href="mailto:hello@dezolvelabs.com">
                Email hello@dezolvelabs.com
              </a>
              <p className="hz-contact-note">Dezolve Labs // product studio</p>
            </aside>
          </div>
        </section>

        <footer className="hz-home-footer" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
          <div className="hz-panel-inner hz-home-footer-inner">
            <div className="hz-home-footer-brand">
              <p className="hz-home-footer-title">Dezolve Labs</p>
              <p>Dissolving complexity into elegant software.</p>
            </div>
            <div className="hz-home-footer-links">
              <Link href="/projects">Projects</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
            <p className="hz-home-footer-meta">© {new Date().getFullYear()} Dezolve Labs</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
