import Link from "next/link";

export default function PhotoLeftCard() {
    return (
        <section className="fade-in show flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mx-6 lg:mx-20 mb-16">
            <img className="md:w-1/2" src="/images/book-directly-image-home.png" alt="Tarpon Image" />
            <div className="flex flex-col items-start lg:mr-20">
                <h4 className="text-2xl md:text-3xl medium leading-7 mb-4 ">Book directly with one of our local guides</h4>
                <p className="text-sm md:text-base mb-4">All of our guides are licensed captains with years of experience and local expertise. We welcome all experience levels, whether you’re a seasoned fly fisherman or a family looking to try something new.</p>
                <Link href="/guides" className="text-white medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Meet Our Guides</Link>
            </div>
        </section>
    )
}