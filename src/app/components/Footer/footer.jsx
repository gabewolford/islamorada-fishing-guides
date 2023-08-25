import Link from "next/link"
import Image from "next/image"
import { apercuMedium } from '../../../app/styles/fonts'

export default function Footer() {
    return (
        <footer className="w-full mx-auto bg-cyan-69">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="relative w-full">
                    <img className='h-[350px] w-full' src="/images/water.png" alt="Contact Us" />
                </div>
                <div className="absolute px-6 lg:px-44 flex flex-col text-center">
                    <h4 className={`text-2xl md:text-3xl text-white mb-4 ${apercuMedium.className}`}>Plan your custom fishing charter with our help.</h4>
                    <h5 className="text-base md:text-lg text-white mb-4">Not sure which charter or guide is right for you? Have questions? Talk with our experts who will help you plan and book your perfect Florida Keys fishing trip today!</h5>
                    <Link href="/contact" className={`${apercuMedium.className} text-cyan-420 bg-white hover:bg-cyan-hover hover:text-white transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 block w-fit mx-auto`}>Contact Us</Link>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-10 sm:px-6 lg:px-8">
                <div className="col-span-full lg:col-span-1">
                    <Link className="flex-none" href="/" aria-label="Brand">
                        <Image
                            src="/images/logo-footer.png"
                            height={100}
                            width={200}
                            alt="Islamorada Fishing Guides & Charters logo"
                        >
                        </Image>
                    </Link>
                </div>
                <div className="grid space-y-3 text-sm">
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/charters">Fishing Charters</Link></p>
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/charters/inshore-backcountry">Backcountry & Inshore</Link></p>
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/charters/offshore">Reef & Offshore</Link></p>
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/charters/eco-enviro-tours">Eco & Enviro Tours</Link></p>
                </div>
                <div className="grid space-y-3 text-sm">
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/guides">Guides</Link></p>
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/explore-islamorada">Explore Islamorada</Link></p>
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/frequently-asked-questions">FAQs</Link></p>
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/partners">Our Partners</Link></p>
                </div>
                <div className="col-span-full lg:col-span-1 grid space-y-3 text-sm">
                    <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" href="/contact">Contact Us</Link></p>
                    <p className="inline-flex gap-x-2 !text-white">Call us today <span className="text-white bold">305-394-7484</span></p>
                    <p className="inline-flex gap-x-2 text-white"> 
                        <Link href="https://www.facebook.com/islamoradafishingguidesandcharters" target="_blank" className="mr-2">
                            <span>
                                <Image
                                    src="/images/facebook.png"
                                    alt="Facebook logo"
                                    height={32}
                                    width={32}
                                >
                                </Image>
                                
                            </span>
                        </Link>
                        <Link href="https://www.instagram.com/islamoradafishingguides/" target="_blank">
                            <span>
                                <Image
                                    src="/images/instagram.png"
                                    alt="Instagram logo"
                                    height={32}
                                    width={32}
                                >
                                </Image>
                            </span>
                        </Link>
                    </p>
                </div>
                <div className="col-span-full">
                    <p className="mt-3 text-xs text-muted-420">© 2023 Islamorada Fishing Guides & Charters</p>
                    <p className="mt-3 text-xs text-muted-420">Designed by <a className="hover:text-white" href="https://smallhound.co" target="_blank">Small Hound.</a> Developed by <a className="hover:text-white" href="https://biiigstretch.studio" target="_blank">Biiig Stretch.</a></p>
                </div>
            </div>
        </footer>
    )
}