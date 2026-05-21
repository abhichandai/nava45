import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'

export const metadata: Metadata = {
  title: 'Nava45 — Marketing & Growth',
  description: 'Performance marketing and personal brand strategy for luxury products and high-profile executives.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
