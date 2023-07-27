import Link from "next/link"
import { apercuMedium, apercuBold } from '../../../styles/fonts'

export default function PhotoLeftCard3() {

    return (
        <section className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
            <img className="md:w-1/2" src="/images/capesable.png" alt="Cape Sable Image" />
            <div className="flex flex-col items-start lg:mr-20">
                <h4 className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}>Cape Sable Day Trip</h4>
                <p className="text-sm md:text-base mb-4">Unwind on a full day adventure to the remote beaches of Cape Sable. This trip is a full day adventure. It is an hour running time to Cape Sable. Great place to walking the remote beaches, no people around. This is a gorgeous trip through the Everglades and Florida Bay through the mangrove islands. You will see all kinds of wild life. Cape Sable is the very southern tip of Florida in the Everglades you can only get there by boat. The boats can come fully stocked with fishing equipment (at your request) just in case you are feeling adventurous.</p>
                <p className={`text-sm md:text-base mb-4 ${apercuBold.className}`}>Availability: Fall & Winter months only</p>
                <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                <Link href="/contact" className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Book A Charter</Link>
            </div>
        </section>
    )
}