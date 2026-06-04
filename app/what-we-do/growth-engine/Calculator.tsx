'use client'
import { useState, type CSSProperties } from 'react'

function formatBigCurrency(n: number): string {
  if (!isFinite(n) || n <= 0) return '$0'
  if (n >= 1_000_000) {
    return `$${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`
  }
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })
}

function formatCurrencyExact(n: number, decimals = 0): string {
  if (!isFinite(n) || n < 0) return '$0'
  return n.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })
}

function formatNumber(n: number): string {
  if (!isFinite(n) || n < 0) return '0'
  return Math.round(n).toLocaleString('en-US')
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
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider-input"
        style={{ ['--pct' as string]: `${pct}%` } as CSSProperties}
        aria-label={label}
        aria-valuetext={display}
      />
    </div>
  )
}

export default function Calculator() {
  const [adSpend, setAdSpend] = useState(10000)
  const [cpc, setCpc] = useState(5)
  const [signupRate, setSignupRate] = useState(5)
  const [bookRate, setBookRate] = useState(30)
  const [showRate, setShowRate] = useState(75)
  const [closeRate, setCloseRate] = useState(30)
  const [dealSize, setDealSize] = useState(5000)

  const clicks = cpc > 0 ? adSpend / cpc : 0
  const leads = clicks * (signupRate / 100)
  const bookings = leads * (bookRate / 100)
  const shows = bookings * (showRate / 100)
  const customers = shows * (closeRate / 100)
  const pipeline = customers * dealSize
  const roas = adSpend > 0 ? pipeline / adSpend : 0
  const costPerCustomer = customers > 0 ? adSpend / customers : 0

  return (
    <div className="calc">
      <div className="calc-grid">
        {/* Inputs */}
        <div className="calc-inputs">
          <p className="calc-col-label">Your inputs</p>

          <Slider
            label="Monthly ad spend"
            value={adSpend}
            onChange={setAdSpend}
            min={1000}
            max={50000}
            step={500}
            display={formatCurrencyExact(adSpend)}
          />
          <Slider
            label="Cost per click"
            value={cpc}
            onChange={setCpc}
            min={0.5}
            max={20}
            step={0.25}
            display={formatCurrencyExact(cpc, 2)}
          />
          <Slider
            label="Landing page conversion"
            value={signupRate}
            onChange={setSignupRate}
            min={1}
            max={20}
            step={0.5}
            display={`${signupRate}%`}
          />
          <Slider
            label="Lead to booked call"
            value={bookRate}
            onChange={setBookRate}
            min={10}
            max={80}
            step={1}
            display={`${bookRate}%`}
          />
          <Slider
            label="Show-up rate"
            value={showRate}
            onChange={setShowRate}
            min={30}
            max={95}
            step={1}
            display={`${showRate}%`}
          />
          <Slider
            label="Close rate on shows"
            value={closeRate}
            onChange={setCloseRate}
            min={5}
            max={60}
            step={1}
            display={`${closeRate}%`}
          />
          <Slider
            label="Average deal size"
            value={dealSize}
            onChange={setDealSize}
            min={500}
            max={50000}
            step={250}
            display={formatCurrencyExact(dealSize)}
          />
        </div>

        {/* Outputs */}
        <div className="calc-outputs">
          <p className="calc-col-label">Per month</p>

          <div className="calc-output calc-output--hero">
            <p className="calc-output-value">{formatBigCurrency(pipeline)}</p>
            <p className="calc-output-label">Pipeline revenue</p>
          </div>

          <div className="calc-output">
            <p className="calc-output-value">{formatNumber(customers)}</p>
            <p className="calc-output-label">New customers</p>
          </div>

          <div className="calc-output-pair">
            <div className="calc-output calc-output--small">
              <p className="calc-output-value">{roas.toFixed(1)}x</p>
              <p className="calc-output-label">Return on ad spend</p>
            </div>
            <div className="calc-output calc-output--small">
              <p className="calc-output-value">{formatCurrencyExact(costPerCustomer)}</p>
              <p className="calc-output-label">Cost per customer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Funnel narrative */}
      <div className="calc-funnel">
        <p className="calc-funnel-label">The funnel</p>
        <p className="calc-funnel-text">
          <strong>{formatNumber(clicks)}</strong> clicks
          <span className="calc-funnel-sep">→</span>
          <strong>{formatNumber(leads)}</strong> leads
          <span className="calc-funnel-sep">→</span>
          <strong>{formatNumber(bookings)}</strong> calls booked
          <span className="calc-funnel-sep">→</span>
          <strong>{formatNumber(shows)}</strong> shows
          <span className="calc-funnel-sep">→</span>
          <strong>{formatNumber(customers)}</strong> customers
        </p>
      </div>

      <p className="calc-note">
        Illustrative. Real benchmarks vary by industry, offer, and audience temperature. The point is that the engine is modellable before it&rsquo;s built.
      </p>
    </div>
  )
}
