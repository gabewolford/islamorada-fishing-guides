import Link from 'next/link'
import { apercuMedium } from '../../../styles/fonts'
import Image from 'next/image'
import offshoreImage from '../../../../../public/images/offshore-image-home.png'

export default function PhotoRightCard2() {
    return (
        <section className="fade-in flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
            <Image 
                className='md:w-1/2 order-1' 
                src={offshoreImage} 
                alt='Offshore image' 
                placeholder='blur'
            >
            </Image>
            <div className="flex flex-col lg:ml-20 order-0">
                <h4 className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}>Reef & Offshore</h4>
                <p className="text-sm md:text-base mb-4">World class adventures are found in the blue-waters of the Gulf Stream, just offshore from the Florida Keys. Dolphin, sailfish, wahoo, tuna, king mackerel, and marlin inhabit these 200 to 2,000 foot deep waters of the Atlantic Ocean.</p>
                <Link href="/charters/offshore" className={`text-white bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit ${apercuMedium.className}`}>View Offshore Packages</Link>
            </div>
        </section>
    )
}