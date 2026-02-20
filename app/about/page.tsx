import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/Container';

const processSteps = [
  {
    title: 'Discover',
    copy: 'We audit the existing workflow and isolate where confidence drops for real users.',
  },
  {
    title: 'Iterate',
    copy: 'Low-fidelity prototypes test hierarchy, copy, and transitions before visual polish.',
  },
  {
    title: 'Refine',
    copy: 'We tighten interaction pacing, spacing rhythm, and system-level consistency.',
  },
  {
    title: 'Deploy',
    copy: 'Delivery includes clear QA standards, analytics hooks, and documented guardrails.',
  },
];

const principles = [
  {
    title: 'Why horizontal chapters?',
    copy: 'They reduce cognitive drift by letting each section feel like a focused scene with a clear objective.',
  },
  {
    title: 'How we keep motion useful',
    copy: 'Animation only supports orientation, hierarchy, and intent. Decorative movement is removed.',
  },
  {
    title: 'How we scale this system',
    copy: 'Reusable panel templates let us add new pages and products without visual inconsistency.',
  },
];

export const metadata: Metadata = {
  title: 'About',
  description: 'The design philosophy, process, and operating principles behind Dezolve Labs.',
};

export default function AboutPage() {
  return (
    <Container>
      <section className="page-shell" aria-labelledby="about-heading">
        <header className="page-intro">
          <p className="kicker" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
            About
          </p>
          <h1 id="about-heading" className="page-title" data-reveal style={{ ['--reveal-delay' as string]: '90ms' }}>
            Building software chapters with contrast, clarity, and intent.
          </h1>
          <p className="page-copy" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
            Dezolve Labs treats every product as a focused story. We shape each chapter to move users from uncertainty to
            confident action.
          </p>
        </header>

        <section className="split-panel" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
          <div className="split-panel-copy">
            <p className="kicker">Philosophy</p>
            <h2 className="section-title">Left-brain structure, right-brain craft.</h2>
            <p className="section-copy">
              We combine strict grid systems and contrast-led UI with tactile motion that feels intentional, not ornamental.
            </p>
          </div>
          <div className="split-panel-visual split-panel-visual-strong" aria-hidden="true">
            <p>Simple architecture.</p>
            <p>Deliberate hierarchy.</p>
            <p>Reliable outcomes.</p>
          </div>
        </section>

        <section className="split-panel split-panel-reverse" data-reveal style={{ ['--reveal-delay' as string]: '120ms' }}>
          <div className="split-panel-copy">
            <p className="kicker">Craft Standard</p>
            <h2 className="section-title">Every interaction must earn its place.</h2>
            <p className="section-copy">
              We eliminate throwaway effects and keep the interface fast, legible, and durable across devices.
            </p>
          </div>
          <div className="split-panel-visual split-panel-visual-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="page-chapter" aria-labelledby="about-process">
          <p className="kicker" data-reveal style={{ ['--reveal-delay' as string]: '40ms' }}>
            Process
          </p>
          <h2 id="about-process" className="section-title" data-reveal style={{ ['--reveal-delay' as string]: '90ms' }}>
            Discover, iterate, refine, deploy.
          </h2>

          <div className="process-rail">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="process-rail-step"
                data-reveal
                style={
                  {
                    ['--reveal-delay' as string]: `${130 + index * 90}ms`,
                    ['--reveal-from' as string]: index % 2 === 0 ? 'translate3d(-36px, 0, 0)' : 'translate3d(36px, 0, 0)',
                  } as CSSProperties
                }
              >
                <p className="process-step-label">Step {index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-chapter" aria-labelledby="about-principles">
          <h2 id="about-principles" className="section-title" data-reveal style={{ ['--reveal-delay' as string]: '60ms' }}>
            Design principles in practice
          </h2>
          <div className="accordion-list">
            {principles.map((item, index) => (
              <details key={item.title} className="accordion-item" data-reveal style={{ ['--reveal-delay' as string]: `${100 + index * 70}ms` }}>
                <summary>{item.title}</summary>
                <p>{item.copy}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </Container>
  );
}
