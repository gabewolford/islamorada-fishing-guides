import Link from 'next/link'

export default function PhotoLeftCard3() {
    return (
        <section className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1">
            <img className="md:w-1/2" src="/images/ecotours-image-home.png" alt="Backcountry Image" />
            <div className="flex flex-col lg:mr-20">
                <h4 className="text-2xl md:text-3xl medium leading-7 mb-4 ">Eco & Enviro Tours</h4>
                <p className="text-sm md:text-base mb-4">More interested in exploring the famous Keys wildlife ABOVE the water than below? Then our Eco / Enviro Tours are ideal for you. Eco / Enviro Tours offer a terrific family experience that is not to be missed.</p>
                <Link href="/charters/eco-enviro-tours" className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">View Tour Packages</Link>
            </div>
        </section>
    )
}