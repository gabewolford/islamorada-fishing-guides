'use client'

import './globals.css'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'

export default function RootLayout({ children }) {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
