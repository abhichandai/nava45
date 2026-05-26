import Link from 'next/link'

const caseStudies = [
]

export default function ClientSuccess() {
  return (
    <>

      {/* Page Header */}
      <section className="cs-header">
        <div className="hero-bg" />
        <div className="cs-header-inner" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="section-label" style={{ marginBottom: '32px' }}>Client Success</p>
          <h1 className="cs-page-title">
            The work<br />
            <em style={{ color: 'var(--gold)' }}>speaks.</em>
          </h1>
          <p className="cs-page-sub">
            Every engagement is built around one question: what does success actually look like for this client?
            These are the answers.
          </p>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="cs-grid-section">
        <div className="cs-grid-inner">
          <div className="cs-grid">
            {caseStudies.map((cs) => (
              cs.live ? (
                <Link key={cs.slug} href={`/client-success/${cs.slug}`} className="cs-card cs-card--live">
                  <div className="cs-card-top">
                    <p className="cs-engine-label">{cs.engine}</p>
                    {cs.stat && (
                      <div className="cs-card-stat">
                        <span className="cs-stat-number">{cs.stat}</span>
                        <span className="cs-stat-label">{cs.statLabel}</span>
                      </div>
                    )}
                  </div>
                  <h2 className="cs-card-headline">{cs.headline}</h2>
                  <p className="cs-card-desc">{cs.description}</p>
                  <div className="cs-card-footer">
                    <span className="cs-client-name">{cs.client}</span>
                    <span className="cs-read-more">Read case study →</span>
                  </div>
                </Link>
              ) : (
                <div key={cs.slug} className="cs-card cs-card--soon">
                  <div className="cs-card-top">
                    <p className="cs-engine-label">{cs.engine}</p>
                    <span className="cs-coming-soon-badge">Coming Soon</span>
                  </div>
                  <h2 className="cs-card-headline cs-card-headline--muted">{cs.headline}</h2>
                  <p className="cs-card-desc">{cs.description}</p>
                  <div className="cs-card-footer">
                    <span className="cs-client-name">{cs.client}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cs-cta-section">
        <div className="hero-bg" />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Work With Us</p>
          <h2 className="cs-cta-headline">
            Ready to be<br />
            <em style={{ color: 'var(--gold)' }}>next?</em>
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
