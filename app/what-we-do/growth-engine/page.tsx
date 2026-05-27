import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Growth Engine · Nava45',
  description: 'A predictable acquisition system that puts qualified prospects on your calendar. On purpose, not by luck.',
}

export default function GrowthEnginePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="section-label" style={{ marginBottom: '32px', justifyContent: 'center' }}>The Growth Engine</p>
          <h1 className="hero-title">
            Your pipeline,<br />
            <em>on demand</em>.
          </h1>
          <p className="hero-sub">
            Predictable, qualified demand. Engineered as a system, not left to referrals and the occasional lucky month.
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
          <h2 className="case-section-title">When new clients show up by luck, not by lever.</h2>
          <p className="case-body-text">
            You&rsquo;re excellent at what you do, and your clients know it. But new business shows up through referrals, repeat work, and good fortune. You can&rsquo;t scale on good fortune. When you need more clients, there&rsquo;s no lever to pull. The Growth Engine is that lever.
          </p>
        </div>
      </section>

      {/* What It Is + Methodology */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">What It Is</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)' }}>A complete acquisition system.</h2>
          <p className="case-body-text" style={{ maxWidth: '760px', marginBottom: '72px' }}>
            We find exactly who your best clients are, reach them where their attention already lives, and build the pipeline that turns strangers into booked calls. On repeat.
          </p>

          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Precision Targeting</h3>
              <p className="case-approach-desc">
                We define your single ideal client in forensic detail: who they are, what they want, and what stops them. This is targeting, not guesswork. Every dollar spent after this works harder because of it.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">Omnipresence</h3>
              <p className="case-approach-desc">
                We make sure the right person sees you everywhere they look, until you&rsquo;re not <em>a</em> choice but <em>the</em> obvious one.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">High-Intent Lead Generation</h3>
              <p className="case-approach-desc">
                The offers and campaigns that turn attention into qualified leads who already know they need you. Not tire-kickers.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">Capture &amp; Compound</h3>
              <p className="case-approach-desc">
                Follow-up, nurture, and a referral system that turns every new client into the next. The engine compounds instead of resetting to zero each month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator placeholder */}
      <section className="case-body-section">
        <div className="case-body-inner">
          <p className="case-section-label">The Pipeline Calculator</p>
          <h2 className="case-section-title">See it on your numbers.</h2>
          <div className="calc-placeholder">
            <p className="calc-placeholder-headline">
              A live model. Drag your ad spend, conversion rates, and deal size to see exactly how the engine translates investment into pipeline.
            </p>
            <p className="calc-placeholder-status">Coming next</p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">Proof</p>
          <h2 className="case-section-title">$14.5M in qualified pipeline.</h2>
          <p className="case-body-text">
            Balance Catamarans had everything a buyer could want: 15 years in business and 80+ yachts built. But newer, lesser-known competitors were winning the recognition, and there was no predictable system bringing in qualified inquiries. Marketing leaned on expensive magazine placements with no measurable return. We built a fully measurable digital acquisition system from the ground up, and generated $14.5M in qualified pipeline.
          </p>
          <a href="/client-success/balance-catamarans" className="case-body-link">
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
          If predictable demand is the missing piece, we&rsquo;d love to hear from you.
        </p>
        <a href="/apply" className="btn-primary">
          Apply to Work Together
        </a>
      </section>
    </>
  )
}
