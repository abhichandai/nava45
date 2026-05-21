import ThemeToggle from '../components/ThemeToggle'
import Link from 'next/link'

const group1 = [
  {
    slug: 'adam-leipzig',
    engine: 'The Magnetic Content Engine',
    headline: '327% audience growth. Hollywood producer.',
    description: 'A world-class creator with stalled growth and no repeatable system. We rebuilt the strategy from audience intelligence up — and tripled his hook retention rate in the process.',
    client: 'Adam Leipzig',
    stat: '327%',
    statLabel: 'Audience Growth',
    live: true,
  },
  {
    slug: 'balance-catamarans',
    engine: 'The Growth Engine',
    headline: '$14.5M in qualified pipeline.',
    description: 'A high-end luxury catamaran brand with no predictable way to bring in new clients. We built the full digital acquisition system from scratch.',
    client: 'Balance Catamarans',
    stat: '$14.5M',
    statLabel: 'Qualified Pipeline',
    live: true,
  },
  {
    slug: 'quit-by-healing',
    engine: 'The Magnetic Content Engine',
    headline: '185K TikTok followers. Built from scratch.',
    description: "A men's self-development brand built entirely from content. No brand, no audience, no product. We built every piece from zero.",
    client: 'Quit by Healing',
    stat: '185K',
    statLabel: 'TikTok Followers',
    live: true,
  },
  {
    slug: 'dominique-leipzig',
    engine: 'The Magnetic Content Engine',
    headline: 'From minimal impressions to 2,700 subscribers.',
    description: "A LinkedIn presence that wasn't reaching the right people. We cracked the algorithm, built the system, and gave Dominique a direct owned channel to her ideal clients.",
    client: 'Dominique Leipzig',
    stat: '2.7K',
    statLabel: 'Newsletter Subscribers',
    live: true,
  },
  {
    slug: 'ikario',
    engine: 'The Growth Engine',
    headline: 'Coming soon.',
    description: 'This case study is being prepared.',
    client: 'Ikario',
    stat: '',
    statLabel: '',
    live: false,
  },
  {
    slug: 'fluid-social',
    engine: 'The Magnetic Content Engine',
    headline: 'Coming soon.',
    description: 'This case study is being prepared.',
    client: 'Fluid Social',
    stat: '',
    statLabel: '',
    live: false,
  },
]

const group2 = [
  {
    slug: 'university-of-toronto',
    engine: 'The Intelligence Engine',
    headline: 'No solution existed. So we built one.',
    description: "Resident ophthalmologists needed a training tool that didn't exist. We built it, secured it to medical-grade standards, and deployed it.",
    client: 'University of Toronto',
    stat: 'PHIPA',
    statLabel: 'Compliant',
    live: true,
  },
  {
    slug: 'kensington-cancer-screening',
    engine: 'The Intelligence Engine',
    headline: 'From paper to digital.',
    description: "One of Canada's top cancer screening facilities was running entirely on paper. We built the custom EMR that digitised their entire patient journey and secured their government funding.",
    client: 'Kensington Cancer Screening Clinic',
    stat: 'Funded',
    statLabel: 'Ministry of Health',
    live: true,
  },
  {
    slug: 'olympus-welch-allyn',
    engine: 'The Intelligence Engine',
    headline: 'Global medical systems integration.',
    description: 'Three international medical systems. Three different companies. None of them connected. We unified them so the anesthesiologist could focus entirely on the patient.',
    client: 'Olympus & Welch Allyn',
    stat: '3',
    statLabel: 'Systems Integrated',
    live: true,
  },
]

const group3 = [
  {
    slug: 'mgsd',
    engine: 'The Magnetic Content Engine',
    headline: '$8K revenue from the first-ever course launch.',
    description: 'No product. No strategy. Just 30 conversations with the audience — and the insight that built everything else.',
    client: 'MGSD',
    stat: '$8K',
    statLabel: 'First Launch Revenue',
    live: true,
  },
  {
    slug: 'focus-and-action',
    engine: 'The Magnetic Content Engine',
    headline: '$20K launch from a stale customer list.',
    description: 'One survey. One sentence buried in 90+ responses. The insight that turned a dormant audience into $20K in revenue.',
    client: 'Focus & Action',
    stat: '$20K',
    statLabel: 'Revenue Generated',
    live: true,
  },
  {
    slug: 'content-blueprint',
    engine: 'The Magnetic Content Engine',
    headline: '$13K in two weeks with zero ad spend.',
    description: 'No budget. No time. Company dissolving at year end. Three podcast episodes replaced an entire launch campaign.',
    client: 'Content Blueprint',
    stat: '$13K',
    statLabel: 'Revenue in 2 Weeks',
    live: true,
  },
]

function CaseStudyCard({ cs }: { cs: typeof group1[0] }) {
  if (cs.live) {
    return (
      <Link href={`/client-success/${cs.slug}`} className="cs-card cs-card--live">
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
    )
  }
  return (
    <div className="cs-card cs-card--soon">
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
}

export default function ClientSuccess() {
  return (
    <>
      <nav>
        <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <ThemeToggle />
          <a href="/#contact" className="nav-cta">Apply to Work Together</a>
        </div>
      </nav>

      <section className="cs-header">
        <div className="hero-bg" />
        <div className="cs-header-inner">
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

      {/* Group 1 */}
      <section className="cs-grid-section">
        <div className="cs-grid-inner">
          <div style={{ marginBottom: '48px' }}>
            <p className="section-label" style={{ marginBottom: '8px' }}>01</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.2 }}>
              Content, Audience Growth & Lead Generation
            </h2>
          </div>
          <div className="cs-grid">
            {group1.map((cs) => <CaseStudyCard key={cs.slug} cs={cs} />)}
          </div>
        </div>
      </section>

      {/* Group 2 */}
      <section className="cs-grid-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="cs-grid-inner">
          <div style={{ marginBottom: '48px' }}>
            <p className="section-label" style={{ marginBottom: '8px' }}>02</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.2 }}>
              Software, Automations & Tech
            </h2>
          </div>
          <div className="cs-grid">
            {group2.map((cs) => <CaseStudyCard key={cs.slug} cs={cs} />)}
          </div>
        </div>
      </section>

      {/* Group 3 */}
      <section className="cs-grid-section">
        <div className="cs-grid-inner">
          <div style={{ marginBottom: '48px' }}>
            <p className="section-label" style={{ marginBottom: '8px' }}>03</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.2 }}>
              Course Launches
            </h2>
          </div>
          <div className="cs-grid">
            {group3.map((cs) => <CaseStudyCard key={cs.slug} cs={cs} />)}
          </div>
        </div>
      </section>

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

      <footer className="site-footer">
        <span className="footer-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></span>
        <span className="footer-copy">&copy; 2025 Nava45. All rights reserved.</span>
      </footer>
    </>
  )
}
