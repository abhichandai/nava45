/* ───────────────────────────────────────────────────────────────────────────
   parse-audit-csv.ts
   Parses a v2 LinkedIn audit CSV (the format produced by the Cowork audit
   prompt) into the fields the audit builder uses. Quote-aware: handles fields
   that contain commas, which the CSV wraps in double quotes.
   ─────────────────────────────────────────────────────────────────────────── */

type Rating = 'excellent' | 'strong' | 'decent' | 'could-be-better' | 'weak' | 'missing' | 'n-a' | ''
type Impact = 'high' | 'medium' | 'low'

export interface ParsedAudit {
  client: { name?: string; handle?: string; platform?: string; title?: string; followers?: string }
  profile: Record<string, { rating: Rating; observation: string }>
  contentMetrics: Record<string, { rating: Rating; detail: string }>
  contentPillars: Record<string, { status: Rating; detail: string; recs: string[] }>
  strengths: string[]
  weaknesses: string[]
  postsData: { num: string; title: string; link: string; type: string; likes: string; shares: string; comments: string }[]
  opportunities: { title: string; impact: Impact; detail: string }[]
}

/** Split a single CSV line into fields, honouring double-quoted fields and "" escapes. */
function splitCsvLine(line: string): string[] {
  const out: string[] = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQ) {
      if (c === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++ } else { inQ = false }
      } else { cur += c }
    } else {
      if (c === '"') { inQ = true }
      else if (c === ',') { out.push(cur); cur = '' }
      else { cur += c }
    }
  }
  out.push(cur)
  return out.map(s => s.trim())
}

const PROFILE_ORDER = ['profilePhoto', 'nameField', 'iHelpStatement', 'dmCta', 'applicationLink', 'pinnedPosts', 'blueCheck']

const RATING_MAP: Record<string, Rating> = {
  'excellent': 'excellent', 'strong': 'strong', 'decent': 'decent',
  'could be better': 'could-be-better', 'weak': 'weak', 'missing': 'missing',
  'n/a': 'n-a', 'na': 'n-a',
}
const IMPACT_MAP: Record<string, Impact> = { 'high': 'high', 'medium': 'medium', 'low': 'low' }
const METRIC_MAP: Record<string, string> = {
  'frequency': 'frequency', 'tone': 'tone', 'engagement': 'engagement',
  'content theme': 'contentTheme', 'format': 'format',
  'hashtag / keyword use': 'hashtagUse', 'hashtag/keyword use': 'hashtagUse',
}
const PILLAR_MAP: Record<string, string> = {
  'value content': 'value',
  'growth / trending content': 'growth', 'growth/trending content': 'growth',
  'connection content': 'connection',
}

const rmap = (s: string): Rating => RATING_MAP[(s || '').trim().toLowerCase()] || ''
const imap = (s: string): Impact => IMPACT_MAP[(s || '').trim().toLowerCase()] || 'medium'

export function parseAuditCsv(text: string): ParsedAudit {
  const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
  const out: ParsedAudit = {
    client: {}, profile: {}, contentMetrics: {}, contentPillars: {},
    strengths: [], weaknesses: [], postsData: [], opportunities: [],
  }
  let prefix = '', first = '', last = ''
  let section = 0
  let sub: string | null = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (!line.trim()) continue
    const secM = line.match(/^Section\s*(\d)\s*:/i)
    if (secM) { section = parseInt(secM[1], 10); sub = null; continue }

    const cols = splitCsvLine(line)
    const c0 = (cols[0] || '').toLowerCase()

    if (section === 1) {
      if (c0 === 'post #' || c0 === 'post#') { sub = 'posts'; continue }
      if (sub === 'posts' && /^\d+$/.test(cols[0])) {
        out.postsData.push({
          num: cols[0], title: cols[1] || '', link: cols[2] || '', type: cols[3] || '',
          likes: cols[4] || '', shares: cols[5] || '', comments: cols[6] || '',
        })
      }
    } else if (section === 2) {
      if (c0 === 'label') { sub = 'meta'; continue }
      if (c0 === '#') { sub = 'elements'; continue }
      if (sub === 'meta') {
        const val = cols[1] || ''
        if (c0 === 'name prefix') prefix = val
        else if (c0 === 'first name') first = val
        else if (c0 === 'last name') last = val
        else if (c0 === 'platform') out.client.platform = val
        else if (c0 === 'linkedin url' || c0 === 'profile url') out.client.handle = val
        else if (c0 === 'professional title') out.client.title = val
        else if (c0 === 'follower count') {
          const digits = val.replace(/[^\d]/g, '')
          out.client.followers = digits ? Number(digits).toLocaleString('en-US') : val
        }
      } else if (sub === 'elements') {
        const idx = parseInt(cols[0], 10) - 1
        if (idx >= 0 && idx < PROFILE_ORDER.length) {
          out.profile[PROFILE_ORDER[idx]] = { rating: rmap(cols[3]), observation: cols[2] || '' }
        }
      }
    } else if (section === 3) {
      if (c0 === 'category') { sub = 'metrics'; continue }
      if (sub === 'metrics') {
        const k = METRIC_MAP[c0]
        if (k) out.contentMetrics[k] = { rating: rmap(cols[2]), detail: cols[1] || '' }
      }
    } else if (section === 4) {
      if (c0 === 'pillar') { sub = 'pillars'; continue }
      if (sub === 'pillars') {
        const k = PILLAR_MAP[c0]
        if (k) out.contentPillars[k] = { status: rmap(cols[4]), detail: cols[1] || '', recs: [cols[2] || '', cols[3] || ''] }
      }
    } else if (section === 5) {
      if (c0 === '#' && (cols[1] || '').toLowerCase() === 'strength') { sub = 'strengths'; continue }
      if (c0 === '#' && (cols[1] || '').toLowerCase().startsWith('weakness')) { sub = 'weaknesses'; continue }
      if (sub === 'strengths' && /^\d+$/.test(cols[0])) out.strengths.push(cols[1] || '')
      if (sub === 'weaknesses' && /^\d+$/.test(cols[0])) out.weaknesses.push(cols[1] || '')
    } else if (section === 6) {
      if (c0 === '#') { sub = 'opps'; continue }
      if (sub === 'opps' && /^\d+$/.test(cols[0])) {
        out.opportunities.push({ title: cols[1] || '', detail: cols[2] || '', impact: imap(cols[3]) })
      }
    }
  }

  const name = [prefix, first, last].filter(Boolean).join(' ').trim()
  if (name) out.client.name = name
  return out
}

/** True when a parse produced enough to be a real audit CSV (guards against wrong files). */
export function isUsableAudit(p: ParsedAudit): boolean {
  return p.postsData.length > 0 || Object.keys(p.profile).length > 0
}
