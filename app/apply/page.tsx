import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to Work Together · Nava45',
  description: 'Tell us about your business and what you\'re trying to achieve. We work with a select group of clients at a time.',
}

export default function ApplyPage() {
  return (
    <main className="apply-page">
      <iframe
        src="https://form.jotform.com/261464850409056"
        title="Apply to Work With Nava45"
        className="apply-iframe"
        allow="geolocation; microphone; camera; fullscreen"
      />
    </main>
  )
}
