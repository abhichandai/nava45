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

  return (
    <nav className={scrolled ? 'nav--scrolled' : 'nav--top'}>
      <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>
      <div className="nav-actions">
        <a href="/about" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>About Us</a>
        <a href="/client-success" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>Client Success</a>
        <a href="/#work" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>What We Do</a>
        <ThemeToggle />
        <a href="/apply" className="nav-cta">Apply to Work Together</a>
      </div>
    </nav>
  )
}
