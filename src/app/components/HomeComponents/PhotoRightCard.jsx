import Link from "next/link";
import { apercuMedium } from '../../../app/styles/fonts'
import Image from "next/image";
import wwsImage from '../../../../public/images/wws-image-home.png'

export default function PhotoRightCard() {
    return (
        <section className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 mx-6 lg:mx-20 order-1 mb-16">
            <Image 
                src={wwsImage}
                alt="World Wide Sportsman aerial view"
                className="md:w-1/2 md:order-1"
                placeholder="blur"
            />
            <div className="flex flex-col md:order-0 lg:ml-20">
                <h4 className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}>Meet us at World Wide Sportsman</h4>
                <p className="text-sm md:text-base mb-4">Our fishing charters begin and end at World Wide Sportsman Bayside Marina, the finest full service marina in the Florida Keys. Learn more about our marina and where to stay any play while in town.</p>
                <Link href="/explore-islamorada" className={`text-white ${apercuMedium.className} bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit`}>Explore Islamorada</Link>
            </div>
        </section>
    )
}