import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Intelligence Engine · Nava45',
  description: 'Custom AI automation, built and deployed around how you already work. Coming soon.',
}

export default function IntelligenceEnginePage() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="section-label" style={{ marginBottom: '32px', justifyContent: 'center' }}>The Intelligence Engine</p>
        <h1 className="hero-title">
          Coming <em>soon</em>.
        </h1>
        <p className="hero-sub">
          We&rsquo;re putting this one together properly. In the meantime, see the work it powers, or talk to us about it directly.
        </p>
        <div className="stub-cta-row">
          <a href="/apply" className="btn-primary">Apply to Work Together</a>
          <a href="/client-success" className="stub-text-link">See the work <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
