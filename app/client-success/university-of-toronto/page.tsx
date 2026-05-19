import ThemeToggle from '../../components/ThemeToggle'

export default function UniversityOfToronto() {
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
            <span>University of Toronto</span>
          </div>
          <p className="case-engine-label">The Intelligence Engine</p>
          <h1 className="case-title">
            No solution existed.<br />
            <em style={{ color: 'var(--gold)' }}>So we built one.</em>
          </h1>
          <p className="case-subtitle">
            50 surgeries a day. A principal ophthalmologist who needed to stay focused on the patient.
            Custom software built from scratch when the market had no answer.
          </p>

          {/* Stats bar */}
          <div className="case-stats-bar">
            <div className="case-stat">
              <span className="case-stat-number">50/day</span>
              <span className="case-stat-label">Cataract Surgeries</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">4</span>
              <span className="case-stat-label">Operating Rooms</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">0</span>
              <span className="case-stat-label">External Access Points</span>
            </div>
            <div className="case-stat-divider" />
            <div className="case-stat">
              <span className="case-stat-number">PHIPA</span>
              <span className="case-stat-label">Compliant</span>
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
              <p className="case-profile-value">University of Toronto, Department of Ophthalmology</p>
            </div>
            <div>
              <p className="case-profile-label">Background</p>
              <p className="case-profile-value">Kensington Eye Institute · One of Canada's top ophthalmology centres</p>
            </div>
            <div>
              <p className="case-profile-label">Type</p>
              <p className="case-profile-value">Custom Software Development</p>
            </div>
            <div>
              <p className="case-profile-label">Year</p>
              <p className="case-profile-value">2014</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="case-body-section">
        <div className="case-body-inner" style={{ maxWidth: '760px' }}>
          <p className="case-section-label">The Challenge</p>
          <h2 className="case-section-title">50 surgeries a day. No room for error.</h2>
          <p className="case-body-text">
            The Kensington Eye Institute, affiliated with the University of Toronto and one of Canada's top
            ophthalmology centres, was running four operating rooms simultaneously, performing up to 50
            cataract surgeries per day. At the centre of it all was the principal ophthalmologist: the senior
            surgeon responsible for both operating on patients and training the residents.
          </p>
          <p className="case-body-text">
            No software on the market could track exactly what this environment needed. Off-the-shelf solutions
            were built for generic clinical workflows, not the specific data points required for resident training
            and surgical case logging. The options were: pay for an enterprise system that didn't fit, or build
            something that did.
          </p>
          <p className="case-body-text">
            The second challenge was focus. When a principal surgeon is responsible for a patient on the table,
            their attention cannot be split. Every minute spent wrestling with software is a minute not spent
            taking care of the patient.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="case-body-section" style={{ background: 'var(--grey-200)' }}>
        <div className="case-body-inner">
          <p className="case-section-label">Our Approach</p>
          <h2 className="case-section-title" style={{ color: 'var(--grey-900)' }}>Map the workflow. Then build around it.</h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '72px' }}>
            The goal was a tool that felt invisible — one that made documentation effortless so the people
            using it could keep their focus where it belonged: on the patient.
          </p>

          <div className="case-approach-grid">
            <div className="case-approach-card">
              <p className="case-approach-number">01</p>
              <h3 className="case-approach-title">Requirements Identification</h3>
              <p className="case-approach-desc">
                Before writing a single line of code, we mapped the full clinical workflow. What did the
                principal ophthalmologist need to track? What did the resident need to log? What was the
                most logical sequence from pre-op to post-op so the user never had to go backwards through
                the system? The requirements came from the people doing the work, not assumptions.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">02</p>
              <h3 className="case-approach-title">Security as a Non-Negotiable</h3>
              <p className="case-approach-desc">
                Patient health information is among the most sensitive data that exists. Security was designed
                into the software from day one, not patched in later. The system was deployed exclusively on
                a local network, protected by firewalls, with zero external access points. Every measure was
                taken to ensure patient records could not be accessed, intercepted, or compromised.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">03</p>
              <h3 className="case-approach-title">Iterative Development with Clinical Feedback</h3>
              <p className="case-approach-desc">
                We deployed a standard software development lifecycle with continuous feedback loops:
                establish requirements, build version one, gather feedback, deliver version two, obtain
                further feedback, deploy to live environment. This wasn't a one-size-fits-all solution. It
                was shaped by the people using it in the operating room. The result was a tool that fit the
                real workflow, not a theoretical one.
              </p>
            </div>
            <div className="case-approach-card">
              <p className="case-approach-number">04</p>
              <h3 className="case-approach-title">Built to Disappear</h3>
              <p className="case-approach-desc">
                The best software disappears into the workflow. Nobody talks about it. Nobody complains
                about it. The job gets done, the patient is safe, and the surgeon never has to think twice.
                Every design decision was made with that standard in mind — if it added friction, it didn't
                make the cut.
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
            The surgeon stays<br />
            <em style={{ color: 'var(--gold)' }}>in the room.</em>
          </h2>
          <p className="case-body-text" style={{ maxWidth: '680px', marginBottom: '64px' }}>
            The principal ophthalmologist could walk into the OR and stay focused on the patient and the
            resident beside them. The resident could log their cases in a structured system designed for
            their training. The software did its job by staying out of the way.
          </p>
          <div className="case-results-grid">
            <div className="case-result-item">
              <span className="case-result-number">Custom</span>
              <span className="case-result-label">Built from Zero</span>
              <p className="case-result-desc">
                Fully custom software built from scratch when no market solution existed or could meet the clinic's requirements.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">PHIPA</span>
              <span className="case-result-label">Medical-Grade Security</span>
              <p className="case-result-desc">
                Local network deployment, firewall-protected, zero external access. Full patient data protection and compliance.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">100%</span>
              <span className="case-result-label">Surgeon Focus Restored</span>
              <p className="case-result-desc">
                The principal ophthalmologist freed entirely from administrative burden to focus on surgery and resident training.
              </p>
            </div>
            <div className="case-result-item">
              <span className="case-result-number">Live</span>
              <span className="case-result-label">Deployed and Running</span>
              <p className="case-result-desc">
                Resident ophthalmologists gained a structured digital system to log and track their cases as they learned and improved.
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
