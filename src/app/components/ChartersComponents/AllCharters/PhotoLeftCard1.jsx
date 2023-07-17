import Link from 'next/link'

export default function PhotoLeftCard1() {
    return (
        <div className="fade-in show flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
            <img className="md:w-1/2" src="/images/backcountry-image-home.png" alt="Backcountry Image" />
            <div className="flex flex-col lg:mr-20">
                <h4 className="text-2xl md:text-3xl medium leading-7 mb-4 ">Backcountry & Inshore</h4>
                <p className="text-sm md:text-base mb-4">Some of the premiere fishing areas in the Florida Keys are on the famous Islamorada flats. Bonefish, tarpon, redfish, snook, permit are the catch-of-the-day here, but expect barracuda, shark and other species to visit too.</p>
                <Link href="/charters/inshore-backcountry" className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">View Inshore Packages</Link>
            </div>
        </div>
    )
}