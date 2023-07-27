import Link from 'next/link'
import { apercuBold, apercuMedium } from '../../styles/fonts'

export default function PhotoLeftCard() {

    return (
        <>
            <div className="fade-in show flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-0 md:mb-16">
                <img className="md:w-1/2" src="/images/wws-image-home.png" alt="World Wide Sportsman aerial view" />
                <div className="flex flex-col items-start lg:mr-20">
                    <h4 className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}>Meet us at World Wide Sportsman</h4>
                    <p className="text-sm md:text-base mb-2">Islamorada Fishing Guides & Charters will depart from the Worldwide Sportsman Bayside Marina on your day of charter. We charter out of the finest full service marina facilities in the Florida Keys for our customers.</p>
                    <p className="text-sm md:text-base mb-4">Before your trip, you can shop in the store for all your fishing needs. Relax at the Zane Grey Lounge or have a bite to eat the Islamorada Fish Company when you return from your day of fishing.</p>
                    <p className={`text-base md:text-lg mb-1 ${apercuBold.className}`}>Departure point:</p>
                    <p className="text-base md:text-lg">81576 Overseas Hwy</p>
                    <p className="text-base md:text-lg mb-4">Islamorada, FL 33036</p>
                    <Link 
                    href="https://goo.gl/maps/cnpM2RB43WTB36Lz6?coh=178573&entry=tt" 
                    target="_blank" 
                    className={`text-white bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit mb-8 ${apercuMedium.className}`}
                    >
                        Directions
                    </Link>
                </div>
            </div>
            <iframe className="w-full h-[300px] mb-16" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.494757366999!2d-80.64259988980129!3d24.915209942973732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d7375db39a3019%3A0x5ce5f1b3e65516fd!2sWorld%20Wide%20Sportsman%20Bayside%20Marina%20%26%20Boardwalk!5e0!3m2!1sen!2sus!4v1684519692009!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}