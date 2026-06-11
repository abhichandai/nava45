'use client'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'next/navigation'
import { loadAudit } from '../../lib/supabase-audits'

type Rating = 'very-strong' | 'strong' | 'decent' | 'could-be-better' | 'weak' | 'missing' | ''
type PillarStatus = 'present' | 'underused' | 'missing' | ''

const RATINGS = [
  { value: 'very-strong', label: 'Very Strong' },
  { value: 'strong', label: 'Strong' },
  { value: 'decent', label: 'Decent' },
  { value: 'could-be-better', label: 'Could Be Better' },
  { value: 'weak', label: 'Weak' },
  { value: 'missing', label: 'Missing' },
]
const PILLAR_STATUSES = [
  { value: 'present', label: 'Present' },
  { value: 'underused', label: 'Underused' },
  { value: 'missing', label: 'Missing' },
]

const PROFILE_ITEMS = [
  { key: 'profilePhoto', label: 'Profile Photo' },
  { key: 'nameField', label: 'Name Field' },
  { key: 'iHelpStatement', label: '"I Help" Statement' },
  { key: 'dmCta', label: 'DM CTA' },
  { key: 'applicationLink', label: 'Application Link' },
  { key: 'pinnedPosts', label: 'Pinned Posts' },
  { key: 'blueCheck', label: 'Blue Check Mark' },
]

const CONTENT_METRICS = [
  { key: 'frequency', label: 'Frequency' },
  { key: 'tone', label: 'Tone' },
  { key: 'engagement', label: 'Engagement' },
  { key: 'contentTheme', label: 'Content Theme' },
  { key: 'format', label: 'Format' },
  { key: 'hashtagUse', label: 'Hashtag / Keyword Use' },
]

function ratingColor(r: Rating | PillarStatus): string {
  if (r === 'very-strong' || r === 'strong' || r === 'present') return '#3BB06C'
  if (r === 'decent' || r === 'could-be-better' || r === 'underused') return '#C9A84C'
  if (r === 'weak' || r === 'missing') return '#D4513A'
  return 'var(--muted)'
}

function Badge({ rating }: { rating: Rating | PillarStatus }) {
  if (!rating) return null
  const color = ratingColor(rating)
  const label = [...RATINGS, ...PILLAR_STATUSES].find(r => r.value === rating)?.label || rating
  return <span className="audit-badge" style={{ background: `${color}18`, color }}>{label}</span>
}

function ScoreRing({ score, size = 160, stroke = 10, label }: { score: number; size?: number; stroke?: number; label?: string }) {
  const [rendered, setRendered] = useState(0)
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (rendered / 100) * circumference
  useEffect(() => { const t = setTimeout(() => setRendered(score), 400); return () => clearTimeout(t) }, [score])
  const color = score >= 70 ? '#3BB06C' : score >= 40 ? '#C9A84C' : '#D4513A'
  return (
    <div className="audit-score-ring">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="var(--border)" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={stroke}
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)' }} />
      </svg>
      <div className="audit-score-ring-label">
        <span className="audit-score-ring-number" style={{ color }}>{rendered}</span>
        <span className="audit-score-ring-out">/100</span>
        {label && <span className="audit-score-ring-text">{label}</span>}
      </div>
    </div>
  )
}

function ScoreBar({ value }: { value: number }) {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(value), 600); return () => clearTimeout(t) }, [value])
  const color = value >= 70 ? '#3BB06C' : value >= 40 ? '#C9A84C' : '#D4513A'
  return (
    <div className="audit-score-bar-track">
      <div className="audit-score-bar-fill" style={{ width: `${w}%`, background: color, transition: 'width 1s cubic-bezier(0.4,0,0.2,1)' }} />
    </div>
  )
}

function FadeSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`audit-fade ${vis ? 'audit-fade--in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function overallScore(state: any): number {
  const ratingToNum = (r: string): number => {
    const m: Record<string,number> = {'very-strong':100,'strong':80,'decent':60,'could-be-better':40,'weak':20,'missing':0}
    return m[r] ?? -1
  }
  const pillarToNum = (s: string): number => {
    const m: Record<string,number> = {'present':100,'underused':50,'missing':10}
    return m[s] ?? -1
  }
  const scores: number[] = []
  if (state.profile) Object.values(state.profile).forEach((p: any) => { const n = ratingToNum(p.rating); if (n >= 0) scores.push(n) })
  if (state.contentMetrics) Object.values(state.contentMetrics).forEach((m: any) => { const n = ratingToNum(m.rating); if (n >= 0) scores.push(n) })
  if (state.contentPillars) {
    ['value','growth','connection'].forEach(k => {
      const s = state.contentPillars[k]?.status
      const n = pillarToNum(s); if (n >= 0) scores.push(n)
    })
  }
  return scores.length ? Math.round(scores.reduce((a: number,b: number) => a+b, 0) / scores.length) : 0
}

export default function AuditView() {
  const params = useParams()
  const slug = params?.slug as string
  const [state, setState] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [expandedOpp, setExpandedOpp] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    if (!slug) return
    loadAudit(slug).then(row => {
      if (row?.data) setState(row.data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [slug])

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'profile', label: 'Profile' },
    { id: 'content', label: 'Content' },
    { id: 'opportunities', label: 'Opportunities' },
  ]

  useEffect(() => {
    const onScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (loading) return (
    <div className="audit-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', paddingTop: 120 }}>
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Loading audit…</p>
    </div>
  )

  if (!state) return (
    <div className="audit-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', paddingTop: 120 }}>
      <p style={{ color: 'var(--muted)' }}>Audit not found.</p>
    </div>
  )

  const score = overallScore(state)
  const initials = state.client?.name ? state.client.name.split(' ').map((n: string) => n[0]).join('') : '?'

  const profileRatings = state.profile ? Object.values(state.profile).filter((p: any) => p.rating) : []
  const rMap: Record<string, number> = { 'very-strong': 100, 'strong': 80, 'decent': 60, 'could-be-better': 40, 'weak': 20, 'missing': 0 }
  const profileScore = profileRatings.length ? Math.round((profileRatings as any[]).reduce((s, p) => s + (rMap[p.rating] ?? 0), 0) / profileRatings.length) : 0
  const contentRatings = state.contentMetrics ? Object.values(state.contentMetrics).filter((m: any) => m.rating) : []
  const contentScore = contentRatings.length ? Math.round((contentRatings as any[]).reduce((s, m) => s + (rMap[m.rating] ?? 0), 0) / contentRatings.length) : 0

  return (
    <div className="audit-page">
      <div className="audit-section-nav">
        <div className="audit-section-nav-inner">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`}
              className={`audit-section-nav-item ${activeSection === s.id ? 'audit-section-nav-item--active' : ''}`}>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section id="overview" className="audit-hero">
        <div className="audit-hero-inner">
          <div className="audit-hero-badge"><span className="audit-hero-badge-dot" />Account Audit</div>
          <div className="audit-hero-top">
            <div className="audit-hero-left">
              <div className="audit-avatar"><span className="audit-avatar-initials">{initials}</span></div>
              <div>
                <h1 className="audit-hero-name">{state.client?.name || 'Client'}</h1>
                <p className="audit-hero-handle">{state.client?.handle} · {state.client?.platform}</p>
                <p className="audit-hero-title">{state.client?.title}</p>
              </div>
            </div>
            <div className="audit-hero-right"><ScoreRing score={score} label="Overall Score" /></div>
          </div>
          {state.profileScreenshot && (
            <div className="audit-screenshot-preview" style={{ maxWidth: `${state.screenshotScale || 60}%` }}>
              <img src={state.profileScreenshot} alt="Profile screenshot" />
            </div>
          )}
          <div className="audit-summary-row">
            <FadeSection className="audit-summary-card"><div className="audit-summary-card-top"><span className="audit-summary-card-label">Profile</span></div><div className="audit-summary-card-score">{profileScore}<span className="audit-summary-card-unit">/100</span></div><ScoreBar value={profileScore} /></FadeSection>
            <FadeSection className="audit-summary-card" delay={120}><div className="audit-summary-card-top"><span className="audit-summary-card-label">Content Strategy</span></div><div className="audit-summary-card-score">{contentScore}<span className="audit-summary-card-unit">/100</span></div><ScoreBar value={contentScore} /></FadeSection>
            <FadeSection className="audit-summary-card" delay={240}><div className="audit-summary-card-top"><span className="audit-summary-card-label">Opportunities</span></div><div className="audit-summary-card-score">{(state.opportunities || []).filter((o: any) => o.impact === 'high').length}<span className="audit-summary-card-unit"> high impact</span></div></FadeSection>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="audit-section">
        <div className="audit-section-inner">
          <FadeSection><p className="audit-label">Profile Audit</p><h2 className="audit-heading">The 7 things every profile must have.</h2></FadeSection>
          <div className="audit-profile-grid">
            {PROFILE_ITEMS.map((item, i) => {
              const data = state.profile?.[item.key]
              if (!data) return null
              return (
                <FadeSection key={item.key} delay={i * 60} className="audit-profile-card">
                  <div className="audit-profile-card-header">
                    <div className="audit-profile-card-num">{String(i+1).padStart(2,'0')}</div>
                    <span className="audit-profile-card-element">{item.label}</span>
                    <Badge rating={data.rating} />
                  </div>
                  {data.observation && <div className="audit-profile-card-obs">{data.observation}</div>}
                </FadeSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="content" className="audit-section audit-section--alt">
        <div className="audit-section-inner">
          <FadeSection><p className="audit-label">Content Strategy Analysis</p><h2 className="audit-heading">Based on your last 30 posts.</h2></FadeSection>
          <div className="audit-metrics-grid">
            {CONTENT_METRICS.map((metric, i) => {
              const data = state.contentMetrics?.[metric.key]
              if (!data) return null
              const numVal = rMap[data.rating] ?? 0
              return (
                <FadeSection key={metric.key} delay={i * 80} className="audit-metric-card">
                  <div className="audit-metric-card-header"><span className="audit-metric-label">{metric.label}</span><Badge rating={data.rating} /></div>
                  <ScoreBar value={data.rating ? numVal : 0} />
                  {data.detail && <div className="audit-metric-detail">{data.detail}</div>}
                </FadeSection>
              )
            })}
          </div>
          <FadeSection><h3 className="audit-sub-heading" style={{ marginTop: 80 }}>Content Pillars</h3></FadeSection>
          <div className="audit-pillars-grid">
            {[{ key: 'value', label: 'Value Content' }, { key: 'growth', label: 'Growth Content' }, { key: 'connection', label: 'Connection Content' }].map((p, i) => {
              const data = state.contentPillars?.[p.key]
              if (!data) return null
              return (
                <FadeSection key={p.key} delay={i * 120} className="audit-pillar-card">
                  <div className="audit-pillar-card-top"><h3 className="audit-pillar-name">{p.label}</h3><Badge rating={data.status} /></div>
                  {data.detail && <div className="audit-pillar-detail">{data.detail}</div>}
                  {data.recs?.filter((r: string) => r).length > 0 && (
                    <div className="audit-pillar-recs">
                      <p className="audit-pillar-recs-label">Recommendations</p>
                      {data.recs.filter((r: string) => r).map((rec: string, j: number) => (
                        <div key={j} className="audit-pillar-rec"><span className="audit-pillar-rec-icon">→</span><span>{rec}</span></div>
                      ))}
                    </div>
                  )}
                </FadeSection>
              )
            })}
          </div>
          <div className="audit-perf-grid" style={{ marginTop: 80 }}>
            {state.strengths?.filter((s: string) => s).length > 0 && (
              <FadeSection className="audit-perf-col audit-perf-col--green">
                <div className="audit-perf-col-header"><span className="audit-perf-dot audit-perf-dot--green" /><h3>Key Strengths</h3></div>
                {state.strengths.filter((s: string) => s).map((s: string, i: number) => <div key={i} className="audit-perf-item">{s}</div>)}
              </FadeSection>
            )}
            {state.weaknesses?.filter((w: string) => w).length > 0 && (
              <FadeSection delay={120} className="audit-perf-col audit-perf-col--red">
                <div className="audit-perf-col-header"><span className="audit-perf-dot audit-perf-dot--red" /><h3>Key Weaknesses &amp; Gaps</h3></div>
                {state.weaknesses.filter((w: string) => w).map((w: string, i: number) => <div key={i} className="audit-perf-item">{w}</div>)}
              </FadeSection>
            )}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="audit-section">
        <div className="audit-section-inner">
          <FadeSection><p className="audit-label">Growth Opportunities</p><h2 className="audit-heading">Untapped levers for your next stage of growth.</h2></FadeSection>
          <div className="audit-opp-list">
            {(state.opportunities || []).filter((o: any) => o.title).map((opp: any, i: number) => {
              const isOpen = expandedOpp === i
              return (
                <FadeSection key={i} delay={i * 80}>
                  <button className={`audit-opp-card ${isOpen ? 'audit-opp-card--open' : ''}`} onClick={() => setExpandedOpp(isOpen ? null : i)}>
                    <div className="audit-opp-card-header">
                      <div className="audit-opp-card-left"><span className="audit-opp-number">{String(i+1).padStart(2,'0')}</span><span className="audit-opp-title">{opp.title}</span></div>
                      <div className="audit-opp-card-right">
                        <span className={`audit-impact audit-impact--${opp.impact}`}>{opp.impact} impact</span>
                        <svg className={`audit-opp-chevron ${isOpen ? 'audit-opp-chevron--open' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                    </div>
                    {opp.detail && <div className={`audit-opp-body ${isOpen ? 'audit-opp-body--open' : ''}`}><p>{opp.detail}</p></div>}
                  </button>
                </FadeSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section">
        <FadeSection>
          <h2 className="contact-title">
            Ready to<br />
            <em style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
              Elevate
            </em> Your Brand?
          </h2>
          <p className="contact-sub">
            This audit is just the starting point. We build the systems that make your brand impossible to ignore.
          </p>
          <a href="https://cal.com/achand/audit" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Call</a>
        </FadeSection>
      </section>

      <footer className="audit-footer"><p className="audit-footer-text">Prepared by <a href="https://nava45.com" className="audit-footer-link">Nava45</a></p></footer>
    </div>
  )
}
