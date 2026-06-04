import type { Metadata } from 'next'
import CompoundingVisualizer from './CompoundingVisualizer'

export const metadata: Metadata = {
  title: 'The Magnetic Content Engine · Nava45',
  description: 'Turn what you know into an audience that compounds and a brand the market can\'t overlook.',
}

export default function MagneticContentEnginePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="section-label" style={{ marginBottom: '32px', justifyContent: 'center' }}>The Magnetic Content Engine</p>
          <h1 className="hero-title">
            Your expertise,<br />
            <em>amplified</em>.
          </h1>
          <p className="hero-sub">
            An engineered system for turning what you know into an audience that compounds, and a brand the market can&rsquo;t overlook.
          </p>
        </div>
        <div className="hero-scroll-cue animate-fade-up delay-3">
          <a href="#who-its-for" className="hero-scroll-link" aria-label="Scroll to next section">
            <svg className="hero-scroll-arrow" width="40" height="46" viewBox="0 0 24 28" fill="none" aria-hidden="true">
              <path d="M5 8l7 7 7-7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 16l7 7 7-7" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Who It's For */}
      <section id="who-its-for" className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">Who It&rsquo;s For</p>
          <h2 className="case-section-title">When the effort isn&rsquo;t translating to audience.</h2>
          <p className="case-body-text">
            You&rsquo;re posting. You&rsquo;re showing up. You&rsquo;re putting in the hours. But the followers, the engagement, the inbound, none of it matches what you&rsquo;re putting in.
          </p>
          <p className="case-body-text" style={{ marginTop: '24px' }}>
            Or you&rsquo;re a founder, advisor, or operator with decades of real authority, and your online presence reads like someone half as accomplished. Excellence isn&rsquo;t the problem. Distribution is. The Magnetic Content Engine is the system that fixes it.
          </p>
        </div>
      </section>

      {/* What It Is + Methodology */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">What It Is</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)' }}>A complete audience-building system.</h2>
          <p className="case-body-text" style={{ maxWidth: '760px', marginBottom: '72px' }}>
            We map your audience, engineer the content that resonates with them, and build the distribution machine that compounds your reach. Every post moves the needle because every post is designed to.
          </p>

          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Audience Definition</h3>
              <p className="case-approach-desc">
                We define the single person you&rsquo;re talking to: what they want, what they&rsquo;re stuck on, what they trust. Without this, content is a guess. With it, every post lands somewhere it was meant to.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">Content Engineering</h3>
              <p className="case-approach-desc">
                Hooks, formats, structures, and series that match how your audience consumes. We don&rsquo;t post. We engineer pieces designed to be seen, saved, and shared.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">Distribution Mechanics</h3>
              <p className="case-approach-desc">
                Platform-specific rhythm and signals the algorithm rewards. Every piece is built to compound, not disappear into the feed.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">Capture &amp; Compound</h3>
              <p className="case-approach-desc">
                Attention turned into owned channels: newsletter, list, community. The assets you keep regardless of any single platform&rsquo;s algorithm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compounding Visualizer */}
      <section className="case-body-section">
        <div className="case-body-inner">
          <p className="case-section-label">The Compounding Visualizer</p>
          <h2 className="case-section-title">See what consistency does.</h2>
          <p className="case-body-text" style={{ maxWidth: '720px' }}>
            Drag your inputs to see what consistent content can compound to in twelve months. The math is illustrative. The lesson is real.
          </p>
          <CompoundingVisualizer />
        </div>
      </section>

      {/* Proof — Quit by Healing */}
      <section className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">Proof</p>
          <h2 className="case-section-title">185K on TikTok. 25K on YouTube. From zero.</h2>
          <p className="case-body-text">
            Quit by Healing is a men&rsquo;s self-development brand with no advertising budget, no existing audience, and no creator-economy playbook to copy. We defined the audience, engineered the content engine around them, and built the distribution rhythm that scaled the brand to 185K TikTok followers and 25K on YouTube. Built from scratch, monetized in parallel.
          </p>
          <a href="/client-success/quit-by-healing" className="case-body-link">
            Read the case study
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Proof — Adam Leipzig */}
      <section className="case-body-section">
        <div className="case-body-inner">
          <p className="case-section-label">Proof</p>
          <h2 className="case-section-title">22K to 72K+ followers. 327% growth.</h2>
          <p className="case-body-text">
            Adam Leipzig is a Hollywood producer with the credentials of a generation: former SVP at Walt Disney Studios, National Geographic Films. He came in with the reputation but not the digital footprint to match. We engineered his content engine to make the online presence catch up with the real-life one. 327% audience growth, a 68% hook retention rate, and a system he called the best he&rsquo;d ever seen.
          </p>
          <a href="/client-success/adam-leipzig" className="case-body-link">
            Read the case study
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section">
        <div className="hero-bg" />
        <p className="section-label" style={{ justifyContent: 'center', marginBottom: '32px' }}>Work With Us</p>
        <h2 className="contact-title">
          Ready to <em>build yours?</em>
        </h2>
        <p className="contact-sub">
          If your work deserves a bigger audience than it&rsquo;s getting, we&rsquo;d love to hear from you.
        </p>
        <a href="/apply" className="btn-primary">
          Apply to Work Together
        </a>
      </section>
    </>
  )
}
