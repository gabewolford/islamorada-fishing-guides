import Link from 'next/link'

export default function PhotoRightCard4() {
    return (
        <>
            <div className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
                <img className="md:w-1/2 md:order-1" src="/images/sunset.png" alt="Sunset Image" />
                <div className="flex flex-col md:order-0 lg:ml-20">
                    <h4 className="text-2xl md:text-3xl medium leading-7 mb-4 ">Sunset Tarpon</h4>
                    <p className="text-sm md:text-base mb-2">Watch a tarpon crash the baits with its impressive jumps as the sun sets into the warm Florida evening. Catching the might Silver King at night is an exciting and rewarding experience.</p>
                    <p className="text-sm md:text-base mb-2">Don&apos;t be fooled by imitators... this is NOT just your average Tarpon trip where we anchor up nearby the marina. Our expert guides will take you to the best night Tarpon fishing spots in the Florida Keys.</p>
                    <p className="text-sm md:text-base mb-4">This is a 4-hour trip, departing from World Wide Sportsman at 4:30 PM.</p>
                    <p className="text-sm md:text-base bold mb-4">Availability: March through August</p>
                    <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                    <Link href="/contact" className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Book A Charter</Link>
                </div>
            </div>
        </>
    )
}