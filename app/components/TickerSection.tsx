'use client'

import { useRef } from 'react'

const LOGOS = [
  { src: '/logos/university-of-toronto.png', alt: 'University of Toronto', isImage: true },
  { src: '/logos/adam-leipzig.png', alt: 'Adam Leipzig Productions', isImage: true },
  { name: 'Balance Catamarans', isImage: false },
  { name: 'Focus in Action', isImage: false },
  { name: 'Quit by Healing', isImage: false },
]

export default function TickerSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    const track = trackRef.current
    if (!track) return
    // Read current computed transform position
    const style = window.getComputedStyle(track)
    const matrix = new DOMMatrix(style.transform)
    const currentX = matrix.m41
    // Freeze at current position by overriding animation with inline style
    track.style.animationPlayState = 'paused'
    track.style.transform = `translateX(${currentX}px)`
    track.style.animation = 'none'
    track.style.transform = `translateX(${currentX}px)`
  }

  const handleMouseLeave = () => {
    const track = trackRef.current
    if (!track) return
    const currentX = parseFloat(track.style.transform.replace(/[^-\d.]/g, '') || '0')
    // Calculate what % of the total width we're at and restart from there
    track.style.animation = ''
    track.style.transform = ''
    track.style.animationPlayState = ''
  }

  return (
    <section className="ticker-section">
      <p className="section-label ticker-label">Trusted By</p>
      <div
        className="ticker-track-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="ticker-track" ref={trackRef}>
          {[0, 1, 2, 3].map((i) => (
            <div className="ticker-set" key={i} aria-hidden={i > 0 ? 'true' : 'false'}>
              {LOGOS.map((logo, j) => (
                <div className="ticker-item" key={j}>
                  {logo.isImage ? (
                    <img
                      src={logo.src}
                      alt={i === 0 ? logo.alt : ''}
                      className="ticker-logo"
                    />
                  ) : (
                    <span className="ticker-text-logo">{logo.name}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
