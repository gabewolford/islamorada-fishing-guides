import Link from "next/link"
import { useEffect } from "react"

export default function ResortCard({ resortData }) {
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

    let resortName, resortPhoto, resortURL, resortBlurb, resortLogo
    if (resortData) {
        resortName = <h3 className="bold">{resortData.name}</h3>
        resortBlurb = <p>{resortData.blurb}</p>
        resortPhoto = resortData.main_photo 
        resortURL = resortData.url
        resortLogo = resortData.logo
    }

    return (
        <>
            <Link
                href={resortData.url}
                target="_blank"
                rel="noreferrer"
                className="hover-grow"
            >
            <div className="fade-in flex flex-col items-start gap-6 relative">
                <img src={resortPhoto} alt={resortData.name} />
                <img className='absolute top-0 left-0 w-1/3 h-auto pt-5 pl-5' src={resortLogo} alt={resortData.name} />
                <div className="flex flex-col items-start">
                    {resortName}
                    {resortBlurb}
                </div>
            </div>
            </Link>
        </>
    )
}