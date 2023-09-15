import Link from 'next/link'
import Image from 'next/image'
import { apercuMedium } from '../../../styles/fonts'
import backcountryImage from '../../../../../public/images/backcountry-image-home.png'

export default function PhotoLeftCard1() {
    return (
        <section className="fade-in show flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
            <Image 
                className='md:w-1/2' 
                src={backcountryImage} 
                alt='Backcountry image' 
                placeholder='blur'
            >
            </Image>
            <div className="flex flex-col lg:mr-20 md:w-1/2">
                <h4 className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}>Backcountry & Inshore</h4>
                <p className="text-sm md:text-base mb-4">Some of the premiere fishing areas in the Florida Keys are on the famous Islamorada flats. Bonefish, tarpon, redfish, snook, permit are the catch-of-the-day here, but expect barracuda, shark and other species to visit too.</p>
                <Link href="/charters/inshore-backcountry" className={`text-white bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit ${apercuMedium.className}`}>View Inshore Packages</Link>
            </div>
        </section>
    )
}