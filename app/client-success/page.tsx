import ThemeToggle from '../components/ThemeToggle'

export default function ClientSuccess() {
  return (
    <>
      {/* Nav */}
      <nav>
        <a href="/" className="nav-logo">Nava<span style={{color:'var(--gold)'}}>45</span></a>
        <ThemeToggle />
      </nav>

      {/* Page Hero */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="section-label" style={{ justifyContent: 'center' }}>Client Success</p>
          <h1 className="hero-title animate-fade-up">
            Results that<br />
            <em>speak for themselves.</em>
          </h1>
        </div>
      </section>

      {/* Case Study 1 — Balance Catamarans */}
      <section style={{ background: 'var(--bg)', padding: '120px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="work-engine-label">The Growth Engine</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.1, marginBottom: '24px' }}>
                $14.5M in qualified pipeline.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '24px' }}>
                Balance Catamarans had no predictable way to bring in new clients. As a high-end luxury brand, their sales relied entirely on word of mouth — great for reputation, impossible to scale.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '24px' }}>
                We built a full digital acquisition system from scratch — identifying the right audience, building the content engine to reach them, and designing the pipeline to convert interest into qualified conversations.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                The result: $14.5M in qualified pipeline, with a predictable, repeatable system they own.
              </p>
              <p className="work-client" style={{ marginTop: '40px' }}>Balance Catamarans</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="work-card">
                <p className="work-engine-label">Result</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>$14.5M</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '8px' }}>Qualified pipeline generated</p>
              </div>
              <div className="work-card">
                <p className="work-engine-label">Industry</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 400 }}>Luxury Marine / High-ticket Sales</p>
              </div>
              <div className="work-card">
                <p className="work-engine-label">Engine Used</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 400 }}>The Growth Engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 — Quit by Healing */}
      <section style={{ background: 'var(--bg-alt)', padding: '120px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="work-engine-label">The Magnetic Content Engine</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="work-card">
                <p className="work-engine-label">Result</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>226K</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '8px' }}>TikTok followers built from scratch</p>
              </div>
              <div className="work-card">
                <p className="work-engine-label">Also</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>25K</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '8px' }}>YouTube subscribers</p>
              </div>
              <div className="work-card">
                <p className="work-engine-label">Industry</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 400 }}>Men&apos;s Self-Development</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.1, marginBottom: '24px' }}>
                226K on TikTok. 25K on YouTube. Built from scratch.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '24px' }}>
                Quit by Healing is a men&apos;s self-development brand built entirely on content. There was no existing audience — just a powerful message and a market that needed to hear it.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '24px' }}>
                We identified the audience, reverse-engineered what they were searching for, and built a content engine designed to attract, engage, and convert — across TikTok and YouTube simultaneously.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                The brand monetized through the audience we built. From zero to 226K followers and 25K subscribers, with a loyal community and a revenue engine underneath it.
              </p>
              <p className="work-client" style={{ marginTop: '40px' }}>Quit by Healing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3 — University of Toronto */}
      <section style={{ background: 'var(--bg)', padding: '120px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className="work-engine-label">The Intelligence Engine</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.1, marginBottom: '24px' }}>
                Custom software. Medical-grade. University of Toronto.
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '24px' }}>
                Resident ophthalmologists at the University of Toronto needed a specialized training tool that simply didn&apos;t exist anywhere on the market. Off-the-shelf software wasn&apos;t built for their workflow, and building it internally wasn&apos;t feasible.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '24px' }}>
                We designed, built, and deployed a fully custom solution — secured to medical-grade standards and integrated into their training program.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.9 }}>
                The tool is now actively used in residency training, giving ophthalmologists a purpose-built environment that didn&apos;t exist before we built it.
              </p>
              <p className="work-client" style={{ marginTop: '40px' }}>University of Toronto, Department of Ophthalmology</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="work-card">
                <p className="work-engine-label">Deliverable</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 400, lineHeight: 1.7 }}>Custom-built, medical-grade training software</p>
              </div>
              <div className="work-card">
                <p className="work-engine-label">Industry</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 400 }}>Medical Education / Healthcare</p>
              </div>
              <div className="work-card">
                <p className="work-engine-label">Engine Used</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 400 }}>The Intelligence Engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section">
        <h2 className="contact-title">
          Ready to be our<br />
          <em style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
            next success story?
          </em>
        </h2>
        <p className="contact-sub">
          If you&apos;re as obsessed with excellence as we are, we&apos;d love to hear from you.
        </p>
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
