'use client'

import { useEffect } from 'react'
import Hero from './components/HomeComponents/Hero'
import CharterTypes from './components/HomeComponents/CharterTypes'
import PhotoLeftCard from './components/HomeComponents/PhotoLeftCard'
import PhotoRightCard from './components/HomeComponents/PhotoRightCard'

export default function HomePage() {
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
    <>
      <head>
        <title>Islamorada Fishing Guides & Charters | Florida Keys</title>
        <link rel="icon" href="/images/tan-favicon.png"/>
      </head>
      <div className="mx-auto max-w-7xl pt-4 md:pt-24 animate__animated animate__fadeIn">
        <Hero />
        <CharterTypes />
        <PhotoLeftCard />
        <PhotoRightCard />
      </div>
    </>
  )
}
