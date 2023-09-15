import Link from 'next/link'
import { apercuMedium, apercuBold } from '../../../styles/fonts'
import Image from 'next/image'
import tarponPhoto from '../../../../../public/images/tarpon.png'

export default function PhotoLeftCard1() {
    return (
        <div className="fade-in show flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
            <Image
                src={tarponPhoto}
                alt='Tarpon photo'
                className='md:w-1/2'
                placeholder='blur'
            >
            </Image>
            <div className="flex flex-col items-start lg:mr-20 md:w-1/2">
                <h4 className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}>Tarpon</h4>
                <p className="text-sm md:text-base mb-2">Also known as the Silver King, the Tarpon is known to jump and put on a memorable show. These fish have an impressive fight that will challenge any angler.</p>
                <p className="text-sm md:text-base mb-4">Tarpon season begins in March when large traveling fish begin to come through. April, May, and June are the peak time with the season winding down in July and August. Although Tarpon fishing is best in the spring, smaller local fish can be caught year-round.</p>
                <p className={`text-sm md:text-base mb-4 ${apercuBold.className}`}>Availability: March through August</p>
                <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                <Link href="/contact" className={`text-white bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit ${apercuMedium.className}`}>Book A Charter</Link>
            </div>
        </div>
    )
}