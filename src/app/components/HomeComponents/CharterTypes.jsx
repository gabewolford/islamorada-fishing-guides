import Link from "next/link"
import Image from "next/image"
import localFont from 'next/font/local'

const apercu = localFont({
    src: [
      {
        path: '../../fonts/apercu-medium-pro.woff2',
        weight: '500',
        style: 'normal',
      },
    ],
  })

export default function CharterTypes() {
    return (
        <section className="mx-6 lg:mx-20 mb-16">
                <h2 className={`text-2xl medium mb-6 ${apercu.className}`}>Types of charters</h2>
                <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 md:flex-wrap md:gap-6 items-center self-stretch">
                    <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                        <div className="w-2/5 md:w-auto">
                            <Image
                                src="/images/backcountry-image-home.png"
                                height={357}
                                width={357}
                                alt="Backcountry snook picture"
                            >
                            </Image>
                        </div>
                        <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                            <h3 className={`text-base md:text-lg medium ${apercu.className}`}>Backcountry & Inshore</h3>
                            <p className="text-md">Snook, redfish, tarpon and more</p>
                            <Link href="/charters/inshore-backcountry" className={`text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-md medium ${apercu.className}`}>Explore Inshore</Link>
                        </div>
                    </div>
                    <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                        <div className="w-2/5 md:w-auto">
                            <Image
                                src="/images/offshore-image-home.png"
                                height={357}
                                width={357}
                                alt="Offshore mahi picture"
                            >
                            </Image>
                        </div>
                        <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                            <h3 className={`text-base md:text-lg medium ${apercu.className}`}>Reef & Offshore</h3>
                            <p className="text-md">Sailfish, wahoo, tuna and more</p>
                            <Link href="/charters/offshore" className={`text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-md medium ${apercu.className}`}>Explore Offshore</Link>
                        </div>
                    </div>
                    <div className="flex items-center md:flex-col self-stretch md:mb-6 gap-4">
                        <div className="w-2/5 md:w-auto">
                            <Image
                                src="/images/ecotours-image-home.png"
                                height={357}
                                width={357}
                                alt="Eco Tours Alligator Lighthouse picture"
                            >
                            </Image>
                        </div>
                        <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                            <h3 className={`text-base md:text-lg medium ${apercu.className}`}>Eco & Enviro Tours</h3>
                            <p className="text-md">Backcountry and beach trips</p>
                            <Link href="/charters/eco-enviro-tours" className={`text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-md medium ${apercu.className}`}>Explore Eco Tours</Link>
                        </div>
                    </div>
                </div>
        </section>
    )
}