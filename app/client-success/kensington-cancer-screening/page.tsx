
export default function KensingtonCancerScreening() {
  return (
    <>

      <section className="case-hero">
        <div className="hero-bg" />
        <div className="case-hero-inner" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="case-breadcrumb">
            <a href="/client-success" className="case-breadcrumb-link">Client Success</a>
            <span className="case-breadcrumb-sep"> / </span>
            <span>Kensington Cancer Screening Clinic</span>
          </div>
          <p className="case-engine-label">The Intelligence Engine</p>
          <h1 className="case-title">
            From paper<br />
            <em style={{ color: 'var(--gold)' }}>to digital.</em>
          </h1>
          <p className="case-subtitle">
            One of Canada's top cancer screening facilities was running entirely on paper. We built
            the custom EMR system that digitised their entire patient journey — and secured their
            government funding.
          </p>
          <div className="case-stats-bar">
            <div className="case-stat">
              <span className="case-stat-number">Custom</span>
              <span className="case-stat-label">EMR Built from Scratch</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">100%</span>
              <span className="case-stat-label">Paper Records Migrated</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">PHIPA</span>
              <span className="case-stat-label">Compliant</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">Funded</span>
              <span className="case-stat-label">Ministry of Health</span>
            </div>
          </div>
        </div>
      </section>

      <section className="case-body-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="case-body-inner">
          <div className="case-profile">
            <div>
              <p className="case-profile-label">Client</p>
              <p className="case-profile-value">Kensington Cancer Screening Clinic</p>
            </div>
            <div>
              <p className="case-profile-label">Background</p>
              <p className="case-profile-value">One of Canada's top cancer screening facilities · Not-for-profit</p>
            </div>
            <div>
              <p className="case-profile-label">Type</p>
              <p className="case-profile-value">Custom EMR Software + Digital Transformation</p>
            </div>
            <div>
              <p className="case-profile-label">Year</p>
              <p className="case-profile-value">2013</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-body-section">
        <div className="case-body-inner" style={{ maxWidth: '760px' }}>
          <p className="case-section-label">The Challenge</p>
          <h2 className="case-section-title">Running a modern clinic on paper.</h2>
          <p className="case-body-text">
            The Kensington Cancer Screening Clinic, one of Canada's top medical facilities, had a problem
            no off-the-shelf software could solve. Every available EMR system on the market was built for
            generic clinical workflows. None matched its specific needs — tracking a patient from the moment
            they walked through the front door to the moment they left the recovery room.
          </p>
          <p className="case-body-text">
            Without a digital system, everything ran on paper. Patient records were created, updated, and
            stored manually at every stage of the clinical journey. Reporting was a manual, laborious exercise.
            There was no way to extract meaningful data, no clean audit trail, and no infrastructure to support
            the funding applications the clinic depended on as a not-for-profit organisation.
          </p>
          <p className="case-body-text">
            For a clinic of this calibre, that gap wasn't just inefficient — it was existential. Without clean
            reporting, there was no funding. Without funding, there was no clinic.
          </p>
        </div>
      </section>

      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">Our Approach</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)' }}>Talk to everyone. Build for everyone.</h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            The software had to work for three distinct groups of people, each with different needs and
            different definitions of easy to use. Before a single line of code was written, every stakeholder
            was interviewed.
          </p>
          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Stakeholder Interviews Across Every Department</h3>
              <p className="case-approach-desc">
                Front desk administrators, procedure room nurses, and recovery room nurses each had
                different needs, different pain points, and different definitions of easy to use. Before
                development commenced, every stakeholder was interviewed: what do you need to see,
                what do you need to track, where does your current process break down? The requirements
                were built from their answers.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">Building the System End to End</h3>
              <p className="case-approach-desc">
                The software followed the patient's journey in sequence: front desk entry, procedure room,
                recovery. Each stage flowed logically into the next. Nothing required the user to backtrack
                or look something up in another system. The interface was built specifically for speed and
                clarity — non-negotiable in a clinical environment.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">Security Built In, Not Bolted On</h3>
              <p className="case-approach-desc">
                The system was deployed exclusively on the clinic's local network — no external access,
                no cloud, no risk of outside exposure. Firewalls and internal access controls ensured
                patient data could only be accessed by authorised clinical staff. In an era where medical
                data breaches carry serious legal and ethical consequences, security was treated as a
                core feature, not an afterthought.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">The Migration: Paper to Digital</h3>
              <p className="case-approach-desc">
                Building the software was only half the job. Years of paper records had to be transferred
                into the new system manually. Every historical record entered individually into the new
                digital format. There was no automation available. It was done by hand, record by record,
                until the clinic's entire history existed in one place for the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-results-section">
        <div className="case-results-bg" />
        <div className="case-body-inner" style={{ position: 'relative', zIndex: 1 }}>
          <p className="case-section-label" style={{ color: 'var(--gold)' }}>The Results</p>
          <h2 className="case-section-title" style={{ marginBottom: '64px' }}>
            The software that kept<br />
            <em style={{ color: 'var(--gold)' }}>the clinic running.</em>
          </h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '64px' }}>
            For the first time, the Kensington Cancer Screening Clinic had a complete digital picture of
            its patient population. Reporting was no longer a manual exercise — the data was structured,
            extractable, and ready to use. Those reports were submitted directly to the Ministry of Health
            to secure government funding. As a not-for-profit organisation, this funding was the clinic's lifeline.
          </p>
          <div className="case-results-grid">
            <div className="case-result-item">
              <span className="case-result-number">Custom</span>
              <span className="case-result-label">Built from Zero</span>
              <p className="case-result-desc">A fully custom EMR system built from scratch when no existing software matched the clinic's end-to-end requirements.</p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">PHIPA</span>
              <span className="case-result-label">Medical-Grade Security</span>
              <p className="case-result-desc">Local network deployment, firewall-protected, zero external access. Full patient data protection and compliance.</p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">Funded</span>
              <span className="case-result-label">Government Funding Secured</span>
              <p className="case-result-desc">Clean digital reports submitted to the Ministry of Health secured the government funding the clinic depended on.</p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">2-3 yrs</span>
              <span className="case-result-label">Post-Deployment Use</span>
              <p className="case-result-desc">The system was used continuously for years after deployment, streamlining patient tracking from entry to exit.</p>
            </div>
          </div>
        </div>
      </section>

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

      <footer className="site-footer">
        <span className="footer-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></span>
        <span className="footer-copy">&copy; 2025 Nava45. All rights reserved.</span>
      </footer>
    </>
  )
}
