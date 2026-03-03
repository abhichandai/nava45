import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abhi Chand — Digital Marketing',
  description: 'Performance marketing and personal brand strategy for high-end clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
