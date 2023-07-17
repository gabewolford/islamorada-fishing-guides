'use client'

import './globals.css'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar/page'

export default function RootLayout({ children }) {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
