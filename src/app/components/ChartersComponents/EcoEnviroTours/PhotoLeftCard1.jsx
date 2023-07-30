import Link from 'next/link'
import { apercuMedium, apercuBold } from '../../../styles/fonts'

export default function PhotoLeftCard1() {
    return (
        <section className="fade-in show flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
            <img className="md:w-1/2" src="/images/everglades.png" alt="Everglades Image" />
            <div className="flex flex-col items-start lg:mr-20">
                <h4 className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}>Florida Bay & The Everglades</h4>
                <p className="text-sm md:text-base mb-2">This option is for your if you prefer not to fish, but would like to enjoy the backcountry waters. Our guides will take you on a tour through the Florida Bay and The Everglades.</p>
                <p className="text-sm md:text-base mb-4">Only a one-hour boat ride from Islamorada to Flamingo Park, enjoy the serenity and beauty of the Florida Everglades which features more than 360 species of birds and over 150 species of reptiles and amphibians.</p>
                <p className={`text-sm md:text-base mb-4 ${apercuBold.className}`}>Availability: Types of seasonal tours offered all year</p>
                <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                <Link href="/contact" className={`text-white bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit ${apercuMedium.className}`}>Book A Charter</Link>
            </div>
        </section>
    )
}