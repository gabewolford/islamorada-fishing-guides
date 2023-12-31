import Link from 'next/link'
import Image from 'next/image'
import { apercuMedium } from '../../../app/styles/fonts'
import heroImageHome from '../../../../public/images/hero-image-home.png'

export default function Hero() {
    return (
        <>
            <section className="flex flex-col-reverse md:flex-row items-center gap-6 order-1 mb-16 md:mx-6 lg:mx-20">
                <div className="flex order-1 w-full md:w-1/2">
                    <Image
                        src={heroImageHome}
                        alt='Home hero image'
                        priority={true}
                        placeholder='blur'
                    >
                    </Image>
                </div>
                <div className="flex flex-col md:w-1/2 order-0 mx-6 md:ml-0">
                    <h1 className={`text-3xl lg:text-6xl mb-4 leading-tight md:tracking-tight ${apercuMedium.className}`}>Experience the ultimate Florida&nbsp;Keys fishing adventure.</h1>
                    <h2 className="mb-4 lg:text-lg leading-normal">Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.</h2>
                    <Link href="/charters" className={`text-white ${apercuMedium.className} bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit`}>View Fishing Charters</Link>
                </div> 
            </section>
        </>
    )
}