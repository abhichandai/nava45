/* Supabase REST helper — audits table */
const SUPABASE_URL = 'https://epdcnwkygvigeuhsvaiq.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwZGNud2t5Z3ZpZ2V1aHN2YWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4OTg4ODksImV4cCI6MjA4ODQ3NDg4OX0.5stOp81QmAE1V0ApeIjckAlOffHb4baM3kLvALBskbw'

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  Prefer: 'return=representation',
}

export async function loadAudit(slug: string) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/audits?slug=eq.${encodeURIComponent(slug)}&select=*`,
    { headers, cache: 'no-store' }
  )
  if (!res.ok) return null
  const rows = await res.json()
  return rows[0] ?? null
}

export async function saveAudit(slug: string, data: any) {
  // Upsert by slug
  const res = await fetch(`${SUPABASE_URL}/rest/v1/audits?on_conflict=slug`, {
    method: 'POST',
    headers: { ...headers, Prefer: 'return=representation,resolution=merge-duplicates' },
    body: JSON.stringify({ slug, data, updated_at: new Date().toISOString() }),
  })
  if (!res.ok) throw new Error(`Save failed: ${res.status}`)
  const rows = await res.json()
  return rows[0]
}

export async function listAudits() {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/audits?select=slug,data,updated_at&order=updated_at.desc`,
    { headers, cache: 'no-store' }
  )
  if (!res.ok) return []
  return res.json()
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
