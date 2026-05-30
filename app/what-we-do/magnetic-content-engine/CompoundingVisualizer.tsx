'use client'
import { useState, useMemo, type CSSProperties } from 'react'

function formatNumber(n: number): string {
  if (!isFinite(n) || n < 0) return '0'
  return Math.round(n).toLocaleString('en-US')
}
function formatAxis(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}K`
  return Math.round(n).toString()
}

type SliderProps = {
  label: string
  value: number
  onChange: (n: number) => void
  min: number
  max: number
  step: number
  display: string
}
function Slider({ label, value, onChange, min, max, step, display }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="calc-slider">
      <div className="calc-slider-row">
        <label className="calc-slider-label">{label}</label>
        <span className="calc-slider-value">{display}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider-input"
        style={{ ['--pct' as string]: `${pct}%` } as CSSProperties}
        aria-label={label}
        aria-valuetext={display}
      />
    </div>
  )
}

/**
 * Illustrative model. Each week, weeklyReach = posts × reachPerPost × audienceMultiplier,
 * where audienceMultiplier scales 1→5x as audience grows (more followers → more impressions
 * per post). A small share (conversionRate) of weekly reach becomes new followers. This
 * produces a compounding curve that visually distinguishes consistent vs sporadic cadences.
 */
function projectAudience(posts: number, reach: number, start: number): number[] {
  const WEEKS = 52
  const CONVERSION = 0.012
  const data: number[] = [start]
  let audience = start
  for (let w = 1; w <= WEEKS; w++) {
    const audienceMultiplier = 1 + Math.min(audience / 4000, 4)
    const weeklyReach = posts * reach * audienceMultiplier
    const newFollowers = weeklyReach * CONVERSION
    audience += newFollowers
    data.push(audience)
  }
  return data
}

function Chart({ data }: { data: number[] }) {
  const W = 800
  const H = 240
  const P = { top: 16, right: 56, bottom: 32, left: 12 }
  const cw = W - P.left - P.right
  const ch = H - P.top - P.bottom

  const maxVal = Math.max(...data)
  const points = data.map((v, i) => {
    const x = P.left + (i / (data.length - 1)) * cw
    const y = P.top + ch - (v / maxVal) * ch
    return [x, y] as const
  })

  const lineD = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')
  const areaD = `${lineD} L ${P.left + cw} ${P.top + ch} L ${P.left} ${P.top + ch} Z`

  const monthMarkers = [3, 6, 9, 12]
  const endPoint = points[points.length - 1]
  const endValue = data[data.length - 1]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="viz-chart" role="img" aria-label="Audience growth projection over 12 months">
      <defs>
        <linearGradient id="vizFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.32" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Baseline */}
      <line x1={P.left} y1={P.top + ch} x2={P.left + cw} y2={P.top + ch} stroke="var(--border)" strokeWidth="1" />

      {/* Month gridlines + labels */}
      {monthMarkers.map((m) => {
        const x = P.left + (m / 12) * cw
        return (
          <g key={m}>
            <line x1={x} y1={P.top} x2={x} y2={P.top + ch} stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4" />
            <text x={x} y={H - 10} textAnchor="middle" className="viz-axis-label">M{m}</text>
          </g>
        )
      })}

      {/* Area + line */}
      <path d={areaD} fill="url(#vizFill)" />
      <path d={lineD} fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinejoin="round" />

      {/* End marker + label */}
      <circle cx={endPoint[0]} cy={endPoint[1]} r="4.5" fill="var(--gold)" />
      <text
        x={endPoint[0] + 10}
        y={endPoint[1] + 4}
        className="viz-end-label"
      >
        {formatAxis(endValue)}
      </text>
    </svg>
  )
}

export default function CompoundingVisualizer() {
  const [posts, setPosts] = useState(3)
  const [reach, setReach] = useState(1000)
  const [start, setStart] = useState(500)

  const data = useMemo(() => projectAudience(posts, reach, start), [posts, reach, start])
  const finalAudience = data[data.length - 1]
  const multiple = start > 0 ? finalAudience / start : finalAudience / 100

  return (
    <div className="calc viz">
      <div className="viz-inputs">
        <Slider
          label="Posts per week"
          value={posts}
          onChange={setPosts}
          min={1} max={10} step={1}
          display={`${posts}`}
        />
        <Slider
          label="Average reach per post"
          value={reach}
          onChange={setReach}
          min={100} max={10000} step={100}
          display={formatNumber(reach)}
        />
        <Slider
          label="Starting audience"
          value={start}
          onChange={setStart}
          min={0} max={50000} step={500}
          display={formatNumber(start)}
        />
      </div>

      <div className="viz-output">
        <p className="viz-output-eyebrow">After 12 months of consistency</p>
        <p className="viz-output-value">{formatNumber(finalAudience)}</p>
        <p className="viz-output-sub">
          {start > 0 ? (
            <>{multiple.toFixed(1)}&times; your starting audience</>
          ) : (
            <>built from zero</>
          )}
        </p>
      </div>

      <Chart data={data} />

      <p className="calc-note">
        Illustrative model. Real growth depends on content quality, platform, niche, and a hundred other factors. The lesson, that posting cadence multiplied by time is the lever almost nobody pulls consistently, is real.
      </p>
    </div>
  )
}
