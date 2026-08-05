'use client'
import { useState, useEffect, useRef } from 'react'
import { loadAudit, saveAudit, slugify } from '../../lib/supabase-audits'
import { parseAuditCsv, isUsableAudit } from '../../lib/parse-audit-csv'

/* ═══════════════════════════════════════════════════════════════════════════
   ACCOUNT AUDIT V2 — Redesigned Lead Magnet Template
   Ported from the approved account-audit-sample.html (Dr. Mohamed Latib case).
   Visual language: dark letterhead layout, goal/reality grid, growth blockers
   and fixes as parallel lists, content pillars with score bars, proof cards,
   closing CTA. This file is intentionally self-contained (scoped styles via
   styled-jsx) and does not touch the original ../audit/page.tsx template.
   ═══════════════════════════════════════════════════════════════════════════ */

type TagColor = 'strong' | 'decent' | 'weak'

interface FactRow { label: string; value: string }
interface ListItem { title: string; detail: string }
interface PillarState { name: string; tagLabel: string; tagColor: TagColor; score: number; detail: string }

const TAG_COLORS: { value: TagColor; label: string }[] = [
  { value: 'strong', label: 'Strong (green)' },
  { value: 'decent', label: 'Decent (amber)' },
  { value: 'weak', label: 'Weak (red)' },
]

/* ─── Default state factory ──────────────────────────────────────────────── */

function createDefaultState() {
  return {
    client: { name: '', titleLine: '', handle: '', followers: '', experience: '' },
    facts: [
      { label: 'Followers', value: '' },
      { label: 'Engagement rate', value: '' },
      { label: 'Posting frequency', value: '' },
      { label: 'Primary content type', value: '' },
    ] as FactRow[],
    goal: '',
    working: ['', '', ''],
    pillarsLede: '',
    pillars: {
      value: { name: 'Value content', tagLabel: '', tagColor: 'decent' as TagColor, score: 0, detail: '' },
      growth: { name: 'Growth content', tagLabel: '', tagColor: 'decent' as TagColor, score: 0, detail: '' },
      connection: { name: 'Connection content', tagLabel: '', tagColor: 'decent' as TagColor, score: 0, detail: '' },
    } as Record<'value' | 'growth' | 'connection', PillarState>,
    blockersLede: "The gaps standing between you and the reach, engagement, and leads you should be getting.",
    blockers: [
      { title: '', detail: '' },
      { title: '', detail: '' },
      { title: '', detail: '' },
      { title: '', detail: '' },
    ] as ListItem[],
    fixesLede: 'Mapped directly to what\u2019s holding you back above, using content you\u2019re already creating.',
    fixes: [
      { title: '', detail: '' },
      { title: '', detail: '' },
      { title: '', detail: '' },
      { title: '', detail: '' },
    ] as ListItem[],
  }
}

type AuditState = ReturnType<typeof createDefaultState>

/* ─── Rating → v2 mapping (used by CSV import only) ─────────────────────── */

const RATING_SCORE: Record<string, number> = {
  excellent: 100, strong: 80, decent: 60, 'could-be-better': 40, weak: 20, missing: 0,
}
const RATING_TAG_COLOR: Record<string, TagColor> = {
  excellent: 'strong', strong: 'strong', decent: 'decent', 'could-be-better': 'decent', weak: 'weak', missing: 'weak',
}
const RATING_TAG_LABEL: Record<string, string> = {
  excellent: 'Excellent', strong: 'Strong', decent: 'Decent', 'could-be-better': 'Could Be Better', weak: 'Weak', missing: 'Missing',
}

/* ─── Inline edit components ─────────────────────────────────────────────── */

function EditText({ value, onChange, placeholder, multiline, editMode, className = '' }: {
  value: string; onChange: (v: string) => void; placeholder: string; multiline?: boolean; editMode: boolean; className?: string
}) {
  if (!editMode) return <>{value || <span className="av2-placeholder">{placeholder}</span>}</>
  if (multiline) return (
    <textarea className={`av2-input av2-textarea ${className}`} value={value}
      onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3} />
  )
  return <input className={`av2-input ${className}`} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
}

/* ─── Reveal-on-scroll wrapper ───────────────────────────────────────────── */

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`av2-reveal ${vis ? 'av2-reveal--in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

/* ─── Score bar (animates fill on mount) ─────────────────────────────────── */

function ScoreBar({ value, color }: { value: number; color: string }) {
  const [w, setW] = useState(0)
  useEffect(() => { const t = setTimeout(() => setW(value), 400); return () => clearTimeout(t) }, [value])
  return (
    <div className="av2-pillar-track">
      <div className="av2-pillar-track-fill" style={{ width: `${w}%`, background: color }} />
    </div>
  )
}

function tagColorVar(c: TagColor): string {
  if (c === 'strong') return 'var(--av2-green)'
  if (c === 'weak') return 'var(--av2-red)'
  return 'var(--av2-amber)'
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════ */

export default function AuditTemplateV2() {
  const [state, setState] = useState<AuditState>(createDefaultState)
  const [editMode, setEditMode] = useState(true)
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

  // Auto-save (debounced 2s). v2 audits are suffixed so they never collide
  // with a same-named record saved from the original ../audit template.
  useEffect(() => {
    if (!loaded) return
    const slug = currentSlug || (state.client.name ? `${slugify(state.client.name)}-v2` : '')
    if (!slug || !state.client.name) return
    if (saveTimer.current) clearTimeout(saveTimer.current)
    setSaveStatus('idle')
    saveTimer.current = setTimeout(async () => {
      setSaveStatus('saving')
      try {
        await saveAudit(slug, state)
        setCurrentSlug(slug)
        setSaveStatus('saved')
        const url = new URL(window.location.href)
        url.searchParams.set('slug', slug)
        window.history.replaceState({}, '', url.toString())
      } catch { setSaveStatus('error') }
    }, 2000)
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current) }
  }, [state, loaded])

  const clientUrl = currentSlug ? `${window.location.origin}/templates/audit-v2?slug=${currentSlug}` : ''

  // ─── Update helpers ───────────────────────────────────────────────────
  const updateClient = (k: keyof AuditState['client'], v: string) =>
    setState(s => ({ ...s, client: { ...s.client, [k]: v } }))
  const updateFact = (idx: number, field: keyof FactRow, v: string) =>
    setState(s => { const a = [...s.facts]; a[idx] = { ...a[idx], [field]: v }; return { ...s, facts: a } })
  const updateWorking = (idx: number, v: string) =>
    setState(s => { const a = [...s.working]; a[idx] = v; return { ...s, working: a } })
  const updatePillar = (key: 'value' | 'growth' | 'connection', field: keyof PillarState, v: any) =>
    setState(s => ({ ...s, pillars: { ...s.pillars, [key]: { ...s.pillars[key], [field]: v } } }))
  const updateBlocker = (idx: number, field: keyof ListItem, v: string) =>
    setState(s => { const a = [...s.blockers]; a[idx] = { ...a[idx], [field]: v }; return { ...s, blockers: a } })
  const addBlocker = () => setState(s => ({ ...s, blockers: [...s.blockers, { title: '', detail: '' }] }))
  const removeBlocker = (idx: number) => setState(s => ({ ...s, blockers: s.blockers.filter((_, i) => i !== idx) }))
  const updateFix = (idx: number, field: keyof ListItem, v: string) =>
    setState(s => { const a = [...s.fixes]; a[idx] = { ...a[idx], [field]: v }; return { ...s, fixes: a } })
  const addFix = () => setState(s => ({ ...s, fixes: [...s.fixes, { title: '', detail: '' }] }))
  const removeFix = (idx: number) => setState(s => ({ ...s, fixes: s.fixes.filter((_, i) => i !== idx) }))

  // Best-effort import from a v2 audit CSV. Only fields the CSV format
  // actually contains get populated; goal, blocker/fix titles, and tag
  // labels still need to be written by hand since they don't exist in the
  // CSV source, they're the strategic diagnosis layer added on top.
  const importAuditCsv = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      const parsed = parseAuditCsv(reader.result as string)
      if (!isUsableAudit(parsed)) {
        alert("Couldn't read that file as an audit CSV. Make sure it's the audit export in the expected format.")
        return
      }
      if (!confirm('Import this CSV? It will fill in what it can (client info, pillar scores, strengths, weaknesses). Goal, verdict-level copy, and fixes still need to be written by hand.')) return
      setState(s => {
        const pillars = { ...s.pillars }
        ;(['value', 'growth', 'connection'] as const).forEach(k => {
          const p = parsed.contentPillars[k]
          if (p) {
            pillars[k] = {
              ...pillars[k],
              score: RATING_SCORE[p.status] ?? pillars[k].score,
              tagColor: RATING_TAG_COLOR[p.status] ?? pillars[k].tagColor,
              tagLabel: RATING_TAG_LABEL[p.status] ?? pillars[k].tagLabel,
              detail: p.detail || pillars[k].detail,
            }
          }
        })
        const facts = s.facts.map(f => {
          if (f.label === 'Followers' && parsed.client.followers) return { ...f, value: parsed.client.followers }
          if (f.label === 'Posting frequency' && parsed.contentMetrics.frequency?.detail) return { ...f, value: parsed.contentMetrics.frequency.detail }
          if (f.label === 'Engagement rate' && parsed.contentMetrics.engagement?.detail) return { ...f, value: parsed.contentMetrics.engagement.detail }
          return f
        })
        const blockers = parsed.weaknesses.length
          ? parsed.weaknesses.map((w, i) => ({ title: s.blockers[i]?.title || '', detail: w }))
          : s.blockers
        return {
          ...s,
          client: {
            ...s.client,
            name: parsed.client.name || s.client.name,
            titleLine: parsed.client.title || s.client.titleLine,
            handle: parsed.client.handle || s.client.handle,
            followers: parsed.client.followers || s.client.followers,
          },
          facts,
          working: parsed.strengths.length ? [parsed.strengths[0] || '', parsed.strengths[1] || '', parsed.strengths[2] || ''] : s.working,
          pillars,
          blockers,
        }
      })
    }
    reader.readAsText(file)
  }

  const initials = state.client.name ? state.client.name.split(' ').filter(Boolean).map(n => n[0]).join('').slice(0, 2).toUpperCase() : '?'

  return (
    <div className="av2-page">
      {/* ─── Builder toolbar (not part of the shared deliverable, tooling only) ─── */}
      <div className="av2-toolbar">
        {saveStatus === 'saving' && <span className="av2-save-status">Saving…</span>}
        {saveStatus === 'saved' && <span className="av2-save-status av2-save-status--ok">Saved</span>}
        {saveStatus === 'error' && <span className="av2-save-status av2-save-status--err">Error</span>}
        {editMode && (
          <label className="av2-toolbar-btn" style={{ cursor: 'pointer' }} title="Populate what it can from an audit CSV">
            <input type="file" accept=".csv" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) importAuditCsv(f); e.target.value = '' }} />
            Import CSV
          </label>
        )}
        {editMode && clientUrl && (
          <button className="av2-toolbar-btn" onClick={() => { navigator.clipboard.writeText(clientUrl); alert('Client link copied!') }} title={clientUrl}>
            Share
          </button>
        )}
        <button className={`av2-toolbar-btn ${editMode ? 'av2-toolbar-btn--active' : ''}`} onClick={() => setEditMode(true)}>Edit</button>
        <button className={`av2-toolbar-btn ${!editMode ? 'av2-toolbar-btn--active' : ''}`} onClick={() => setEditMode(false)}>Present</button>
      </div>

      <div className="av2-shell">

        <div className="av2-letterhead">
          <div className="av2-mark">NAVA45 <span>/ account audit</span></div>
        </div>

        {/* ─── Subject ─── */}
        <Reveal>
          <div className="av2-subject">
            <div className="av2-avatar">{initials}</div>
            <div style={{ flex: 1 }}>
              {editMode ? (
                <>
                  <input className="av2-input av2-input--name" value={state.client.name}
                    onChange={e => updateClient('name', e.target.value)} placeholder="Client name" />
                  <textarea className="av2-input av2-textarea av2-input--titleline" value={state.client.titleLine}
                    onChange={e => updateClient('titleLine', e.target.value)} placeholder="Title line, e.g. Founder & CEO, Company. Notable credential." rows={2} />
                  <div className="av2-chip-row">
                    <input className="av2-input av2-input--chip" value={state.client.followers}
                      onChange={e => updateClient('followers', e.target.value)} placeholder="14K followers" />
                    <input className="av2-input av2-input--chip" value={state.client.handle}
                      onChange={e => updateClient('handle', e.target.value)} placeholder="linkedin.com/in/handle" />
                    <input className="av2-input av2-input--chip" value={state.client.experience}
                      onChange={e => updateClient('experience', e.target.value)} placeholder="15+ years in field" />
                  </div>
                </>
              ) : (
                <>
                  <h1 className="av2-subject-name">{state.client.name || 'Client Name'}</h1>
                  <p className="av2-subject-title">{state.client.titleLine}</p>
                  <div className="av2-chip-row">
                    {state.client.followers && <span className="av2-chip">{state.client.followers}</span>}
                    {state.client.handle && <span className="av2-chip">{state.client.handle}</span>}
                    {state.client.experience && <span className="av2-chip">{state.client.experience}</span>}
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>

        {/* ─── SECTION 1: What you're doing well ─── */}
        <Reveal delay={80}>
          <div className="av2-panel">
            <h2 className="av2-section-title">What you&rsquo;re doing well</h2>
            <div className="av2-panel-inner">

              <div className="av2-gr-grid">
                <div className="av2-gr-col">
                  <div className="av2-gr-label">The goal</div>
                  <EditText value={state.goal} onChange={v => setState(s => ({ ...s, goal: v }))}
                    placeholder="Generate consistent inbound leads and become the go-to name in their field." multiline editMode={editMode}
                    className="av2-input--goal" />
                </div>
                <div className="av2-gr-col">
                  <div className="av2-gr-label">Current status</div>
                  <ul className="av2-fact-list">
                    {state.facts.map((f, i) => (
                      <li className="av2-fact-row" key={i}>
                        {editMode ? (
                          <>
                            <input className="av2-input av2-input--fact-label" value={f.label} onChange={e => updateFact(i, 'label', e.target.value)} placeholder="Label" />
                            <input className="av2-input av2-input--fact-value" value={f.value} onChange={e => updateFact(i, 'value', e.target.value)} placeholder="Value" />
                          </>
                        ) : (
                          <>
                            <span className="av2-fact-label">{f.label}</span>
                            <span className="av2-fact-value">{f.value}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="av2-working-note">
                <strong>What&rsquo;s already working</strong>
                <ul>
                  {state.working.map((w, i) => (
                    <li key={i}>
                      <EditText value={w} onChange={v => updateWorking(i, v)} placeholder={`Working point ${i + 1}`} multiline={editMode} editMode={editMode} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="av2-subsection-label">Content pillars</div>
              {editMode ? (
                <input className="av2-input av2-input--lede" value={state.pillarsLede}
                  onChange={e => setState(s => ({ ...s, pillarsLede: e.target.value }))}
                  placeholder="One-line framing for how the three pillars are performing." />
              ) : (
                state.pillarsLede && <p className="av2-section-lede">{state.pillarsLede}</p>
              )}
              <div className="av2-pillars-grid">
                {(['value', 'growth', 'connection'] as const).map(key => {
                  const p = state.pillars[key]
                  const color = tagColorVar(p.tagColor)
                  return (
                    <div className="av2-pillar-card" key={key}>
                      <div className="av2-pillar-head">
                        <span className="av2-pillar-name">{p.name}</span>
                        {editMode ? (
                          <select className="av2-input av2-select" value={p.tagColor} onChange={e => updatePillar(key, 'tagColor', e.target.value)}>
                            {TAG_COLORS.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                          </select>
                        ) : (
                          <span className="av2-tag" style={{ color }}>{p.tagLabel || '—'}</span>
                        )}
                      </div>
                      {editMode && (
                        <input className="av2-input" style={{ marginBottom: 10 }} value={p.tagLabel}
                          onChange={e => updatePillar(key, 'tagLabel', e.target.value)} placeholder="Tag label, e.g. Decent" />
                      )}
                      <div className="av2-pillar-score-row">
                        <span className="av2-pillar-score-label">Score</span>
                        {editMode ? (
                          <input className="av2-input av2-input--score" type="number" min={0} max={100} value={p.score}
                            onChange={e => updatePillar(key, 'score', Number(e.target.value))} />
                        ) : (
                          <span className="av2-pillar-score-value" style={{ color }}>{p.score}/100</span>
                        )}
                      </div>
                      <ScoreBar value={p.score} color={color} />
                      <EditText value={p.detail} onChange={v => updatePillar(key, 'detail', v)}
                        placeholder="What this pillar looks like right now." multiline editMode={editMode} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─── SECTION 2: What's holding you back ─── */}
        <Reveal delay={120}>
          <div className="av2-panel">
            <h2 className="av2-section-title">What&rsquo;s holding you back</h2>
            {editMode ? (
              <input className="av2-input av2-input--lede" value={state.blockersLede}
                onChange={e => setState(s => ({ ...s, blockersLede: e.target.value }))} placeholder="Section lede" />
            ) : (
              <p className="av2-section-lede">{state.blockersLede}</p>
            )}
            <div className="av2-panel-inner">
              <div className="av2-item-list">
                {state.blockers.map((b, i) => (
                  <div className="av2-item-row" key={i}>
                    <div className="av2-item-num av2-item-num--blocker">{String(i + 1).padStart(2, '0')}</div>
                    <div className="av2-item-copy">
                      {editMode ? (
                        <>
                          <input className="av2-input av2-input--item-title" value={b.title} onChange={e => updateBlocker(i, 'title', e.target.value)} placeholder="Blocker title" />
                          <textarea className="av2-input av2-textarea" value={b.detail} onChange={e => updateBlocker(i, 'detail', e.target.value)} placeholder="What it is and why it's happening." rows={2} />
                          <button className="av2-remove-btn" onClick={() => removeBlocker(i)}>Remove</button>
                        </>
                      ) : (
                        <>
                          <h3>{b.title}</h3>
                          <p>{b.detail}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {editMode && <button className="av2-add-btn" onClick={addBlocker}>+ Add Blocker</button>}
            </div>
          </div>
        </Reveal>

        {/* ─── Proven results (fixed brand asset, matches other audit templates) ─── */}
        <Reveal delay={160}>
          <div className="av2-panel">
            <h2 className="av2-section-title">What happens when the strategy clicks.</h2>
            <div className="av2-proof-grid">
              <div className="av2-proof-card">
                <div className="av2-proof-stats">
                  <div><div className="av2-proof-stat-num">227%</div><div className="av2-proof-stat-label">Audience growth</div></div>
                  <div><div className="av2-proof-stat-num">68%</div><div className="av2-proof-stat-label">Hook retention</div></div>
                </div>
                <p className="av2-proof-blurb">From 22K to 72K+ followers through strategic content and a proprietary hook format that tripled video retention.</p>
                <div className="av2-proof-foot">
                  <div>
                    <div className="av2-proof-name">Adam Leipzig</div>
                    <div className="av2-proof-role">Hollywood Producer &middot; CEO &middot; Author</div>
                  </div>
                  <a className="av2-proof-link" href="/client-success/adam-leipzig" target="_blank" rel="noopener noreferrer">Read the full case study &rarr;</a>
                </div>
              </div>
              <div className="av2-proof-card">
                <div className="av2-proof-stats">
                  <div><div className="av2-proof-stat-num">185K</div><div className="av2-proof-stat-label">Followers from zero</div></div>
                  <div><div className="av2-proof-stat-num">$26K</div><div className="av2-proof-stat-label">Course sales revenue</div></div>
                </div>
                <p className="av2-proof-blurb">$26K in course sales from a $50 offer, built on a consistent content system within a single quarter.</p>
                <div className="av2-proof-foot">
                  <div>
                    <div className="av2-proof-name">Quit By Healing</div>
                    <div className="av2-proof-role">Business Owner</div>
                  </div>
                  <a className="av2-proof-link" href="/client-success/quit-by-healing" target="_blank" rel="noopener noreferrer">Read the full case study &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─── How to fix it ─── */}
        <Reveal delay={200}>
          <div className="av2-panel">
            <h2 className="av2-section-title">How to fix it</h2>
            {editMode ? (
              <input className="av2-input av2-input--lede" value={state.fixesLede}
                onChange={e => setState(s => ({ ...s, fixesLede: e.target.value }))} placeholder="Section lede" />
            ) : (
              <p className="av2-section-lede">{state.fixesLede}</p>
            )}
            <div className="av2-panel-inner">
              <div className="av2-item-list">
                {state.fixes.map((f, i) => (
                  <div className="av2-item-row" key={i}>
                    <div className="av2-item-num av2-item-num--fix">{String(i + 1).padStart(2, '0')}</div>
                    <div className="av2-item-copy">
                      {editMode ? (
                        <>
                          <input className="av2-input av2-input--item-title" value={f.title} onChange={e => updateFix(i, 'title', e.target.value)} placeholder="Fix title" />
                          <textarea className="av2-input av2-textarea" value={f.detail} onChange={e => updateFix(i, 'detail', e.target.value)} placeholder="Concrete next action, mapped to the blocker above." rows={2} />
                          <button className="av2-remove-btn" onClick={() => removeFix(i)}>Remove</button>
                        </>
                      ) : (
                        <>
                          <h3>{f.title}</h3>
                          <p>{f.detail}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {editMode && <button className="av2-add-btn" onClick={addFix}>+ Add Fix</button>}
            </div>
          </div>
        </Reveal>

        {/* ─── Closing CTA ─── */}
        <Reveal delay={240}>
          <div className="av2-panel av2-closing">
            <div className="av2-panel-inner">
              <h2 className="av2-closing-title">Ready to <span className="av2-accent">elevate</span> your brand?</h2>
              <p>This audit is just the starting point. We build the systems that make your brand impossible to ignore.</p>
              <a className="av2-cta" href="https://cal.com/achand/audit" target="_blank" rel="noopener noreferrer">Book a call</a>
            </div>
          </div>
        </Reveal>

      </div>

      <style jsx>{`
        .av2-page {
          --av2-ink: #0d0f13;
          --av2-ink-2: #15181f;
          --av2-ink-3: #1b1f27;
          --av2-hairline: rgba(255,255,255,0.08);
          --av2-hairline-strong: rgba(255,255,255,0.14);
          --av2-text: #f3f2ee;
          --av2-muted: #98979e;
          --av2-muted-soft: #7c7b82;
          --av2-gold: #f2b705;
          --av2-green: #4ade80;
          --av2-amber: #f2b705;
          --av2-red: #ef4a45;
          background: var(--av2-ink);
          color: var(--av2-text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .av2-toolbar {
          display: flex; justify-content: flex-end; gap: 8px;
          padding: 14px 32px; border-bottom: 1px solid var(--av2-hairline);
          position: sticky; top: 0; background: var(--av2-ink); z-index: 20;
        }
        .av2-toolbar-btn {
          font-size: 12px; font-weight: 600; letter-spacing: 0.04em; color: var(--av2-muted);
          background: var(--av2-ink-2); border: 1px solid var(--av2-hairline-strong); border-radius: 4px;
          padding: 7px 14px; cursor: pointer;
        }
        .av2-toolbar-btn--active { color: var(--av2-ink); background: var(--av2-gold); border-color: var(--av2-gold); }
        .av2-save-status { font-size: 12px; color: var(--av2-muted-soft); align-self: center; margin-right: 8px; }
        .av2-save-status--ok { color: var(--av2-green); }
        .av2-save-status--err { color: var(--av2-red); }

        .av2-shell { max-width: 1180px; margin: 0 auto; padding: 0 32px 90px; }

        .av2-reveal { opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease; }
        .av2-reveal--in { opacity: 1; transform: translateY(0); }

        .av2-letterhead { display: flex; align-items: center; justify-content: space-between; padding: 30px 2px 24px; border-bottom: 1px solid var(--av2-hairline); margin-bottom: 48px; }
        .av2-mark { font-size: 13px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--av2-text); }
        .av2-mark span { color: var(--av2-muted); font-weight: 500; }

        .av2-subject { background: var(--av2-ink-2); border: 1px solid var(--av2-hairline); border-radius: 6px; padding: 36px 40px; display: flex; gap: 26px; align-items: center; margin-bottom: 44px; }
        .av2-avatar { flex: 0 0 auto; width: 76px; height: 76px; border-radius: 50%; background: var(--av2-ink-3); color: var(--av2-gold); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; border: 1px solid var(--av2-hairline-strong); }
        .av2-subject-name { font-size: clamp(22px, 3vw, 27px); font-weight: 700; margin: 0 0 6px; letter-spacing: -0.01em; }
        .av2-subject-title { font-size: 14.5px; color: var(--av2-muted); margin: 0 0 14px; line-height: 1.55; max-width: 52ch; }
        .av2-chip-row { display: flex; flex-wrap: wrap; gap: 8px; font-size: 12px; }
        .av2-chip { border: 1px solid var(--av2-hairline-strong); padding: 5px 12px; border-radius: 100px; color: var(--av2-muted); }

        .av2-panel { margin-bottom: 56px; }
        .av2-panel-inner { background: var(--av2-ink-2); border: 1px solid var(--av2-hairline); border-radius: 6px; padding: 38px 42px; }
        .av2-section-title { font-size: clamp(22px, 2.6vw, 26px); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px; }
        .av2-section-lede { font-size: 14.5px; color: var(--av2-muted); max-width: 58ch; margin: 0 0 22px; line-height: 1.6; }

        .av2-gr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-bottom: 26px; border: 1px solid var(--av2-hairline); border-radius: 6px; overflow: hidden; }
        .av2-gr-col { padding: 24px 26px; background: var(--av2-ink-3); }
        .av2-gr-col + .av2-gr-col { border-left: 1px solid var(--av2-hairline); }
        .av2-gr-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px; color: var(--av2-gold); }
        .av2-gr-col p, .av2-gr-col { font-size: 14px; line-height: 1.6; color: var(--av2-muted); }

        .av2-fact-list { margin: 0; padding: 0; list-style: none; }
        .av2-fact-row { display: flex; justify-content: space-between; gap: 12px; padding: 8px 0; border-top: 1px solid var(--av2-hairline); font-size: 13.5px; align-items: center; }
        .av2-fact-row:first-child { border-top: none; padding-top: 0; }
        .av2-fact-label { color: var(--av2-muted-soft); }
        .av2-fact-value { color: var(--av2-muted); font-weight: 400; text-align: right; }

        .av2-working-note { background: var(--av2-ink-3); border: 1px solid var(--av2-hairline); border-radius: 6px; padding: 20px 22px; }
        .av2-working-note strong { display: block; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--av2-gold); margin-bottom: 12px; }
        .av2-working-note ul { margin: 0; padding: 0; list-style: none; }
        .av2-working-note li { position: relative; padding-left: 16px; margin-bottom: 9px; font-size: 14px; line-height: 1.6; color: var(--av2-muted); }
        .av2-working-note li:last-child { margin-bottom: 0; }
        .av2-working-note li::before { content: "–"; position: absolute; left: 0; top: 0; color: var(--av2-gold); }

        .av2-subsection-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--av2-muted-soft); margin: 36px 0 16px; }

        .av2-item-list { display: flex; flex-direction: column; }
        .av2-item-row { display: grid; grid-template-columns: 32px 1fr; gap: 16px; padding: 22px 0; border-top: 1px solid var(--av2-hairline); }
        .av2-item-row:first-of-type { border-top: none; padding-top: 2px; }
        .av2-item-num { font-size: 13px; font-weight: 700; padding-top: 2px; }
        .av2-item-num--blocker { color: var(--av2-red); }
        .av2-item-num--fix { color: var(--av2-gold); }
        .av2-item-copy h3 { font-size: 16px; font-weight: 700; margin: 0 0 8px; line-height: 1.4; }
        .av2-item-copy p { font-size: 14px; line-height: 1.65; color: var(--av2-muted); margin: 0; }

        .av2-pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .av2-pillar-card { background: var(--av2-ink-3); border: 1px solid var(--av2-hairline); border-radius: 6px; padding: 24px 22px 26px; }
        .av2-pillar-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; gap: 10px; }
        .av2-pillar-name { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--av2-text); }
        .av2-tag { display: inline-block; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 9px; border-radius: 4px; border: 1px solid currentColor; white-space: nowrap; }
        .av2-pillar-score-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
        .av2-pillar-score-label { font-size: 10.5px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--av2-muted-soft); }
        .av2-pillar-score-value { font-size: 13px; font-weight: 700; }
        .av2-pillar-track { height: 5px; background: rgba(255,255,255,0.08); border-radius: 100px; overflow: hidden; margin-bottom: 16px; }
        .av2-pillar-track-fill { height: 100%; border-radius: 100px; transition: width 1s cubic-bezier(0.4,0,0.2,1); }
        .av2-pillar-card p { font-size: 13.5px; line-height: 1.65; color: var(--av2-muted); margin: 0; }

        .av2-proof-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 8px; }
        .av2-proof-card { background: var(--av2-ink-2); border: 1px solid var(--av2-hairline); border-radius: 6px; padding: 28px 28px 26px; }
        .av2-proof-stats { display: flex; gap: 30px; margin-bottom: 18px; }
        .av2-proof-stat-num { font-size: 28px; font-weight: 800; color: var(--av2-gold); line-height: 1; }
        .av2-proof-stat-label { font-size: 10px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--av2-muted); margin-top: 7px; }
        .av2-proof-blurb { font-size: 13px; color: var(--av2-muted); line-height: 1.6; margin: 0 0 18px; }
        .av2-proof-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid var(--av2-hairline); }
        .av2-proof-name { font-size: 13px; font-weight: 700; color: var(--av2-text); }
        .av2-proof-role { font-size: 11.5px; color: var(--av2-muted); margin-top: 2px; }
        .av2-proof-link { font-size: 12px; color: var(--av2-gold); text-decoration: none; font-weight: 600; white-space: nowrap; }

        .av2-closing { text-align: center; }
        .av2-closing .av2-panel-inner { padding: 64px 42px; }
        .av2-closing-title { font-size: clamp(26px, 3.4vw, 34px); font-weight: 700; letter-spacing: -0.01em; color: var(--av2-text); line-height: 1.3; margin: 0 0 16px; }
        .av2-accent { color: var(--av2-gold); }
        .av2-closing p { font-size: 15px; font-weight: 400; color: var(--av2-muted); max-width: 52ch; margin: 0 auto 32px; line-height: 1.6; }
        .av2-cta { display: inline-block; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #1a1305; background: var(--av2-gold); padding: 15px 34px; border-radius: 4px; text-decoration: none; }

        /* ─── Edit-mode form controls ─── */
        .av2-input { font-family: inherit; background: var(--av2-ink); color: var(--av2-text); border: 1px solid var(--av2-hairline-strong); border-radius: 4px; padding: 8px 10px; font-size: 13.5px; width: 100%; }
        .av2-input:focus { outline: none; border-color: var(--av2-gold); }
        .av2-textarea { resize: vertical; line-height: 1.5; }
        .av2-select { cursor: pointer; }
        .av2-placeholder { opacity: 0.4; font-style: italic; }
        .av2-input--name { font-size: 22px; font-weight: 700; margin-bottom: 8px; }
        .av2-input--titleline { margin-bottom: 12px; }
        .av2-input--chip { max-width: 220px; }
        .av2-input--goal { min-height: 90px; }
        .av2-input--fact-label { max-width: 45%; }
        .av2-input--fact-value { max-width: 45%; text-align: right; }
        .av2-input--lede { margin-bottom: 18px; }
        .av2-input--item-title { font-weight: 700; margin-bottom: 8px; }
        .av2-input--score { width: 64px; text-align: right; }

        .av2-add-btn, .av2-remove-btn {
          font-size: 12px; font-weight: 600; color: var(--av2-gold); background: transparent;
          border: 1px dashed var(--av2-hairline-strong); border-radius: 4px; padding: 8px 14px; cursor: pointer; margin-top: 6px;
        }
        .av2-remove-btn { color: var(--av2-red); border-style: solid; }

        @media (max-width: 900px) {
          .av2-gr-grid, .av2-proof-grid, .av2-pillars-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .av2-subject { flex-direction: column; align-items: flex-start; padding: 28px 24px; }
          .av2-panel-inner { padding: 28px 24px; }
          .av2-gr-col + .av2-gr-col { border-left: none; border-top: 1px solid var(--av2-hairline); }
          .av2-proof-stats { gap: 20px; }
        }
      `}</style>
    </div>
  )
}
