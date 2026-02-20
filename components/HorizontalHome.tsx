'use client';

import Link from 'next/link';
import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import type { Project } from '@/src/data/projects';

type HorizontalHomeProps = {
  projects: Project[];
};

type PanelId = 'hero' | 'projects' | 'philosophy' | 'process' | 'contact';

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

const panelOrder: PanelId[] = ['hero', 'projects', 'philosophy', 'process', 'contact'];

const panelLabels: Record<PanelId, string> = {
  hero: 'Intro',
  projects: 'Projects',
  philosophy: 'Philosophy',
  process: 'Process',
  contact: 'Contact',
};

const philosophyPillars = [
  'Design for fast understanding.',
  'Keep interactions calm and direct.',
  'Ship focused systems that can scale cleanly.',
];

const processSteps = [
  {
    title: 'Discover',
    description: 'Map the highest-friction problem and define the smallest meaningful outcome.',
  },
  {
    title: 'Iterate',
    description: 'Prototype quickly, test assumptions, and remove weak flows before launch.',
  },
  {
    title: 'Refine',
    description: 'Tighten copy, hierarchy, and behavior until the interface feels obvious.',
  },
  {
    title: 'Deploy',
    description: 'Ship with measurable goals, feedback loops, and room for disciplined growth.',
  },
];

function getStatusLabel(status: Project['status']) {
  return status === 'Building' ? 'In Development' : 'Live';
}

export function HorizontalHome({ projects }: HorizontalHomeProps) {
  const [activePanel, setActivePanel] = useState<PanelId>('hero');
  const [horizontalMode, setHorizontalMode] = useState(false);
  const [heroParallax, setHeroParallax] = useState(0);
  const [trackDistance, setTrackDistance] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);

  const projectsPanelRef = useRef<HTMLElement | null>(null);
  const projectsTrackRef = useRef<HTMLDivElement | null>(null);
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
        ctaLabel: 'View Project ->',
      })),
      {
        slug: 'coming-soon',
        name: 'Coming Soon',
        oneLiner: 'A new studio product chapter is currently in active research and prototyping.',
        tags: ['In Discovery'],
        status: 'Coming Soon',
        accentFrom: '#1d68d7',
        accentTo: '#22d3ee',
        link: '/projects',
        ctaLabel: 'View Portfolio ->',
      },
    ],
    [projects],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const updateHorizontalMode = () => {
      setHorizontalMode(mediaQuery.matches);
    };

    updateHorizontalMode();
    mediaQuery.addEventListener('change', updateHorizontalMode);

    return () => {
      mediaQuery.removeEventListener('change', updateHorizontalMode);
    };
  }, []);

  useEffect(() => {
    if (!horizontalMode) {
      return;
    }

    const measureTrack = () => {
      const panel = projectsPanelRef.current;
      const track = projectsTrackRef.current;

      if (!panel || !track) {
        return;
      }

      const availableWidth = panel.clientWidth;
      const nextDistance = Math.max(track.scrollWidth - availableWidth, 0);

      setTrackDistance((currentDistance) => (Math.abs(currentDistance - nextDistance) < 1 ? currentDistance : nextDistance));
    };

    measureTrack();
    window.addEventListener('resize', measureTrack, { passive: true });

    return () => {
      window.removeEventListener('resize', measureTrack);
    };
  }, [horizontalMode, projectSlots.length]);

  useEffect(() => {
    const getHeaderHeight = () => {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--header-height').trim();
      const parsed = Number.parseFloat(value);

      return Number.isFinite(parsed) ? parsed : 0;
    };

    const updateState = () => {
      const probe = window.innerHeight * 0.45;
      let nextPanel: PanelId = 'hero';
      let bestDistance = Number.POSITIVE_INFINITY;

      panelOrder.forEach((panelId) => {
        const panel = sectionRefs.current[panelId];

        if (!panel) {
          return;
        }

        const rect = panel.getBoundingClientRect();

        if (rect.top <= probe && rect.bottom >= probe) {
          nextPanel = panelId;
          bestDistance = 0;
          return;
        }

        const distance = Math.min(Math.abs(rect.top - probe), Math.abs(rect.bottom - probe));

        if (distance < bestDistance) {
          bestDistance = distance;
          nextPanel = panelId;
        }
      });

      setActivePanel((currentPanel) => (currentPanel === nextPanel ? currentPanel : nextPanel));
      setHeroParallax(Math.min(window.scrollY * 0.16, window.innerHeight * 0.36));

      if (!horizontalMode || trackDistance <= 0) {
        setTrackOffset(0);
        return;
      }

      const panel = projectsPanelRef.current;

      if (!panel) {
        return;
      }

      const headerOffset = getHeaderHeight();
      const panelRect = panel.getBoundingClientRect();
      const available = Math.max(panel.offsetHeight - (window.innerHeight - headerOffset), 1);
      const progress = Math.min(Math.max((-panelRect.top + headerOffset) / available, 0), 1);
      const nextOffset = progress * trackDistance;

      setTrackOffset((currentOffset) => (Math.abs(currentOffset - nextOffset) < 1 ? currentOffset : nextOffset));
    };

    let animationFrame = 0;

    const queueUpdate = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateState();
      });
    };

    updateState();
    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', queueUpdate, { passive: true });

    return () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener('scroll', queueUpdate);
      window.removeEventListener('resize', queueUpdate);
    };
  }, [horizontalMode, trackDistance]);

  const registerSection = (id: PanelId) => (element: HTMLElement | null) => {
    sectionRefs.current[id] = element;
  };

  const registerProjectsSection = (element: HTMLElement | null) => {
    registerSection('projects')(element);
    projectsPanelRef.current = element;
  };

  const jumpToPanel = (id: PanelId) => {
    const panel = sectionRefs.current[id];

    if (!panel) {
      return;
    }

    const headerValue = getComputedStyle(document.documentElement).getPropertyValue('--header-height').trim();
    const headerHeight = Number.parseFloat(headerValue);
    const top = window.scrollY + panel.getBoundingClientRect().top - (Number.isFinite(headerHeight) ? headerHeight : 0);

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    });
  };

  return (
    <div className="home-shell" data-active-panel={activePanel}>
      <nav className="home-panel-nav" aria-label="Homepage chapter navigation">
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

      <section className="home-panel home-hero" data-panel-id="hero" ref={registerSection('hero')}>
        <div className="hero-parallax-layer" style={{ transform: `translate3d(0, ${heroParallax}px, 0)` }} aria-hidden="true" />
        <div className="home-panel-inner hero-layout">
          <p className="kicker" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
            Software Innovation Studio
          </p>

          <h1 className="hero-title" data-reveal style={{ ['--reveal-delay' as string]: '90ms' }}>
            Dissolving complexity into elegant experiences.
          </h1>

          <p className="hero-copy" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
            Each scroll chapter reveals a focused piece of our product story, from concept to launch-ready systems.
          </p>

          <div className="hero-actions" data-reveal style={{ ['--reveal-delay' as string]: '200ms' }}>
            <button className="button button-primary" type="button" onClick={() => jumpToPanel('projects')}>
              View Projects
            </button>
            <Link className="button button-ghost" href="/about">
              Explore Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`home-panel home-projects ${horizontalMode ? 'is-horizontal' : ''}`}
        data-panel-id="projects"
        ref={registerProjectsSection}
        style={horizontalMode ? ({ ['--projects-distance' as string]: `${trackDistance}px` } as CSSProperties) : undefined}
      >
        <div className="home-panel-inner projects-head">
          <p className="kicker" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
            Projects
          </p>
          <h2 className="section-title" data-reveal style={{ ['--reveal-delay' as string]: '90ms' }}>
            Vertical scroll drives a horizontal project gallery.
          </h2>
          <p className="section-copy" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
            On desktop, keep scrolling down to move left to right through current and upcoming product tracks.
          </p>
        </div>

        <div className="projects-stage">
          <div
            className="projects-track"
            ref={projectsTrackRef}
            style={horizontalMode ? ({ transform: `translate3d(${-trackOffset}px, 0, 0)` } as CSSProperties) : undefined}
          >
            {projectSlots.map((project, index) => (
              <Link
                key={project.slug}
                href={project.link}
                className={`home-project-card ${project.status === 'Coming Soon' ? 'is-coming-soon' : ''}`}
                data-reveal
                style={
                  {
                    ['--reveal-delay' as string]: `${160 + index * 80}ms`,
                    ['--card-accent-from' as string]: project.accentFrom,
                    ['--card-accent-to' as string]: project.accentTo,
                  } as CSSProperties
                }
                aria-label={`Open ${project.name}`}
              >
                <p className="project-status">{project.status}</p>
                <h3>{project.name}</h3>
                <p>{project.oneLiner}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={`${project.slug}-${tag}`}>{tag}</span>
                  ))}
                </div>
                <span className="project-cta">{project.ctaLabel}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-panel home-philosophy" data-panel-id="philosophy" ref={registerSection('philosophy')}>
        <div className="home-panel-inner split-layout">
          <div className="split-copy" data-reveal style={{ ['--reveal-delay' as string]: '70ms', ['--reveal-from' as string]: 'translate3d(-36px, 0, 0)' }}>
            <p className="kicker">Philosophy</p>
            <h2 className="section-title">Clarity first. Noise removed. Craft visible.</h2>
            <p className="section-copy">
              We build digital products with deliberate contrast, legible hierarchy, and movement that supports decision-making.
            </p>
          </div>

          <div className="philosophy-visual">
            {philosophyPillars.map((line, index) => (
              <p
                key={line}
                data-reveal
                style={
                  {
                    ['--reveal-delay' as string]: `${110 + index * 90}ms`,
                    ['--reveal-from' as string]: index % 2 === 0 ? 'translate3d(40px, 0, 0)' : 'translate3d(-40px, 0, 0)',
                  } as CSSProperties
                }
              >
                <span aria-hidden="true" />
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="home-panel home-process" data-panel-id="process" ref={registerSection('process')}>
        <div className="home-panel-inner">
          <p className="kicker" data-reveal style={{ ['--reveal-delay' as string]: '50ms' }}>
            Process
          </p>
          <h2 className="section-title" data-reveal style={{ ['--reveal-delay' as string]: '100ms' }}>
            Discover, iterate, refine, deploy.
          </h2>

          <div className="process-stack">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="process-step"
                data-reveal
                style={
                  {
                    ['--reveal-delay' as string]: `${140 + index * 90}ms`,
                    ['--reveal-from' as string]: index % 2 === 0 ? 'translate3d(-42px, 0, 0)' : 'translate3d(42px, 0, 0)',
                  } as CSSProperties
                }
              >
                <p className="process-step-label">Step {index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-panel home-contact" data-panel-id="contact" ref={registerSection('contact')}>
        <div className="home-panel-inner contact-layout">
          <div className="contact-copy" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
            <p className="kicker">Start your project</p>
            <h2 className="section-title">Ready to design a focused product chapter?</h2>
            <p className="section-copy">
              Share your email and a short summary. We will follow up with practical next steps.
            </p>

            <div className="contact-legal-links">
              <Link href="/terms">Terms</Link>
              <span aria-hidden="true">|</span>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>

          <aside className="contact-card" data-reveal style={{ ['--reveal-delay' as string]: '160ms' }}>
            <form className="contact-capture" action="mailto:hello@dezolvelabs.com" method="post" encType="text/plain">
              <label htmlFor="home-email">Email address</label>
              <input id="home-email" name="email" type="email" placeholder="you@company.com" required />
              <button type="submit" className="button button-primary">
                Start your project
              </button>
            </form>

            <div className="contact-socials">
              <p>Follow us</p>
              <div>
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
            </div>

            <p className="contact-meta">Copyright {new Date().getFullYear()} Dezolve Labs</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
