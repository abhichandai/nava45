import ThemeToggle from '../../components/ThemeToggle'

export default function BalanceCatamarans() {
  return (
    <>
      {/* Nav */}
      <nav>
        <a href="/" className="nav-logo">Nava<span style={{color:'var(--gold)'}}>45</span></a>
        <ThemeToggle />
      </nav>

      {/* Hero */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="section-label" style={{ justifyContent: 'center' }}>The Growth Engine</p>
          <h1 className="hero-title animate-fade-up">
            Lead generation for a<br />
            <em>15-year luxury</em><br />
            catamarans brand.
          </h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '24px' }}>
            Balance Catamarans · YouTube, Google & Meta Ads · 2024–Present
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ background: 'var(--bg-alt)', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-label">Highlights</p>
          <div className="results-grid">
            <div className="results-stat">
              <span className="results-number">120%</span>
              <span className="results-label">Website traffic increase<br />(21K to 46K users)</span>
            </div>
            <div className="results-stat">
              <span className="results-number">84</span>
              <span className="results-label">High-intent newsletter &<br />brochure sign-ups</span>
            </div>
            <div className="results-stat">
              <span className="results-number">9</span>
              <span className="results-label">Financially qualified leads<br />($1M–$4M+ budgets)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section style={{ background: 'var(--bg)', padding: '120px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="section-label">The Challenge</p>
          <h2 className="who-headline">A legacy brand with limited digital presence.</h2>
          <p className="who-body" style={{ marginTop: '32px' }}>
            Balance Catamarans had everything a boat buyer could want — 15 years in business and 80+ yachts built. But newer, lesser-known competitors were getting more recognition. The brand awareness gap was costing them leads they should have already had.
          </p>
          <p className="who-body">
            Beyond visibility, they had no predictable way to bring in qualified inquiries. Their sales cycle runs 4 to 12 months, but there was no system to consistently fill the top of that funnel. Marketing relied heavily on traditional channels like boat magazines — expensive, with no measurable return.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section style={{ background: 'var(--bg-alt)', padding: '120px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="section-label">Our Approach</p>
          <h2 className="who-headline" style={{ marginBottom: '64px' }}>Strategy first. Then execution.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div className="work-card">
              <p className="work-engine-label">Phase 1</p>
              <h3 className="work-title">Brand Lift via Message-to-Market Research</h3>
              <p className="work-desc">Before running a single ad, we conducted deep audience research — reviewing 20+ interview videos with actual yacht owners to build dual Ideal Customer Profiles: the performance-focused husband and the comfort-focused wife. From that research, we developed and tested approximately 200 messages across test audiences targeting the top 10–20% of US household income earners. This identified 5 winning ad angles. We doubled down on the top two to drive sustained top-of-funnel awareness.</p>
            </div>
            <div className="work-card">
              <p className="work-engine-label">Phase 2</p>
              <h3 className="work-title">Omnipresence & Retargeting</h3>
              <p className="work-desc">Most boat prospects aren&apos;t ready to buy on first contact. We implemented an Omnipresence strategy — retargeting all site visitors with Balance&apos;s best-performing organic content. No hard sell. Just consistent, low-pressure brand presence to stay top-of-mind during the long consideration cycle. Visitors who engaged with specific boat model pages were then served model-relevant content and driven back to configurator pages.</p>
            </div>
            <div className="work-card">
              <p className="work-engine-label">Phase 3</p>
              <h3 className="work-title">High-Intent Lead Generation</h3>
              <p className="work-desc">Only the top 20–25% of website visitors by time-on-page were shown lead capture ads — newsletter sign-ups and model brochure downloads. The filter was intentional: someone downloading technical specifications for a specific catamaran model is not a casual browser. In parallel, Google Ads captured bottom-of-funnel intent by routing searches like &quot;catamaran pricing&quot; directly to a sales call booking page, bypassing the nurture sequence for prospects who were ready to talk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ background: 'var(--bg)', padding: '120px 60px', backgroundImage: 'radial-gradient(ellipse at 2% 0%, var(--gold-100) 0%, transparent 45%), radial-gradient(ellipse at 98% 100%, var(--gold-50) 0%, transparent 45%)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p className="section-label">The Results</p>
          <h2 className="who-headline" style={{ marginBottom: '16px' }}>The numbers speak for themselves.</h2>
          <p className="who-body" style={{ marginBottom: '56px' }}>
            For a multi-million dollar luxury product, financial qualification is everything. Most buyers want it; far fewer can afford it. Our funnel was built to surface the rare, serious buyers — not inflate a lead count. The 9 leads generated represent potential revenue of $15M to $20M+.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { label: 'Website Traffic Growth', stat: '21K → 46K', detail: '167% increase in website traffic, with 44,000 net new visitors.' },
              { label: 'Lead Sign-ups', stat: '84', detail: 'Newsletter and brochure downloads from highly qualified prospects.' },
              { label: 'Financially Qualified Leads', stat: '9', detail: 'Leads with declared budgets from $1M to $4M+.' },
              { label: 'YouTube Audience Growth', stat: '6K → 9K', detail: 'Subscriber growth facilitated through YouTube ad campaigns.' },
            ].map(({ label, stat, detail }) => (
              <div key={label} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', padding: '32px 40px', background: 'var(--bg-alt)', borderTop: '2px solid var(--gold-200)' }}>
                <div>
                  <p className="work-engine-label" style={{ marginBottom: '8px' }}>{label}</p>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{stat}</p>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.8 }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section">
        <h2 className="contact-title">
          Want results<br />
          <em style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--gold)' }}>like these?</em>
        </h2>
        <p className="contact-sub">If you&apos;re as obsessed with excellence as we are, we&apos;d love to hear from you.</p>
        <a href="/#contact" className="btn-primary">Apply to Work Together</a>
      </section>

      {/* Footer */}
      <footer>
        <p className="footer-text">© 2026 Nava45</p>
        <p className="footer-text" style={{ letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
          Proudly Canadian <img src="/canada-flag.svg" alt="Canada" style={{ height: '14px', width: 'auto', display: 'inline-block' }} /> · Serving Clients Globally
        </p>
      </footer>
    </>
  )
}
