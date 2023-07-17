'use client'

import { useEffect, useState } from "react"
import ResortCard from '../components/ExploreComponents/ResortCard'
import Breadcrumbs from "../components/ExploreComponents/Breadcrumbs"
import PhotoLeftCard from "../components/ExploreComponents/PhotoLeftCard"
import WhereToStay from "../components/ExploreComponents/WhereToStay"

export default function ExploreIslamoradaPage() {
    const [resorts, setResorts] = useState([])

    useEffect(() => {
        setResorts(allResorts)

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

    const allResorts = [
        {
          name: 'Amara Cay',
          blurb: 'Amara Cay Resort is anchored in the laid-back style and carefree atmosphere that makes Islamorada the Sport Fishing Capital of the World.',
          main_photo: '/images/resorts/amara-cay-main.png',
          logo: '/images/resorts/amara-cay-logo.png',
          url: 'https://www.islamoradaresortcollection.com/amara-cay-resort',
        },
        {
          name: 'Cheeca Lodge',
          blurb: 'Cheeca Lodge & Spa has been an exclusive hideaway for celebrities, business leaders and U.S. Presidents for over 70 years.',
          main_photo: '/images/resorts/cheeca-lodge-main.png',
          logo: '/images/resorts/cheeca-lodge-logo.png',
          url: 'https://www.cheeca.com/',
        },
        {
          name: 'Playa Largo',
          blurb: 'Located in Key Largo, FL, Playa Largo Resort & Spa, Autograph Collection offers 178 luxury rooms, suites, bungalows, and a beach house.',
          main_photo: '/images/resorts/playa-largo-main.png',
          logo: '/images/resorts/playa-largo-logo.png',
          url: 'https://www.playalargoresort.com/',
        },
        {
          name: 'Fisher Inn',
          blurb: 'The Fisher Inn Resort & Marina offers guests a modern, stylish, and comfortable place to stay while visiting Islamorada.',
          main_photo: '/images/resorts/fisher-inn-main.png',
          logo: '/images/resorts/fisher-inn-logo.png',
          url: 'https://www.fisherinnresort.com/',
        },
        {
          name: 'The Islands of Islamorada',
          blurb: 'Seamlessly weaves the allure of tropical beauty with familiar luxurious comforts, creating a captivating experience for the whole family.',
          main_photo: '/images/resorts/islands-islamorada-main.png',
          logo: '/images/resorts/islands-islamorada-logo.png',
          url: 'https://www.theislandsofislamorada.com/',
        },
        {
          name: 'Casa Morada',
          blurb: 'Casa Morada is an upscale sixteen suite privately owned hotel inspired by the informal character of the Caribbean.',
          main_photo: '/images/resorts/casa-morada-main.png',
          logo: '/images/resorts/casa-morada-logo.png',
          url: 'https://casamorada.com/',
        },
    ]

    let resortsList
    if (allResorts.length > 0) {
      resortsList = resorts
        .map((resort, i) => <ResortCard key={i} resortData={resort} />)
    }

    return (
        <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
            <div className="mx-6 lg:mx-20 mb-16">
                <Breadcrumbs />
                <PhotoLeftCard />
                <WhereToStay resortsList={resortsList} />
            </div>
        </div>
    )
}