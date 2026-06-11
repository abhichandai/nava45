'use client'
import { useState, useEffect } from 'react'
import { listAudits } from '../lib/supabase-audits'

export default function TemplatesPage() {
  const [audits, setAudits] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    listAudits().then(rows => { setAudits(rows); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime()
    const mins = Math.floor(diff / 60000)
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(hrs / 24)
    return `${days}d ago`
  }

  return (
    <div className="templates-page">
      <div className="templates-inner">
        <p className="audit-label">Internal</p>
        <h1 className="templates-title">Templates</h1>

        {/* Audit Template */}
        <a href="/templates/audit" className="templates-card">
          <div className="templates-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M9 12h6" /><path d="M9 16h6" />
            </svg>
          </div>
          <div>
            <h2 className="templates-card-title">Account Audit</h2>
            <p className="templates-card-desc">Create a new audit for a prospect. Fill in ratings, upload a profile screenshot, and share the link.</p>
          </div>
          <span className="templates-card-arrow">→</span>
        </a>

        {/* Prospect Audits */}
        <div className="templates-section">
          <button className="templates-section-header" onClick={() => setOpen(!open)}>
            <h2 className="templates-section-title">Prospect Audits</h2>
            <div className="templates-section-right">
              <span className="templates-section-count">{audits.length}</span>
              <svg
                className={`templates-chevron ${open ? 'templates-chevron--open' : ''}`}
                width="20" height="20" viewBox="0 0 20 20" fill="none"
              >
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
          <div className={`templates-section-body ${open ? 'templates-section-body--open' : ''}`}>
            {loading ? (
              <p className="templates-empty">Loading…</p>
            ) : audits.length === 0 ? (
              <p className="templates-empty">No audits yet. Create one from the template above.</p>
            ) : (
              <div className="templates-audit-list">
                {audits.map(a => {
                  const name = a.data?.client?.name || 'Untitled'
                  const platform = a.data?.client?.platform || ''
                  const handle = a.data?.client?.handle || ''
                  return (
                    <a key={a.slug} href={`/templates/audit?slug=${a.slug}`} className="templates-audit-row">
                      <div className="templates-audit-info">
                        <span className="templates-audit-name">{name}</span>
                        <span className="templates-audit-meta">{platform}{handle ? ` · ${handle}` : ''}</span>
                      </div>
                      <div className="templates-audit-right">
                        <span className="templates-audit-time">{timeAgo(a.updated_at)}</span>
                        <span className="templates-audit-link" title="Client-facing link">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
