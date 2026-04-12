import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nava45 — Marketing & Growth',
  description: 'Performance marketing and personal brand strategy for luxury products and high-profile executives.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
