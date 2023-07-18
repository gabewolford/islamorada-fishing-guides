import Link from 'next/link'

export default function PhotoLeftCard1() {
    return (
        <div className="fade-in fade-in show flex flex-col md:flex-row md:items-center gap-6 lg:gap-28 order-1 mb-16">
            <img className="md:w-1/2" src="/images/sailfish.png" alt="Sailfish Image" />
            <div className="flex flex-col items-start lg:mr-20">
                <h4 className="text-2xl md:text-3xl medium leading-7 mb-4 ">Sailfish Hunt</h4>
                <p className="text-sm md:text-base mb-2">The Sailfish often performs a dance across the water. This acrobatic billfish is exciting for all anglers and a tough challenger on light tackle.</p>
                <p className="text-sm md:text-base mb-2">Anglers from all around the world come in pursuit of their trophy sailfish since they are plentiful on the reef in Islamorada. The best season starts in November and continues through March as they migrate south following bait schools. The bite can be phenomenal after a winter cold front!</p>
                <p className="text-sm md:text-base mb-4">Other species of fish can also be targeted on the reef and offshore: Wahoo, Tuna, Dolphin &quot;Mahi Mahi&quot; to name a few.</p>
                <p className="text-sm md:text-base bold mb-4">Availability: November - April </p>
                <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                <Link href="/contact" className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Book A Charter</Link>
            </div>
        </div>
    )
}