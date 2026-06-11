'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { loadAudit, saveAudit, slugify } from '../../lib/supabase-audits'

/* ═══════════════════════════════════════════════════════════════════════════
   ACCOUNT AUDIT — Internal Builder + Presentation Tool
   ═══════════════════════════════════════════════════════════════════════════ */

type Rating = 'very-strong' | 'strong' | 'decent' | 'could-be-better' | 'weak' | 'missing' | ''
type PillarStatus = 'present' | 'underused' | 'missing' | ''
type Impact = 'high' | 'medium' | 'low'

const RATINGS: { value: Rating; label: string }[] = [
  { value: '', label: 'Select…' },
  { value: 'very-strong', label: 'Very Strong' },
  { value: 'strong', label: 'Strong' },
  { value: 'decent', label: 'Decent' },
  { value: 'could-be-better', label: 'Could Be Better' },
  { value: 'weak', label: 'Weak' },
  { value: 'missing', label: 'Missing' },
]

const PILLAR_STATUSES: { value: PillarStatus; label: string }[] = [
  { value: '', label: 'Select…' },
  { value: 'present', label: 'Present' },
  { value: 'underused', label: 'Underused' },
  { value: 'missing', label: 'Missing' },
]

const IMPACTS: { value: Impact; label: string }[] = [
  { value: 'high', label: 'High Impact' },
  { value: 'medium', label: 'Medium Impact' },
  { value: 'low', label: 'Low Impact' },
]

const PROFILE_ITEMS = [
  { key: 'profilePhoto', label: 'Profile Photo', hint: 'A photo of them smiling that makes a strong first impression.' },
  { key: 'nameField', label: 'Name Field', hint: 'Niche-related keywords — the platform acts as a search engine.' },
  { key: 'iHelpStatement', label: '"I Help" Statement', hint: '"I help [X] achieve [Y] without [Z]" — clear, specific, client-focused.' },
  { key: 'dmCta', label: 'DM CTA', hint: 'An easy way for people to message directly instead of filling out a form.' },
  { key: 'applicationLink', label: 'Application Link', hint: 'A single application form — no multi-link tools like Linktree.' },
  { key: 'pinnedPosts', label: 'Pinned Posts', hint: 'Three pinned posts: best client win, personal story, deep value post.' },
  { key: 'blueCheck', label: 'Blue Check Mark', hint: 'Meta-verified badge for instant credibility.' },
]

const CONTENT_METRICS = [
  { key: 'frequency', label: 'Frequency', hint: 'How often they post per week.' },
  { key: 'tone', label: 'Tone', hint: 'Voice and personality — corporate vs. human, formal vs. conversational.' },
  { key: 'engagement', label: 'Engagement', hint: 'Likes, comments, shares relative to follower count.' },
  { key: 'contentTheme', label: 'Content Theme', hint: 'What topics they post about and how targeted they are.' },
  { key: 'format', label: 'Format', hint: 'Video, carousel, static image, text — and how well it fits the platform.' },
  { key: 'hashtagUse', label: 'Hashtag / Keyword Use', hint: 'Strategic use of hashtags or caption keywords for discovery.' },
]

/* ─── Default state factory ──────────────────────────────────────────────── */

function createDefaultState() {
  return {
    client: { name: '', handle: '', platform: 'Instagram', title: '' },
    profileScreenshot: '',
    screenshotScale: 60,
    profile: Object.fromEntries(PROFILE_ITEMS.map(p => [p.key, { rating: '' as Rating, observation: '' }])),
    contentMetrics: Object.fromEntries(CONTENT_METRICS.map(m => [m.key, { rating: '' as Rating, detail: '' }])),
    contentPillars: {
      value: { status: '' as PillarStatus, detail: '', recs: ['', ''] },
      growth: { status: '' as PillarStatus, detail: '', recs: ['', ''] },
      connection: { status: '' as PillarStatus, detail: '', recs: ['', ''] },
    },
    strengths: ['', '', ''],
    weaknesses: ['', '', ''],
    opportunities: [
      { title: '', impact: 'high' as Impact, detail: '' },
      { title: '', impact: 'high' as Impact, detail: '' },
      { title: '', impact: 'medium' as Impact, detail: '' },
    ],
  }
}

/* ─── Rating utilities ───────────────────────────────────────────────────── */

function ratingColor(r: Rating | PillarStatus): string {
  if (r === 'very-strong' || r === 'strong' || r === 'present') return '#3BB06C'
  if (r === 'decent' || r === 'could-be-better' || r === 'underused') return '#C9A84C'
  if (r === 'weak' || r === 'missing') return '#D4513A'
  return 'var(--muted)'
}

function ratingLabel(r: Rating): string {
  return RATINGS.find(x => x.value === r)?.label || '—'
}

function pillarLabel(s: PillarStatus): string {
  return PILLAR_STATUSES.find(x => x.value === s)?.label || '—'
}

function overallScore(state: ReturnType<typeof createDefaultState>): number {
  const ratingToNum = (r: Rating): number => {
    if (r === 'very-strong') return 100
    if (r === 'strong') return 80
    if (r === 'decent') return 60
    if (r === 'could-be-better') return 40
    if (r === 'weak') return 20
    if (r === 'missing') return 0
    return -1
  }
  const pillarToNum = (s: PillarStatus): number => {
    if (s === 'present') return 100
    if (s === 'underused') return 50
    if (s === 'missing') return 10
    return -1
  }
  const scores: number[] = []
  Object.values(state.profile).forEach(p => { const n = ratingToNum(p.rating); if (n >= 0) scores.push(n) })
  Object.values(state.contentMetrics).forEach(m => { const n = ratingToNum(m.rating); if (n >= 0) scores.push(n) })
  const pv = pillarToNum(state.contentPillars.value.status); if (pv >= 0) scores.push(pv)
  const pg = pillarToNum(state.contentPillars.growth.status); if (pg >= 0) scores.push(pg)
  const pc = pillarToNum(state.contentPillars.connection.status); if (pc >= 0) scores.push(pc)
  if (scores.length === 0) return 0
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}

/* ─── Reusable components ────────────────────────────────────────────────── */

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

function Badge({ rating }: { rating: Rating | PillarStatus }) {
  if (!rating) return <span className="audit-badge" style={{ opacity: 0.4 }}>Not Rated</span>
  const color = ratingColor(rating)
  const label = RATINGS.find(r => r.value === rating)?.label || PILLAR_STATUSES.find(r => r.value === rating)?.label || rating
  return <span className="audit-badge" style={{ background: `${color}18`, color }}>{label}</span>
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

/* ─── Inline edit components ─────────────────────────────────────────────── */

function EditText({ value, onChange, placeholder, multiline, editMode }: {
  value: string; onChange: (v: string) => void; placeholder: string; multiline?: boolean; editMode: boolean
}) {
  if (!editMode) return <>{value || <span style={{ opacity: 0.35, fontStyle: 'italic' }}>{placeholder}</span>}</>
  if (multiline) return (
    <textarea className="audit-edit-textarea" value={value} onChange={e => onChange(e.target.value)}
      placeholder={placeholder} rows={3} />
  )
  return <input className="audit-edit-input" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
}

function EditSelect<T extends string>({ value, options, onChange, editMode }: {
  value: T; options: { value: T; label: string }[]; onChange: (v: T) => void; editMode: boolean
}) {
  if (!editMode) return null
  return (
    <select className="audit-edit-select" value={value} onChange={e => onChange(e.target.value as T)}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}

/* ─── Platform Icons ─────────────────────────────────────────────────────── */

function PlatformIcon({ platform }: { platform: string }) {
  const icons: Record<string, React.ReactNode> = {
    Instagram: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
      </svg>
    ),
    LinkedIn: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.4c0-4.67 6.03-5.05 6.03 0V24H24V13.87c0-7.88-8.922-7.59-11.018-3.71V8z" transform="scale(0.85) translate(2,2)" />
      </svg>
    ),
    TikTok: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" transform="scale(0.9) translate(1.5,1)" />
      </svg>
    ),
    YouTube: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
        <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.84.55 9.38.55 9.38.55s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" transform="scale(0.85) translate(2,2)" />
      </svg>
    ),
    'Twitter/X': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" transform="scale(0.8) translate(2.5,2.5)" />
      </svg>
    ),
  }
  return <>{icons[platform] || <span className="audit-avatar-initials">?</span>}</>
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export default function AuditTemplate() {
  const [state, setState] = useState(createDefaultState)
  const [editMode, setEditMode] = useState(true)
  const [expandedOpp, setExpandedOpp] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('overview')
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [currentSlug, setCurrentSlug] = useState('')
  const [loaded, setLoaded] = useState(false)
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Load from URL ?slug= param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const slug = params.get('slug')
    if (slug) {
      loadAudit(slug).then(row => {
        if (row?.data) {
          setState(row.data)
          setCurrentSlug(slug)
          setSaveStatus('saved')
        }
        setLoaded(true)
      }).catch(() => setLoaded(true))
    } else {
      setLoaded(true)
    }
  }, [])

  // Auto-save (debounced 2s) whenever state changes after initial load
  useEffect(() => {
    if (!loaded) return
    const slug = currentSlug || slugify(state.client.name)
    if (!slug || !state.client.name) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    setSaveStatus('idle')
    saveTimer.current = setTimeout(async () => {
      setSaveStatus('saving')
      try {
        await saveAudit(slug, state)
        setCurrentSlug(slug)
        setSaveStatus('saved')
        // Update URL without reload
        const url = new URL(window.location.href)
        url.searchParams.set('slug', slug)
        window.history.replaceState({}, '', url.toString())
      } catch { setSaveStatus('error') }
    }, 2000)
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current) }
  }, [state, loaded])

  const clientUrl = currentSlug ? `${window.location.origin}/audit/${currentSlug}` : ''

  // Helpers to update nested state
  const updateClient = (k: string, v: string) => setState(s => ({ ...s, client: { ...s.client, [k]: v } }))
  const updateProfile = (key: string, field: string, v: string) =>
    setState(s => ({ ...s, profile: { ...s.profile, [key]: { ...s.profile[key], [field]: v } } }))
  const updateMetric = (key: string, field: string, v: string) =>
    setState(s => ({ ...s, contentMetrics: { ...s.contentMetrics, [key]: { ...s.contentMetrics[key], [field]: v } } }))
  const updatePillar = (key: string, field: string, v: any) =>
    setState(s => ({ ...s, contentPillars: { ...s.contentPillars, [key]: { ...s.contentPillars[key], [field]: v } } }))
  const updatePillarRec = (key: string, idx: number, v: string) =>
    setState(s => {
      const recs = [...s.contentPillars[key as keyof typeof s.contentPillars].recs]
      recs[idx] = v
      return { ...s, contentPillars: { ...s.contentPillars, [key]: { ...s.contentPillars[key as keyof typeof s.contentPillars], recs } } }
    })
  const updateStrength = (idx: number, v: string) =>
    setState(s => { const a = [...s.strengths]; a[idx] = v; return { ...s, strengths: a } })
  const updateWeakness = (idx: number, v: string) =>
    setState(s => { const a = [...s.weaknesses]; a[idx] = v; return { ...s, weaknesses: a } })
  const updateOpp = (idx: number, field: string, v: string) =>
    setState(s => { const a = [...s.opportunities]; a[idx] = { ...a[idx], [field]: v }; return { ...s, opportunities: a } })
  const addOpp = () => setState(s => ({ ...s, opportunities: [...s.opportunities, { title: '', impact: 'medium' as Impact, detail: '' }] }))
  const removeOpp = (idx: number) => setState(s => ({ ...s, opportunities: s.opportunities.filter((_, i) => i !== idx) }))

  const score = overallScore(state)
  const initials = state.client.name ? state.client.name.split(' ').map(n => n[0]).join('') : '?'

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

  // Profile score (just the profile items)
  const profileRatings = Object.values(state.profile).filter(p => p.rating)
  const profileScore = profileRatings.length ? Math.round(profileRatings.reduce((sum, p) => {
    const m: Record<string, number> = { 'very-strong': 100, 'strong': 80, 'decent': 60, 'could-be-better': 40, 'weak': 20, 'missing': 0 }
    return sum + (m[p.rating] ?? 0)
  }, 0) / profileRatings.length) : 0

  // Content score
  const contentRatings = Object.values(state.contentMetrics).filter(m => m.rating)
  const contentScore = contentRatings.length ? Math.round(contentRatings.reduce((sum, m) => {
    const mp: Record<string, number> = { 'very-strong': 100, 'strong': 80, 'decent': 60, 'could-be-better': 40, 'weak': 20, 'missing': 0 }
    return sum + (mp[m.rating] ?? 0)
  }, 0) / contentRatings.length) : 0

  return (
    <div className="audit-page">
      {/* ─── Mode toggle + save status ─── */}
      <div className="audit-mode-toggle">
        {saveStatus === 'saving' && <span className="audit-save-status">Saving…</span>}
        {saveStatus === 'saved' && <span className="audit-save-status audit-save-status--ok">Saved</span>}
        {saveStatus === 'error' && <span className="audit-save-status audit-save-status--err">Error</span>}
        {editMode && clientUrl && (
          <button className="audit-mode-btn" onClick={() => { navigator.clipboard.writeText(clientUrl); alert('Client link copied!') }}
            title={clientUrl}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            Share
          </button>
        )}
        <button className={`audit-mode-btn ${editMode ? 'audit-mode-btn--active' : ''}`} onClick={() => setEditMode(true)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </button>
        <button className={`audit-mode-btn ${!editMode ? 'audit-mode-btn--active' : ''}`} onClick={() => setEditMode(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Present
        </button>
      </div>

      {/* ─── Section nav ─── */}
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

      {/* ═══ HERO / OVERVIEW ═══ */}
      <section id="overview" className="audit-hero">
        <div className="audit-hero-inner">
          <div className="audit-hero-badge"><span className="audit-hero-badge-dot" />Account Audit</div>
          <div className="audit-hero-top">
            <div className="audit-hero-left">
              <div className="audit-avatar"><PlatformIcon platform={state.client.platform} /></div>
              <div style={{ flex: 1 }}>
                {editMode ? (
                  <div className="audit-hero-edit-fields">
                    <input className="audit-edit-input audit-edit-input--large" value={state.client.name}
                      onChange={e => updateClient('name', e.target.value)} placeholder="Client Name" />
                    <div style={{ display: 'flex', gap: 12 }}>
                      <input className="audit-edit-input" value={state.client.handle}
                        onChange={e => updateClient('handle', e.target.value)} placeholder="@handle" style={{ flex: 1 }} />
                      <select className="audit-edit-select" value={state.client.platform}
                        onChange={e => updateClient('platform', e.target.value)}>
                        <option>Instagram</option><option>LinkedIn</option><option>TikTok</option><option>YouTube</option><option>Twitter/X</option>
                      </select>
                    </div>
                    <input className="audit-edit-input" value={state.client.title}
                      onChange={e => updateClient('title', e.target.value)} placeholder="Their title — e.g. CEO, Producer, Founder" />
                  </div>
                ) : (
                  <>
                    <h1 className="audit-hero-name">{state.client.name || 'Client Name'}</h1>
                    <p className="audit-hero-handle">{state.client.handle || '@handle'} · {state.client.platform}</p>
                    <p className="audit-hero-title">{state.client.title || 'Title'}</p>
                  </>
                )}
              </div>
            </div>
            <div className="audit-hero-right">
              <ScoreRing score={score} label="Overall Score" />
            </div>
          </div>

          {/* Profile screenshot */}
          {editMode ? (
            <div className="audit-screenshot-upload">
              {state.profileScreenshot ? (
                <>
                  <div className="audit-screenshot-controls">
                    <label className="audit-screenshot-slider-label">
                      Size
                      <input type="range" min="30" max="100" value={state.screenshotScale}
                        onChange={e => setState(s => ({ ...s, screenshotScale: Number(e.target.value) }))}
                        className="audit-screenshot-slider" />
                      <span>{state.screenshotScale}%</span>
                    </label>
                    <button className="audit-remove-btn"
                      onClick={() => setState(s => ({ ...s, profileScreenshot: '' }))}>Remove</button>
                  </div>
                  <div className="audit-screenshot-preview" style={{ maxWidth: `${state.screenshotScale}%` }}>
                    <img src={state.profileScreenshot} alt="Profile screenshot" />
                  </div>
                </>
              ) : (
                <label className="audit-screenshot-dropzone">
                  <input type="file" accept="image/*" style={{ display: 'none' }}
                    onChange={e => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      const reader = new FileReader()
                      reader.onload = () => setState(s => ({ ...s, profileScreenshot: reader.result as string }))
                      reader.readAsDataURL(file)
                    }} />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                  </svg>
                  <span>Upload profile screenshot</span>
                </label>
              )}
            </div>
          ) : state.profileScreenshot ? (
            <div className="audit-screenshot-preview" style={{ maxWidth: `${state.screenshotScale || 60}%` }}>
              <img src={state.profileScreenshot} alt="Profile screenshot" />
            </div>
          ) : null}

          {/* Summary cards */}
          <div className="audit-summary-row">
            <FadeSection className="audit-summary-card" delay={0}>
              <div className="audit-summary-card-top">
                <span className="audit-summary-card-label">Profile</span>
                <span className="audit-summary-card-count">{profileRatings.length}/7 rated</span>
              </div>
              <div className="audit-summary-card-score">{profileScore}<span className="audit-summary-card-unit">/100</span></div>
              <ScoreBar value={profileScore} />
            </FadeSection>
            <FadeSection className="audit-summary-card" delay={120}>
              <div className="audit-summary-card-top">
                <span className="audit-summary-card-label">Content Strategy</span>
                <span className="audit-summary-card-count">{contentRatings.length}/6 rated</span>
              </div>
              <div className="audit-summary-card-score">{contentScore}<span className="audit-summary-card-unit">/100</span></div>
              <ScoreBar value={contentScore} />
            </FadeSection>
            <FadeSection className="audit-summary-card" delay={240}>
              <div className="audit-summary-card-top">
                <span className="audit-summary-card-label">Opportunities</span>
                <span className="audit-summary-card-count">{state.opportunities.filter(o => o.title).length} identified</span>
              </div>
              <div className="audit-summary-card-score">{state.opportunities.filter(o => o.impact === 'high').length}<span className="audit-summary-card-unit"> high impact</span></div>
              <ScoreBar value={state.opportunities.length ? (state.opportunities.filter(o => o.title).length / state.opportunities.length) * 100 : 0} />
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══ PROFILE — 7 MUST-HAVES ═══ */}
      <section id="profile" className="audit-section">
        <div className="audit-section-inner">
          <FadeSection>
            <p className="audit-label">Profile Audit</p>
            <h2 className="audit-heading">The 7 things every profile must have.</h2>
            <p className="audit-subheading">We evaluated your profile against the seven fundamentals that drive discoverability, credibility, and conversion.</p>
          </FadeSection>
          <div className="audit-profile-grid">
            {PROFILE_ITEMS.map((item, i) => {
              const data = state.profile[item.key]
              return (
                <FadeSection key={item.key} delay={i * 60} className="audit-profile-card">
                  <div className="audit-profile-card-header">
                    <div className="audit-profile-card-num">{String(i + 1).padStart(2, '0')}</div>
                    <span className="audit-profile-card-element">{item.label}</span>
                    {editMode ? (
                      <EditSelect value={data.rating} options={RATINGS} onChange={v => updateProfile(item.key, 'rating', v)} editMode={editMode} />
                    ) : (
                      <Badge rating={data.rating} />
                    )}
                  </div>
                  {editMode && <p className="audit-profile-card-hint">{item.hint}</p>}
                  <div className="audit-profile-card-obs">
                    <EditText value={data.observation} onChange={v => updateProfile(item.key, 'observation', v)}
                      placeholder="Your assessment…" multiline editMode={editMode} />
                  </div>
                </FadeSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ CONTENT STRATEGY ═══ */}
      <section id="content" className="audit-section audit-section--alt">
        <div className="audit-section-inner">
          <FadeSection>
            <p className="audit-label">Content Strategy Analysis</p>
            <h2 className="audit-heading">Based on your last 30 posts.</h2>
            <p className="audit-subheading">We analyzed your recent content across six key dimensions to identify what&rsquo;s driving results and where the gaps are.</p>
          </FadeSection>

          {/* Content metrics grid */}
          <div className="audit-metrics-grid">
            {CONTENT_METRICS.map((metric, i) => {
              const data = state.contentMetrics[metric.key]
              const numVal = { 'very-strong': 100, 'strong': 80, 'decent': 60, 'could-be-better': 40, 'weak': 20, 'missing': 0 }[data.rating] ?? 0
              return (
                <FadeSection key={metric.key} delay={i * 80} className="audit-metric-card">
                  <div className="audit-metric-card-header">
                    <span className="audit-metric-label">{metric.label}</span>
                    {editMode ? (
                      <EditSelect value={data.rating} options={RATINGS} onChange={v => updateMetric(metric.key, 'rating', v)} editMode={editMode} />
                    ) : (
                      <Badge rating={data.rating} />
                    )}
                  </div>
                  <ScoreBar value={data.rating ? numVal : 0} />
                  <div className="audit-metric-detail">
                    <EditText value={data.detail} onChange={v => updateMetric(metric.key, 'detail', v)}
                      placeholder={editMode ? metric.hint : ''} multiline editMode={editMode} />
                  </div>
                </FadeSection>
              )
            })}
          </div>

          {/* Content Pillars */}
          <FadeSection>
            <h3 className="audit-sub-heading" style={{ marginTop: 80 }}>Content Pillars</h3>
            <p className="audit-subheading">Every dominant brand runs on three types of content. Here&rsquo;s where you stand.</p>
          </FadeSection>
          <div className="audit-pillars-grid">
            {[
              { key: 'value', label: 'Value Content' },
              { key: 'growth', label: 'Growth Content' },
              { key: 'connection', label: 'Connection Content' },
            ].map((pillar, i) => {
              const data = state.contentPillars[pillar.key as keyof typeof state.contentPillars]
              return (
                <FadeSection key={pillar.key} delay={i * 120} className="audit-pillar-card">
                  <div className="audit-pillar-card-top">
                    <h3 className="audit-pillar-name">{pillar.label}</h3>
                    {editMode ? (
                      <EditSelect value={data.status} options={PILLAR_STATUSES}
                        onChange={v => updatePillar(pillar.key, 'status', v)} editMode={editMode} />
                    ) : (
                      <Badge rating={data.status} />
                    )}
                  </div>
                  <div className="audit-pillar-detail">
                    <EditText value={data.detail} onChange={v => updatePillar(pillar.key, 'detail', v)}
                      placeholder="Assessment of this content type…" multiline editMode={editMode} />
                  </div>
                  <div className="audit-pillar-recs">
                    <p className="audit-pillar-recs-label">Recommendations</p>
                    {data.recs.map((rec, j) => (
                      <div key={j} className="audit-pillar-rec">
                        <span className="audit-pillar-rec-icon">→</span>
                        <div style={{ flex: 1 }}>
                          <EditText value={rec} onChange={v => updatePillarRec(pillar.key, j, v)}
                            placeholder={`Recommendation ${j + 1}…`} editMode={editMode} />
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeSection>
              )
            })}
          </div>

          {/* Strengths & Weaknesses */}
          <div className="audit-perf-grid" style={{ marginTop: 80 }}>
            <FadeSection className="audit-perf-col audit-perf-col--green">
              <div className="audit-perf-col-header">
                <span className="audit-perf-dot audit-perf-dot--green" />
                <h3>Key Strengths</h3>
              </div>
              {state.strengths.map((s, i) => (
                <div key={i} className="audit-perf-item">
                  <EditText value={s} onChange={v => updateStrength(i, v)}
                    placeholder={`Strength ${i + 1}…`} editMode={editMode} />
                </div>
              ))}
            </FadeSection>
            <FadeSection delay={120} className="audit-perf-col audit-perf-col--red">
              <div className="audit-perf-col-header">
                <span className="audit-perf-dot audit-perf-dot--red" />
                <h3>Key Weaknesses & Gaps</h3>
              </div>
              {state.weaknesses.map((w, i) => (
                <div key={i} className="audit-perf-item">
                  <EditText value={w} onChange={v => updateWeakness(i, v)}
                    placeholder={`Weakness ${i + 1}…`} editMode={editMode} />
                </div>
              ))}
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══ GROWTH OPPORTUNITIES ═══ */}
      <section id="opportunities" className="audit-section">
        <div className="audit-section-inner">
          <FadeSection>
            <p className="audit-label">Growth Opportunities</p>
            <h2 className="audit-heading">Untapped levers for your next stage of growth.</h2>
          </FadeSection>
          <div className="audit-opp-list">
            {state.opportunities.map((opp, i) => {
              const isOpen = expandedOpp === i
              return (
                <FadeSection key={i} delay={i * 80}>
                  <div className={`audit-opp-card ${isOpen ? 'audit-opp-card--open' : ''}`}>
                    <button className="audit-opp-card-header" onClick={() => setExpandedOpp(isOpen ? null : i)}>
                      <div className="audit-opp-card-left">
                        <span className="audit-opp-number">{String(i + 1).padStart(2, '0')}</span>
                        {editMode ? (
                          <input className="audit-edit-input" value={opp.title}
                            onChange={e => updateOpp(i, 'title', e.target.value)} placeholder="Opportunity title…"
                            onClick={e => e.stopPropagation()} style={{ flex: 1 }} />
                        ) : (
                          <span className="audit-opp-title">{opp.title || 'Untitled Opportunity'}</span>
                        )}
                      </div>
                      <div className="audit-opp-card-right">
                        {editMode ? (
                          <select className="audit-edit-select" value={opp.impact}
                            onChange={e => { e.stopPropagation(); updateOpp(i, 'impact', e.target.value) }}
                            onClick={e => e.stopPropagation()}>
                            {IMPACTS.map(im => <option key={im.value} value={im.value}>{im.label}</option>)}
                          </select>
                        ) : (
                          <span className={`audit-impact audit-impact--${opp.impact}`}>{opp.impact} impact</span>
                        )}
                        <svg className={`audit-opp-chevron ${isOpen ? 'audit-opp-chevron--open' : ''}`}
                          width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                    <div className={`audit-opp-body ${isOpen ? 'audit-opp-body--open' : ''}`}>
                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                        <EditText value={opp.detail} onChange={v => updateOpp(i, 'detail', v)}
                          placeholder="Detailed explanation of this opportunity…" multiline editMode={editMode} />
                      </div>
                      {editMode && (
                        <button className="audit-remove-btn" onClick={() => removeOpp(i)}>Remove</button>
                      )}
                    </div>
                  </div>
                </FadeSection>
              )
            })}
          </div>
          {editMode && (
            <button className="audit-add-btn" onClick={addOpp}>+ Add Opportunity</button>
          )}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
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

      <footer className="audit-footer">
        <p className="audit-footer-text">
          Prepared by <a href="https://nava45.com" className="audit-footer-link">Nava45</a>
        </p>
      </footer>
    </div>
  )
}
