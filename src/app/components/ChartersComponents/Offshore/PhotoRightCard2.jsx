import Link from "next/link"
import { useEffect } from "react"

export default function PhotoRightCard2() {

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
        <div className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
            <img className="md:w-1/2 md:order-1" src="/images/dolphin.png" alt="Dolphin Image" />
            <div className="flex flex-col md:order-0 lg:ml-20">
                <h4 className="text-2xl md:text-3xl medium leading-7 mb-4 ">Dolphin Pursuit</h4>
                <p className="text-sm md:text-base mb-2">Dolphin (also known as Mahi-mahi or dorado) is an action-packed, colorful fish that is great for both beginners and experienced anglers.  Their colors are amazing with hues of green, blue teal and silver and from head to tail.</p>
                <p className="text-sm md:text-base mb-2">Schools of dolphin can be found offshore in the Gulfstream waters year-round, but peak in the warmer summer months.</p>
                <p className="text-sm md:text-base mb-4">In Islamorada, we are known to have many Dolphin tournaments. If you are interested in entering one, let us know and we can help suggest a few.</p>
                <p className="text-sm md:text-base bold mb-4">Availability: May - August</p>
                <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                <Link href="/contact" className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Book A Charter</Link>
            </div>
        </div>
    )
}