'use client'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  return (
    <nav>
      <a href="/" className="nav-logo">Nava<span style={{ color: 'var(--gold)' }}>45</span></a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <a href="/about" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>About</a>
        <a href="/client-success" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>Our Work</a>
        <a href="/#work" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none' }}>What We Do</a>
        <ThemeToggle />
        <a href="/#contact" className="nav-cta">Apply to Work Together</a>
      </div>
    </nav>
  )
}
