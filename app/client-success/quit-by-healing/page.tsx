import ThemeToggle from '../../components/ThemeToggle'

export default function QuitByHealing() {
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
            <span>Quit by Healing</span>
          </div>
          <p className="case-engine-label">The Magnetic Content Engine</p>
          <h1 className="case-title">
            185K on TikTok. 25K on YouTube.<br />
            <em style={{ color: 'var(--gold)' }}>Built from scratch.</em>
          </h1>
          <p className="case-subtitle">
            Zero to 185K followers without paid ads. An audience built from scratch through a system designed to scale.
          </p>

          {/* Stats bar */}
          <div className="case-stats-bar">
            <div className="case-stat">
              <span className="case-stat-number">185K</span>
              <span className="case-stat-label">TikTok Followers</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">25.4K</span>
              <span className="case-stat-label">YouTube Subscribers</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">~$26K</span>
              <span className="case-stat-label">Passive Revenue</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">511</span>
              <span className="case-stat-label">Sales of $47 Product</span>
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
              <p className="case-profile-value">Quit by Healing</p>
            </div>
            <div>
              <p className="case-profile-label">Background</p>
              <p className="case-profile-value">Men's digital wellness and self-development · Built from zero</p>
            </div>
            <div>
              <p className="case-profile-label">Platforms</p>
              <p className="case-profile-value">TikTok · YouTube · Email · Discord</p>
            </div>
            <div>
              <p className="case-profile-label">Engagement</p>
              <p className="case-profile-value">2023 — 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="case-body-section">
        <div className="case-body-inner" style={{ maxWidth: '760px' }}>
          <p className="case-section-label">The Challenge</p>
          <h2 className="case-section-title">Building a business from the ground up.</h2>
          <p className="case-body-text">
            Quit by Healing started from zero. No existing brand. No audience. No product. The challenge
            wasn't to grow something — it was to create it from scratch. That meant figuring out what to
            build, who to build it for, what to say, how to say it, and how to turn attention into revenue.
            We built every single piece in sequence.
          </p>
          <p className="case-body-text">
            The target audience was men in their 20s and 30s. The key question was: what is the one thing
            this audience is genuinely struggling with that nobody is speaking to directly? Getting that
            answer right wasn't optional. It was the foundation everything else was built on.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">Our Approach</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)' }}>Find the pain. Validate it. Then scale.</h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            Before we created a single piece of content, we needed to know exactly what would resonate.
            Everything else flowed from that.
          </p>

          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Message-to-Market Research</h3>
              <p className="case-approach-desc">
                We ran a rigorous message validation process before starting content generation. We tested
                50 to 100 different messages targeting men in their 20s and 30s to identify which pain points
                resonated most. One topic dominated the results, placing four of the top five spots. That
                signal wasn't a guess — it was data. That topic became the entire content strategy.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">The TikTok Content Blitz</h3>
              <p className="case-approach-desc">
                Armed with a validated message, we launched a full-scale content blitz on TikTok. One to
                two high-quality videos posted every single day for two to three months, all addressing the
                same core pain point from different angles. The strategy was deliberate repetition, not
                creative variety. Within months, the account reached 250K followers. The content didn't
                go viral by accident — it earned it through volume, precision, and message clarity.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">Monetising the Audience</h3>
              <p className="case-approach-desc">
                Once the audience existed, we built the infrastructure to monetise it. We created a digital
                21-Day Program, along with sales pages, email sequences, and all the technical back-end
                required to run it automatically. The funnel was designed to work without human involvement.
                A viewer on TikTok sees the content, clicks through, and enters a fully automated sequence
                that delivers the product and processes payment. No sales calls. No outreach. No manual follow-up.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">Community Building and Audience Migration</h3>
              <p className="case-approach-desc">
                We built a Discord community to deepen engagement and create a bridge between platforms.
                Discord became the connective tissue between attention and loyalty. We then used the Discord
                community and email list to seed the YouTube channel — weekly emails featuring new long-form
                videos drove early subscribers and gave YouTube the engagement signals it needed. TikTok
                created the spark. YouTube became the engine.
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
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '64px' }}>
            What started as nothing is now a self-sustaining content and revenue machine. The automated
            funnel continues generating sales to this day with zero active promotion.
          </p>
          <div className="case-results-grid">
            <div className="case-result-item">
              <span className="case-result-number">185K</span>
              <span className="case-result-label">TikTok Followers</span>
              <p className="case-result-desc">
                Grown entirely from scratch with no paid ads, through validated messaging and daily content consistency.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">25.4K</span>
              <span className="case-result-label">YouTube Subscribers</span>
              <p className="case-result-desc">
                Built entirely from the TikTok and Discord audience through a deliberate migration strategy.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">~$26K</span>
              <span className="case-result-label">Passive Revenue</span>
              <p className="case-result-desc">
                511 sales of a $47 digital product through a fully automated funnel that requires zero human involvement.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">$0</span>
              <span className="case-result-label">Paid Ad Spend</span>
              <p className="case-result-desc">
                Every follower, subscriber, and sale generated entirely through organic content and system design.
              </p>
            </div>
          </div>
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
        <span className="footer-copy">&copy; 2025 Nava45. All rights reserved.</span>
      </footer>
    </>
  )
}
