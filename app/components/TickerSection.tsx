'use client'
import { useRef, useEffect, useState } from 'react'

const LOGOS = [
  { src: '/logos/olympus.svg', label: 'Olympus', wide: false },
  { src: '/logos/welch-allyn.svg', label: 'Welch Allyn', wide: false },
  { src: '/logos/university-of-toronto.svg', label: 'University of Toronto', wide: true },
  { src: '/logos/balance-catamarans.svg', label: 'Balance Catamarans', wide: true },
  { src: '/logos/adam-leipzig.svg', label: 'Adam Leipzig', wide: true },
  { src: '/logos/dh-smile-center.svg', label: 'DH Smile Center', wide: false },
  { src: '/logos/focus-and-action.png', label: 'Focus & Action', wide: false },
  { src: '/logos/quit-by-healing.png', label: 'Quit by Healing', wide: false },
]

export default function TickerSection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // Respect reduced motion: just run it, no observer gymnastics
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setStarted(true)
      return
    }

    const el = wrapRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Start the loop from the top of the array the moment it's in view,
            // then stop observing so it runs continuously from there.
            setStarted(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="ticker-section">
      <p className="section-label ticker-label">Trusted By</p>
      <div ref={wrapRef} className={`ticker-track-wrap ${started ? 'is-visible' : ''}`}>
        <div className="ticker-track">
          {[0, 1, 2, 3].map((i) => (
            <div className="ticker-set" key={i} aria-hidden={i > 0 ? 'true' : 'false'}>
              {LOGOS.map((logo) => (
                <div className="ticker-item" key={logo.label}>
                  <div
                    className={`ticker-logo${logo.wide ? ' ticker-logo--wide' : ''}`}
                    style={{ backgroundImage: `url('${logo.src}')` }}
                    role={i === 0 ? 'img' : undefined}
                    aria-label={i === 0 ? logo.label : undefined}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
