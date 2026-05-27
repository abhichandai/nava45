'use client'
import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Desktop dropdown: close on click outside or Escape
  useEffect(() => {
    if (!dropdownOpen) return
    const onPointerDown = (e: MouseEvent) => {
      if (dropdownWrapRef.current && !dropdownWrapRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdownOpen])

  // Mobile menu: lock body scroll while open + Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  const linkStyle = {
    fontSize: '0.75rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'var(--text)',
    textDecoration: 'none',
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav className={scrolled ? 'nav--scrolled' : 'nav--top'}>
        <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>

        {/* Desktop nav-actions (hidden on mobile via CSS) */}
        <div className="nav-actions">
          <a href="/about" style={linkStyle}>About Us</a>
          <a href="/client-success" style={linkStyle}>Client Success</a>
          <div
            ref={dropdownWrapRef}
            className={`nav-dropdown-wrap ${dropdownOpen ? 'nav-dropdown-wrap--open' : ''}`}
          >
            <a href="/what-we-do" className="nav-dropdown-label" style={linkStyle}>
              What We Do
            </a>
            <button
              type="button"
              className="nav-dropdown-caret"
              aria-label="Toggle What We Do menu"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
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

        {/* Burger (mobile only via CSS) — opens the menu; closing happens via the X inside it */}
        <button
          type="button"
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile-menu"
          onClick={() => setMobileOpen(true)}
        >
          <span className="nav-burger-line" />
          <span className="nav-burger-line" />
          <span className="nav-burger-line" />
        </button>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div
        id="nav-mobile-menu"
        className={`nav-mobile-menu ${mobileOpen ? 'nav-mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="nav-mobile-close"
          aria-label="Close menu"
          onClick={closeMobile}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="nav-mobile-inner">
          <div className="nav-mobile-links">
            <a href="/about" className="nav-mobile-link" onClick={closeMobile}>About Us</a>
            <a href="/client-success" className="nav-mobile-link" onClick={closeMobile}>Client Success</a>
            <a href="/what-we-do" className="nav-mobile-link" onClick={closeMobile}>What We Do</a>
            <div className="nav-mobile-engines">
              <a href="/what-we-do/growth-engine" className="nav-mobile-sublink" onClick={closeMobile}>
                The Growth Engine
              </a>
              <a href="/what-we-do/magnetic-content-engine" className="nav-mobile-sublink nav-mobile-sublink--coming" onClick={closeMobile}>
                <span>The Magnetic Content Engine</span>
                <span className="nav-dropdown-coming-tag">Coming Soon</span>
              </a>
              <a href="/what-we-do/intelligence-engine" className="nav-mobile-sublink nav-mobile-sublink--coming" onClick={closeMobile}>
                <span>The Intelligence Engine</span>
                <span className="nav-dropdown-coming-tag">Coming Soon</span>
              </a>
            </div>
          </div>
          <div className="nav-mobile-footer">
            <ThemeToggle />
            <a href="/apply" className="nav-cta nav-mobile-cta" onClick={closeMobile}>Apply to Work Together</a>
          </div>
        </div>
      </div>
    </>
  )
}
