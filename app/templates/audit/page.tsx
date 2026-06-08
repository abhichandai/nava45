'use client'
import { useState, useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────────────────────────
   AUDIT TEMPLATE — Adam Leipzig (Example Data)
   Replace the `audit` object below with real prospect data.
   ─────────────────────────────────────────────────────────────────────────── */

const audit = {
  client: {
    name: 'Adam Leipzig',
    handle: '@adamleipzig',
    platform: 'Instagram',
    title: 'Hollywood Producer · CEO · Author',
    avatarUrl: '', // leave empty for initials fallback
    preparedDate: 'June 2026',
  },
  overallScore: 62,
  profile: [
    {
      element: 'Name & Handle',
      status: 'strong' as const,
      observation:
        'Strong personal brand authority. Hollywood Producer, CEO, Author — immediately establishes credibility.',
    },
    {
      element: 'Bio',
      status: 'needs-work' as const,
      observation:
        'Clear credentials and book download CTA. Missing an authority hook like "40 years in Hollywood" above the fold.',
    },
    {
      element: 'Link',
      status: 'weak' as const,
      observation:
        'Linktree adds a friction step. A direct link to the book or key landing page would convert better.',
    },
    {
      element: 'Highlights',
      status: 'strong' as const,
      observation:
        '7 well-organized categories. Easy to navigate. Consistent with overall brand.',
    },
  ],
  contentPillars: [
    {
      name: 'Value Content',
      status: 'present' as const,
      score: 78,
      detail:
        'Hot takes and opinion pieces perform best. Bold, culturally relevant, on-brand. This is your strongest content type right now.',
      recommendations: [
        'Continue doubling down on bold opinion content',
        'Test carousel versions of your strongest takes for more saves',
      ],
    },
    {
      name: 'Growth Content',
      status: 'underused' as const,
      score: 35,
      detail:
        'Recent events and cultural commentary reels get 10×–20× more views than standard posts. Currently occasional — needs to be intentional and weekly.',
      recommendations: [
        'Schedule one recent-event reel every week',
        'Connect trending topics to your expertise — arrive with authority, not as a trend-chaser',
      ],
    },
    {
      name: 'Connection Content',
      status: 'missing' as const,
      score: 12,
      detail:
        'Quote carousels underperformed. Behind-the-scenes moments, personal stories, and real candid content would fill this gap and build lasting audience loyalty.',
      recommendations: [
        'Replace quote carousels with personal story content',
        'Post 3–4 stories per week consistently',
        'Show the human behind the brand — workshop moments, writing sessions, real talk',
      ],
    },
  ],
  performance: {
    working: [
      'Opinion and hot-take content resonating strongly',
      'Recent event reels driving outsized reach',
      'Verified badge + clear bio credentials',
      'Strong authority positioning in handle and name',
    ],
    notWorking: [
      'Abstract quote carousels falling flat',
      'Linktree adding friction to conversions',
      'Missing authority hook in bio above the fold',
      'Inconsistent posting cadence on Stories',
    ],
    actions: [
      'Schedule one recent-event reel every week',
      'Post 3–4 stories per week consistently',
      'Swap Linktree for a direct high-value landing page link',
      'Add a punchy authority hook to the first line of your bio',
    ],
  },
  opportunities: [
    {
      title: 'Engineer for DM Shares',
      impact: 'high' as const,
      detail:
        'DM shares are now weighted 3–5× higher than likes for Reels distribution. Your Hollywood takes are naturally forward-worthy. End each post with a share prompt like "send this to a creative who needs to hear it."',
    },
    {
      title: 'Use Trial Reels — Risk-Free Testing',
      impact: 'high' as const,
      detail:
        'Trial Reels show content to non-followers first without publishing to your grid. Test workshop clips, behind-the-scenes moments, and book launch content before committing to the main feed.',
    },
    {
      title: 'Caption Keywords Over Hashtags',
      impact: 'medium' as const,
      detail:
        'Instagram now uses caption keywords — not hashtag follows — for search discovery. Load captions with relevant terms: "Hollywood producer," "creative career," "purpose-driven life." Max 3–5 hashtags only.',
    },
    {
      title: 'Insider Knowledge as Carousel Playbooks',
      impact: 'high' as const,
      detail:
        'Deep-dive carousels drive more saves than any other format — the metric Instagram rewards most. Topics like "5 things I learned producing Dead Poets Society" or "How Hollywood decides what gets made" would rack up saves and signal extreme value to the algorithm.',
    },
    {
      title: 'Raw Beats Produced',
      impact: 'medium' as const,
      detail:
        'Instagram is deprioritizing over-polished content as AI floods the platform. A selfie-cam 60-second take from your writer\'s workshop would likely outperform any studio-quality Reel. Your credibility IS the production value.',
    },
    {
      title: 'Launch a Broadcast Channel',
      impact: 'medium' as const,
      detail:
        'Instagram is growing its private spaces — DMs and Broadcast Channels. A channel lets book buyers and fans opt into a closer relationship, separate from the public feed. Ideal for post-launch momentum and direct community building.',
    },
  ],
}

/* ─── SCORE RING ─────────────────────────────────────────────────────────── */

function ScoreRing({ score, size = 160, stroke = 10, label }: { score: number; size?: number; stroke?: number; label?: string }) {
  const [rendered, setRendered] = useState(0)
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (rendered / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => setRendered(score), 400)
    return () => clearTimeout(timer)
  }, [score])

  const color = score >= 70 ? '#3BB06C' : score >= 40 ? '#C9A84C' : '#D4513A'

  return (
    <div className="audit-score-ring">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="var(--border)" strokeWidth={stroke}
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
      </svg>
      <div className="audit-score-ring-label">
        <span className="audit-score-ring-number" style={{ color }}>{rendered}</span>
        <span className="audit-score-ring-out">/100</span>
        {label && <span className="audit-score-ring-text">{label}</span>}
      </div>
    </div>
  )
}

/* ─── MINI SCORE BAR ─────────────────────────────────────────────────────── */

function ScoreBar({ score }: { score: number }) {
  const [rendered, setRendered] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setRendered(score), 600)
    return () => clearTimeout(timer)
  }, [score])
  const color = score >= 70 ? '#3BB06C' : score >= 40 ? '#C9A84C' : '#D4513A'
  return (
    <div className="audit-score-bar-track">
      <div
        className="audit-score-bar-fill"
        style={{ width: `${rendered}%`, background: color, transition: 'width 1s cubic-bezier(0.4,0,0.2,1)' }}
      />
    </div>
  )
}

/* ─── STATUS BADGE ───────────────────────────────────────────────────────── */

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; className: string }> = {
    strong: { label: 'Strong', className: 'audit-badge--green' },
    present: { label: 'Present', className: 'audit-badge--green' },
    'needs-work': { label: 'Needs Work', className: 'audit-badge--amber' },
    underused: { label: 'Underused', className: 'audit-badge--amber' },
    weak: { label: 'Weak', className: 'audit-badge--red' },
    missing: { label: 'Missing', className: 'audit-badge--red' },
  }
  const s = map[status] || { label: status, className: '' }
  return <span className={`audit-badge ${s.className}`}>{s.label}</span>
}

/* ─── IMPACT BADGE ───────────────────────────────────────────────────────── */

function ImpactBadge({ impact }: { impact: string }) {
  const cls = impact === 'high' ? 'audit-impact--high' : 'audit-impact--medium'
  return <span className={`audit-impact ${cls}`}>{impact} impact</span>
}

/* ─── SECTION OBSERVER (fade in on scroll) ───────────────────────────────── */

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`audit-fade ${visible ? 'audit-fade--in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */

export default function AuditTemplate() {
  const [expandedOpp, setExpandedOpp] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'profile', label: 'Profile' },
    { id: 'content', label: 'Content Pillars' },
    { id: 'performance', label: 'Performance' },
    { id: 'opportunities', label: 'Opportunities' },
  ]

  // Track active section on scroll
  useEffect(() => {
    const onScroll = () => {
      const ids = sections.map(s => s.id)
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = audit.client.name.split(' ').map(n => n[0]).join('')

  return (
    <div className="audit-page">
      {/* ─── Sticky section nav ─── */}
      <div className="audit-section-nav">
        <div className="audit-section-nav-inner">
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`audit-section-nav-item ${activeSection === s.id ? 'audit-section-nav-item--active' : ''}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section id="overview" className="audit-hero">
        <div className="audit-hero-inner">
          <div className="audit-hero-badge">
            <span className="audit-hero-badge-dot" />
            Performance Audit
          </div>
          <div className="audit-hero-top">
            <div className="audit-hero-left">
              <div className="audit-avatar">
                {audit.client.avatarUrl ? (
                  <img src={audit.client.avatarUrl} alt={audit.client.name} />
                ) : (
                  <span className="audit-avatar-initials">{initials}</span>
                )}
              </div>
              <div>
                <h1 className="audit-hero-name">{audit.client.name}</h1>
                <p className="audit-hero-handle">{audit.client.handle} · {audit.client.platform}</p>
                <p className="audit-hero-title">{audit.client.title}</p>
              </div>
            </div>
            <div className="audit-hero-right">
              <ScoreRing score={audit.overallScore} label="Overall Score" />
            </div>
          </div>

          {/* Score summary cards */}
          <div className="audit-summary-row">
            {audit.contentPillars.map((p, i) => (
              <FadeSection key={p.name} delay={i * 120} className="audit-summary-card">
                <div className="audit-summary-card-top">
                  <span className="audit-summary-card-label">{p.name}</span>
                  <StatusBadge status={p.status} />
                </div>
                <div className="audit-summary-card-score">{p.score}<span className="audit-summary-card-unit">/100</span></div>
                <ScoreBar score={p.score} />
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Profile Overview ─── */}
      <section id="profile" className="audit-section">
        <div className="audit-section-inner">
          <FadeSection>
            <p className="audit-label">Profile Overview</p>
            <h2 className="audit-heading">How your profile stacks up.</h2>
          </FadeSection>
          <div className="audit-profile-grid">
            {audit.profile.map((item, i) => (
              <FadeSection key={item.element} delay={i * 80} className="audit-profile-card">
                <div className="audit-profile-card-header">
                  <span className="audit-profile-card-element">{item.element}</span>
                  <StatusBadge status={item.status} />
                </div>
                <p className="audit-profile-card-obs">{item.observation}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Content Pillars ─── */}
      <section id="content" className="audit-section audit-section--alt">
        <div className="audit-section-inner">
          <FadeSection>
            <p className="audit-label">Content Framework</p>
            <h2 className="audit-heading">The three pillars of a magnetic brand.</h2>
            <p className="audit-subheading">Every dominant personal brand runs on three types of content. Here&rsquo;s where you stand.</p>
          </FadeSection>
          <div className="audit-pillars-grid">
            {audit.contentPillars.map((pillar, i) => (
              <FadeSection key={pillar.name} delay={i * 120} className="audit-pillar-card">
                <div className="audit-pillar-card-top">
                  <div className="audit-pillar-score-wrap">
                    <ScoreRing score={pillar.score} size={100} stroke={7} />
                  </div>
                  <h3 className="audit-pillar-name">{pillar.name}</h3>
                  <StatusBadge status={pillar.status} />
                </div>
                <p className="audit-pillar-detail">{pillar.detail}</p>
                <div className="audit-pillar-recs">
                  <p className="audit-pillar-recs-label">Recommendations</p>
                  {pillar.recommendations.map((rec, j) => (
                    <div key={j} className="audit-pillar-rec">
                      <span className="audit-pillar-rec-icon">→</span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Performance Analysis ─── */}
      <section id="performance" className="audit-section">
        <div className="audit-section-inner">
          <FadeSection>
            <p className="audit-label">Performance Analysis</p>
            <h2 className="audit-heading">What&rsquo;s working. What isn&rsquo;t. What to do next.</h2>
          </FadeSection>
          <div className="audit-perf-grid">
            <FadeSection delay={0} className="audit-perf-col audit-perf-col--green">
              <div className="audit-perf-col-header">
                <span className="audit-perf-dot audit-perf-dot--green" />
                <h3>Working Well</h3>
              </div>
              {audit.performance.working.map((item, i) => (
                <div key={i} className="audit-perf-item">{item}</div>
              ))}
            </FadeSection>
            <FadeSection delay={120} className="audit-perf-col audit-perf-col--red">
              <div className="audit-perf-col-header">
                <span className="audit-perf-dot audit-perf-dot--red" />
                <h3>Needs Attention</h3>
              </div>
              {audit.performance.notWorking.map((item, i) => (
                <div key={i} className="audit-perf-item">{item}</div>
              ))}
            </FadeSection>
            <FadeSection delay={240} className="audit-perf-col audit-perf-col--gold">
              <div className="audit-perf-col-header">
                <span className="audit-perf-dot audit-perf-dot--gold" />
                <h3>Recommended Actions</h3>
              </div>
              {audit.performance.actions.map((item, i) => (
                <div key={i} className="audit-perf-item">{item}</div>
              ))}
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ─── Growth Opportunities ─── */}
      <section id="opportunities" className="audit-section audit-section--alt">
        <div className="audit-section-inner">
          <FadeSection>
            <p className="audit-label">Growth Opportunities</p>
            <h2 className="audit-heading">Untapped levers for your next stage of growth.</h2>
          </FadeSection>
          <div className="audit-opp-list">
            {audit.opportunities.map((opp, i) => {
              const isOpen = expandedOpp === i
              return (
                <FadeSection key={i} delay={i * 80}>
                  <button
                    className={`audit-opp-card ${isOpen ? 'audit-opp-card--open' : ''}`}
                    onClick={() => setExpandedOpp(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div className="audit-opp-card-header">
                      <div className="audit-opp-card-left">
                        <span className="audit-opp-number">{String(i + 1).padStart(2, '0')}</span>
                        <span className="audit-opp-title">{opp.title}</span>
                      </div>
                      <div className="audit-opp-card-right">
                        <ImpactBadge impact={opp.impact} />
                        <svg
                          className={`audit-opp-chevron ${isOpen ? 'audit-opp-chevron--open' : ''}`}
                          width="20" height="20" viewBox="0 0 20 20" fill="none"
                        >
                          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className={`audit-opp-body ${isOpen ? 'audit-opp-body--open' : ''}`}>
                      <p>{opp.detail}</p>
                    </div>
                  </button>
                </FadeSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="audit-cta-section">
        <FadeSection>
          <div className="audit-cta-inner">
            <h2 className="audit-cta-title">
              Ready to turn this into<br />
              <em>a growth engine?</em>
            </h2>
            <p className="audit-cta-sub">
              This audit is just the starting point. We build the systems that make your brand impossible to ignore.
            </p>
            <a href="/apply" className="btn-primary">Apply to Work Together</a>
          </div>
        </FadeSection>
      </section>

      {/* ─── Footer ─── */}
      <footer className="audit-footer">
        <p className="audit-footer-text">
          Prepared by <a href="https://nava45.com" className="audit-footer-link">Nava45</a> · {audit.client.preparedDate}
        </p>
      </footer>
    </div>
  )
}
