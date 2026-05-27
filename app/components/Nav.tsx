'use client'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Logo is always visible; the menu reveals once past most of the hero fold
      setScrolled(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll() // set correct state on mount (handles reload mid-page / anchor loads)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkStyle = {
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--text)',
    textDecoration: 'none',
  }

  return (
    <nav className={scrolled ? 'nav--scrolled' : 'nav--top'}>
      <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>
      <div className="nav-actions">
        <a href="/about" style={linkStyle}>About Us</a>
        <a href="/client-success" style={linkStyle}>Client Success</a>
        <div className="nav-dropdown-wrap">
          <a href="/what-we-do" className="nav-dropdown-trigger" style={linkStyle}>
            What We Do
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <div className="nav-dropdown" role="menu">
            <a href="/what-we-do/growth-engine" className="nav-dropdown-item">
              The Growth Engine
            </a>
            <a href="/what-we-do/magnetic-content-engine" className="nav-dropdown-item nav-dropdown-item--coming">
              <span>The Magnetic Content Engine</span>
              <span className="nav-dropdown-coming-tag">Coming Soon</span>
            </a>
            <a href="/what-we-do/intelligence-engine" className="nav-dropdown-item nav-dropdown-item--coming">
              <span>The Intelligence Engine</span>
              <span className="nav-dropdown-coming-tag">Coming Soon</span>
            </a>
          </div>
        </div>
        <ThemeToggle />
        <a href="/apply" className="nav-cta">Apply to Work Together</a>
      </div>
    </nav>
  )
}
