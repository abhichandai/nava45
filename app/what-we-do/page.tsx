import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Do · Nava45',
  description: 'We don\'t run campaigns. We build engines. Three systems that remove the ceiling on your growth.',
}

const engines = [
  {
    slug: 'magnetic-content-engine',
    name: 'The Magnetic Content Engine',
    tagline: 'Your expertise, amplified.',
    desc: 'Turn what you know into an audience that compounds, and a brand the market can\u2019t overlook.',
    live: true,
  },
  {
    slug: 'growth-engine',
    name: 'The Growth Engine',
    tagline: 'Your pipeline, on demand.',
    desc: 'A predictable acquisition system that puts qualified prospects on your calendar. On purpose, not by luck.',
    live: true,
  },
  {
    slug: 'intelligence-engine',
    name: 'The Intelligence Engine',
    tagline: 'AI, actually applied.',
    desc: 'Custom automation that takes the manual work off your plate entirely. Built, secured, and deployed around how you already work.',
    live: false,
  },
]

export default function WhatWeDoPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="section-label" style={{ marginBottom: '32px', justifyContent: 'center' }}>What We Do</p>
          <h1 className="hero-title">
            We don&rsquo;t run campaigns.<br />
            We build <em>engines</em>.
          </h1>
          <p className="hero-sub">
            A campaign spends your budget and ends. An engine is a system. It compounds, it gets sharper over time, and it keeps producing long after it&rsquo;s switched on. We build three. Most clients start with one.
          </p>
        </div>
        <div className="hero-scroll-cue animate-fade-up delay-3">
          <a href="#engines" className="hero-scroll-link" aria-label="Scroll to the engines">
            <svg className="hero-scroll-arrow" width="40" height="46" viewBox="0 0 24 28" fill="none" aria-hidden="true">
              <path d="M5 8l7 7 7-7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 16l7 7 7-7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Three engines */}
      <section id="engines" className="wwd-engines">
        <div className="wwd-engines-inner">
          <p className="wwd-framing-text">
            Each one removes a different ceiling on your growth: getting known, getting clients, and getting your time back. They work on their own, and they work better together.
          </p>

          <div className="wwd-engines-grid">
            {engines.map((engine) => (
              <a
                key={engine.slug}
                href={`/what-we-do/${engine.slug}`}
                className={`wwd-engine-card ${engine.live ? '' : 'wwd-engine-card--coming'}`}
              >
                {!engine.live && <span className="wwd-engine-coming-tag">Coming Soon</span>}
                <h3 className="wwd-engine-name">{engine.name}</h3>
                <p className="wwd-engine-tagline"><em>{engine.tagline}</em></p>
                <p className="wwd-engine-desc">{engine.desc}</p>
                <span className="wwd-engine-link">
                  Explore
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="contact-section">
        <div className="hero-bg" />
        <p className="section-label" style={{ justifyContent: 'center', marginBottom: '32px' }}>Get Started</p>
        <h2 className="contact-title">
          Not sure which one <em>you need?</em>
        </h2>
        <p className="contact-sub">
          That&rsquo;s what the first conversation is for.
        </p>
        <a href="/apply" className="btn-primary">
          Apply to Work Together
        </a>
      </section>
    </>
  )
}
