'use client'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Reveal the nav once the user scrolls past most of the hero fold
      setVisible(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll() // set correct state on mount (handles reload mid-page / anchor loads)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={visible ? 'nav--visible' : 'nav--hidden'}>
      <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="/about" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>About Us</a>
        <a href="/client-success" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>Our Work</a>
        <a href="/#work" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>What We Do</a>
        <ThemeToggle />
        <a href="/#contact" className="nav-cta">Apply to Work Together</a>
      </div>
    </nav>
  )
}
