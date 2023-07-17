'use client'

import './globals.css'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'

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
