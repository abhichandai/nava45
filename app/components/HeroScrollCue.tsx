'use client'
import { useRef, type ReactNode } from 'react'

type Props = {
  /** CSS selector for the scroll target, e.g. "#quote" */
  target: string
  /** Optional label rendered above the arrow */
  label?: ReactNode
  /** Animation duration in ms (default 1600) */
  duration?: number
  /** Pixel offset from the top so the section heading isn't tucked under the nav (default 96) */
  offset?: number
}

const linear = (t: number) => t

export default function HeroScrollCue({ target, label, duration = 1800, offset = 96 }: Props) {
  const isAnimating = useRef(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (isAnimating.current) return

    const el = document.querySelector(target) as HTMLElement | null
    if (!el) return

    // Respect reduced-motion preference
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const targetY = el.getBoundingClientRect().top + window.scrollY - offset

    if (reducedMotion) {
      window.scrollTo(0, targetY)
      history.pushState(null, '', target)
      return
    }

    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()
    isAnimating.current = true

    const step = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1)
      const eased = linear(t)
      window.scrollTo(0, startY + distance * eased)
      if (t < 1) {
        requestAnimationFrame(step)
      } else {
        isAnimating.current = false
        history.pushState(null, '', target)
      }
    }

    requestAnimationFrame(step)
  }

  return (
    <div className="hero-scroll-cue animate-fade-up delay-3">
      <a
        href={target}
        onClick={handleClick}
        className="hero-scroll-link"
        aria-label={typeof label === 'string' ? label : 'Scroll to next section'}
      >
        {label ? <span className="hero-scroll-label">{label}</span> : null}
        <svg
          className="hero-scroll-arrow"
          width="40"
          height="46"
          viewBox="0 0 24 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 8l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 16l7 7 7-7"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  )
}
