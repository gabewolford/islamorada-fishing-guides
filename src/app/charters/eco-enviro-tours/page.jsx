'use client'

import { useEffect } from "react"
import Breadcrumbs from "../../components/ChartersComponents/EcoEnviroTours/Breadcrumbs"
import PhotoLeftCard1 from "../../components/ChartersComponents/EcoEnviroTours/PhotoLeftCard1"
import PhotoRightCard2 from "../../components/ChartersComponents/EcoEnviroTours/PhotoRightCard2"
import PhotoLeftCard3 from "../../components/ChartersComponents/EcoEnviroTours/PhotoLeftCard3"

export default function EcoEnviroToursPage() {

    useEffect(() => {
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
                <title>Islamorada Fishing Guides | Eco & Enviro Tours</title>
                <link rel="icon" href="/images/tan-favicon.png"/>
            </head>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Breadcrumbs />
                    <PhotoLeftCard1 />
                    <PhotoRightCard2 />
                    <PhotoLeftCard3 />
                </div>
            </div>
        </>
    )      
}