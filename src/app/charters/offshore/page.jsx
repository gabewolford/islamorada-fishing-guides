'use client'

import { useEffect } from "react"
import Breadcrumbs from "../../components/ChartersComponents/Offshore/Breadcrumbs"
import PhotoLeftCard1 from "../../components/ChartersComponents/Offshore/PhotoLeftCard1"
import PhotoRightCard2 from "../../components/ChartersComponents/Offshore/PhotoRightCard2"
import PhotoLeftCard3 from "../../components/ChartersComponents/Offshore/PhotoLeftCard3"

export default function OffshorePage() {

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
        <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
            <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                <Breadcrumbs />
                <PhotoLeftCard1 />
                <PhotoRightCard2 />
                <PhotoLeftCard3 />
            </div>
        </div>
    )      
}