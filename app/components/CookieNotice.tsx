'use client'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'nava45-cookie-ack'

export default function CookieNotice() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Already acknowledged? Never show again.
    let acked = false
    try {
      acked = localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      acked = false
    }
    if (acked) return

    const onScroll = () => {
      // Appear once the visitor scrolls past the first screen
      if (window.scrollY > window.innerHeight * 0.85) {
        setShow(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  return (
    <div className={`cookie-notice ${show ? 'cookie-notice--show' : ''}`} role="dialog" aria-label="Cookie notice" aria-hidden={!show}>
      <p className="cookie-notice-text">
        We use cookies to understand how this site is used. By continuing, you&rsquo;re okay with that.
      </p>
      <button type="button" className="cookie-notice-btn" onClick={dismiss}>
        Got it
      </button>
    </div>
  )
}
