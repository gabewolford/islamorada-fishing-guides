'use client'

import './globals.css'
import localFont from 'next/font/local'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'

const apercu = localFont({
  src: [
    {
      path: './fonts/apercu-regular-pro.woff2',
      weight: '400',
      style: 'normal',
      variable: '--font-apercu'
    },
    {
      path: './fonts/apercu-medium-pro.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/apercu-bold-pro.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({ children }) {
  useEffect(() => {
    import('preline')
    
    const cards = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
            }
        })
    },
    {
        threshold: .25,
    }
    )

    cards.forEach(card => {
        observer.observe(card)
    })
  }, [])

  return (
    <html lang="en" className={apercu.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
