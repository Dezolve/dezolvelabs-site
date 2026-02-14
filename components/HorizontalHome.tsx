'use client';

import Link from 'next/link';
import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
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
  accentFrom: string;
  accentTo: string;
  link: string;
  ctaLabel: string;
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
        accentFrom: project.visuals.gradientFrom,
        accentTo: project.visuals.gradientTo,
        link: `/projects/${project.slug}`,
        ctaLabel: 'View Details →',
      })),
      {
        slug: 'future-lab-slot',
        name: 'Future Project',
        oneLiner: 'A new focused product experiment is currently in research.',
        tags: ['In Discovery'],
        status: 'Coming Soon',
        accentFrom: '#2b6dd6',
        accentTo: '#3ebeff',
        link: '/projects',
        ctaLabel: 'Explore Portfolio →',
      },
    ],
    [projects],
  );

  useEffect(() => {
    const sections = panelOrder.map((panel) => sectionRefs.current[panel]).filter(Boolean) as HTMLElement[];
    const projectStrip = projectStripRef.current;
    let animationFrame = 0;

    if (sections.length === 0) {
      return;
    }

    const getActivePanel = () => {
      const probe = window.innerHeight * 0.46;
      let fallbackPanel: PanelId = 'hero';
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const panelId = section.getAttribute('data-panel-id') as PanelId | null;

        if (!panelId) {
          continue;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= probe && rect.bottom >= probe) {
          return panelId;
        }

        const distance = Math.min(Math.abs(rect.top - probe), Math.abs(rect.bottom - probe));

        if (distance < bestDistance) {
          bestDistance = distance;
          fallbackPanel = panelId;
        }
      }

      return fallbackPanel;
    };

    const updateScrollState = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = total > 0 ? clamp(window.scrollY / total, 0, 1) : 0;
      const nextPanel = getActivePanel();

      setProgress((currentProgress) => (Math.abs(currentProgress - nextProgress) < 0.002 ? currentProgress : nextProgress));
      setActivePanel((currentPanel) => (currentPanel === nextPanel ? currentPanel : nextPanel));
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
        threshold: 0.22,
      },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
      revealObserver.observe(element);
    });

    const queueScrollUpdate = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateScrollState();
      });
    };

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

    let dragActive = false;
    let dragMoved = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    const handleProjectStripPointerDown = (event: PointerEvent) => {
      if (!projectStrip) {
        return;
      }

      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }

      dragActive = true;
      dragMoved = false;
      dragStartX = event.clientX;
      dragStartScroll = projectStrip.scrollLeft;
      projectStrip.classList.add('is-dragging');
      projectStrip.setPointerCapture?.(event.pointerId);
    };

    const handleProjectStripPointerMove = (event: PointerEvent) => {
      if (!projectStrip || !dragActive) {
        return;
      }

      const deltaX = event.clientX - dragStartX;

      if (Math.abs(deltaX) > 2) {
        dragMoved = true;
      }

      projectStrip.scrollLeft = dragStartScroll - deltaX;
      event.preventDefault();
    };

    const stopProjectStripDrag = (event: PointerEvent) => {
      if (!projectStrip || !dragActive) {
        return;
      }

      dragActive = false;
      projectStrip.classList.remove('is-dragging');
      projectStrip.releasePointerCapture?.(event.pointerId);
      window.setTimeout(() => {
        dragMoved = false;
      }, 0);
    };

    const handleProjectStripClickCapture = (event: MouseEvent) => {
      if (!dragMoved) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
    };

    projectStrip?.addEventListener('wheel', handleProjectStripWheel, { passive: false });
    projectStrip?.addEventListener('pointerdown', handleProjectStripPointerDown);
    projectStrip?.addEventListener('pointermove', handleProjectStripPointerMove);
    projectStrip?.addEventListener('pointerup', stopProjectStripDrag);
    projectStrip?.addEventListener('pointercancel', stopProjectStripDrag);
    projectStrip?.addEventListener('click', handleProjectStripClickCapture, true);

    updateScrollState();
    window.addEventListener('scroll', queueScrollUpdate, { passive: true });
    window.addEventListener('resize', queueScrollUpdate, { passive: true });

    return () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener('scroll', queueScrollUpdate);
      window.removeEventListener('resize', queueScrollUpdate);
      projectStrip?.removeEventListener('wheel', handleProjectStripWheel);
      projectStrip?.removeEventListener('pointerdown', handleProjectStripPointerDown);
      projectStrip?.removeEventListener('pointermove', handleProjectStripPointerMove);
      projectStrip?.removeEventListener('pointerup', stopProjectStripDrag);
      projectStrip?.removeEventListener('pointercancel', stopProjectStripDrag);
      projectStrip?.removeEventListener('click', handleProjectStripClickCapture, true);
      revealObserver.disconnect();
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

    const offsetTop = window.scrollY + panel.getBoundingClientRect().top;

    window.scrollTo({
      top: Math.max(offsetTop - 8, 0),
      behavior: 'smooth',
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
              <h1 className="hz-title" data-text="Dezolve Labs">
                Dezolve Labs
              </h1>
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
              <p className="hz-copy">Scroll down through sections, then drag or wheel this strip left to right to explore project tracks.</p>
            </header>

            <div className="hz-project-strip-shell" data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
              <button className="hz-strip-control" type="button" onClick={() => scrollProjectStrip('left')} aria-label="Scroll projects left">
                ←
              </button>

              <div className="hz-project-strip" role="list" aria-label="Dezolve Labs project strip" ref={projectStripRef}>
                {projectSlots.map((project, index) => {
                  const cardStyle = {
                    ['--reveal-delay' as string]: `${120 + index * 70}ms`,
                    ['--chip-accent-from' as string]: project.accentFrom,
                    ['--chip-accent-to' as string]: project.accentTo,
                  } as CSSProperties;

                  return (
                    <Link
                      className="hz-project-card hz-project-card-link"
                      href={project.link}
                      key={project.slug}
                      role="listitem"
                      data-reveal
                      style={cardStyle}
                      aria-label={`Open ${project.name}`}
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
                      <span className="hz-card-link">{project.ctaLabel}</span>
                    </Link>
                  );
                })}
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
            <div className="hz-home-footer-socials" aria-label="Social links">
              <a href="https://www.linkedin.com/company/dezolvelabs" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://x.com/dezolvelabs" target="_blank" rel="noreferrer">
                X
              </a>
              <a href="https://www.youtube.com/@dezolvelabs" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
            <p className="hz-home-footer-meta">© {new Date().getFullYear()} Dezolve Labs</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
