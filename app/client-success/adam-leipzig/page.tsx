import ThemeToggle from '../../components/ThemeToggle'

export default function AdamLeipzig() {
  return (
    <>
      {/* Nav */}
      <nav>
        <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <ThemeToggle />
          <a href="/#contact" className="nav-cta">Apply to Work Together</a>
        </div>
      </nav>

      {/* Case Study Hero */}
      <section className="case-hero">
        <div className="hero-bg" />
        <div className="case-hero-inner" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="case-breadcrumb">
            <a href="/client-success" className="case-breadcrumb-link">Client Success</a>
            <span className="case-breadcrumb-sep"> / </span>
            <span>Adam Leipzig</span>
          </div>
          <p className="case-engine-label">The Magnetic Content Engine</p>
          <h1 className="case-title">
            From stalling<br />
            to <em style={{ color: 'var(--gold)' }}>scaling.</em>
          </h1>
          <p className="case-subtitle">
            22K to 72K+ followers in under 18 months. A systematic rebuild of how a world-class creator
            shows up online.
          </p>

          {/* Stats bar */}
          <div className="case-stats-bar">
            <div className="case-stat">
              <span className="case-stat-number">327%</span>
              <span className="case-stat-label">Audience Growth</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">68%</span>
              <span className="case-stat-label">Hook Retention Rate</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">93%</span>
              <span className="case-stat-label">YouTube Growth</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">72K+</span>
              <span className="case-stat-label">Total Followers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Client Profile */}
      <section className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner">
          <div className="case-profile">
            <div>
              <p className="case-profile-label">Client</p>
              <p className="case-profile-value">Adam Leipzig</p>
            </div>
            <div>
              <p className="case-profile-label">Background</p>
              <p className="case-profile-value">Hollywood Producer · Former President, National Geographic Films · Former SVP, Walt Disney Studios</p>
            </div>
            <div>
              <p className="case-profile-label">Platforms</p>
              <p className="case-profile-value">Instagram · LinkedIn · YouTube · Facebook · Threads</p>
            </div>
            <div>
              <p className="case-profile-label">Engagement</p>
              <p className="case-profile-value">August 2024 — Ongoing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="case-body-section">
        <div className="case-body-inner case-body-prose">
          <p className="case-section-label">The Challenge</p>
          <h2 className="case-section-title">Go big or go home.</h2>
          <p className="case-body-text">
            Adam Leipzig wasn&rsquo;t new to content when he came to Nava45. A Hollywood producer, senior executive
            at Walt Disney Studios, and former President of National Geographic Films — his credentials are exceptional.
            And yet his social media presence wasn&rsquo;t reflecting that.
          </p>
          <p className="case-body-text">
            He was investing significantly in professional video editing and consistently creating content, but the efforts
            weren&rsquo;t paying off. Views were inconsistent, engagement was low, and growth had stalled. A few videos
            had gone viral, but there was no repeatable system behind them. Despite the effort and investment, his social
            media wasn&rsquo;t translating into real business impact.
          </p>
          <p className="case-body-text">
            Like many creators, Adam was creating content based on instinct — what felt valuable, what seemed helpful,
            what came to mind in the moment. Without a defined content strategy, audience segmentation, or engagement
            optimization, views were flat and follower growth had hit a wall.
          </p>
          <p className="case-body-text">
            What made it harder: Adam had already tried to fix this. By his own account, he&rsquo;d worked with multiple
            agencies before Nava45 — none delivered meaningful results.
          </p>

          {/* Pull quote */}
          <blockquote className="case-pull-quote">
            <p className="case-pull-quote-text">
              &ldquo;I&rsquo;ve worked with 10 other agencies, and you are the best I&rsquo;ve ever seen. Nobody comes close.&rdquo;
            </p>
            <cite className="case-pull-quote-cite">— Adam Leipzig</cite>
          </blockquote>
        </div>
      </section>

      {/* Approach */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">Our Approach</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)' }}>Strategy first. Then execution.</h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            Taking over Adam&rsquo;s entire social media operation meant understanding exactly who we were talking to
            and what they care about. Everything else flowed from that.
          </p>

          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Audience Intelligence</h3>
              <p className="case-approach-desc">
                A comprehensive breakdown of Adam&rsquo;s Total Addressable Market mapped four distinct customer profiles.
                For each profile, we estimated market size, validated commercial viability, and mapped the content most
                likely to resonate. Data-backed foundation — no guesswork. His Ideal Customer Profile is refreshed every
                six months, keeping the strategy as current as the feed.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">Full Platform Takeover</h3>
              <p className="case-approach-desc">
                Nava45 took full ownership: content pillars, content calendar, scheduling, and community management —
                so Adam could focus entirely on recording and creation. We also expanded his presence to LinkedIn, a
                platform that had been completely underutilised despite its fit for his audience.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">The 3-Point Hook Format</h3>
              <p className="case-approach-desc">
                At a 22% hook retention rate, more than three-quarters of viewers were scrolling past Adam&rsquo;s
                content before it had a chance to land. The fix wasn&rsquo;t more content — it was format and packaging.
                We implemented a proprietary 3-point hook structure, restructuring the critical first three seconds of
                every video. The editing team was trained on the format. Hook retention climbed from 22% to 68%.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">Recent Events as a Growth Engine</h3>
              <p className="case-approach-desc">
                The biggest unlock was a consistent pipeline of recent events — giving Adam a front-row seat to every
                conversation his audience was already having. When the Netflix/Warner Bros story broke, when the Super Bowl
                dominated conversations, when Alex Honnold made headlines — we plugged in with timely, authoritative
                content. These videos drove his largest follower spikes. Not by chasing trends, but by arriving with
                authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="case-results-section">
        <div className="case-results-bg" />
        <div className="case-body-inner" style={{ position: 'relative', zIndex: 1 }}>
          <p className="case-section-label" style={{ color: 'var(--gold)' }}>The Results</p>
          <h2 className="case-section-title" style={{ marginBottom: '64px' }}>
            The numbers speak<br />
            <em style={{ color: 'var(--gold)' }}>for themselves.</em>
          </h2>
          <div className="case-results-grid">
            <div className="case-result-item">
              <span className="case-result-number">22K → 72K+</span>
              <span className="case-result-label">Instagram followers</span>
              <p className="case-result-desc">
                167% audience growth on Instagram alone, driven by major viral spikes tied to the Recent Events Strategy.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">93%</span>
              <span className="case-result-label">YouTube Growth</span>
              <p className="case-result-desc">
                Subscribers nearly doubled. The content strategy extended Adam&rsquo;s reach across platforms simultaneously.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">22% → 68%</span>
              <span className="case-result-label">Hook Retention Rate</span>
              <p className="case-result-desc">
                A direct result of implementing the 3-point hook format and repackaging video for the critical first three seconds.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">Book Launch</span>
              <span className="case-result-label">New Revenue Channel</span>
              <p className="case-result-desc">
                <em>Fearless Persistence</em> — Adam&rsquo;s book launch — was powered directly by his audience. Social platforms
                drove pre-sales and built an email subscriber list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote close */}
      <section className="case-body-section" style={{ background: 'var(--bg)' }}>
        <div className="case-body-inner" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <blockquote className="case-closing-quote">
            <p className="case-closing-quote-text">
              &ldquo;I&rsquo;ve worked with 10 companies like yours and nobody does it better.<br />
              <em style={{ color: 'var(--gold)' }}>You are the best I have ever seen.</em>&rdquo;
            </p>
            <cite className="case-closing-quote-cite">
              Adam Leipzig &middot; Hollywood Producer &middot; Former SVP, Walt Disney Studios
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cs-cta-section">
        <div className="hero-bg" />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Work With Us</p>
          <h2 className="cs-cta-headline">
            Ready to write<br />
            <em style={{ color: 'var(--gold)' }}>your story?</em>
          </h2>
          <p className="cs-cta-sub">
            We work with a select group of clients. If you&rsquo;re serious about growth, we&rsquo;d like to hear from you.
          </p>
          <a href="/#contact" className="btn-primary">Apply to Work Together</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <span className="footer-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></span>
        <span className="footer-copy">© 2025 Nava45. All rights reserved.</span>
      </footer>
    </>
  )
}
