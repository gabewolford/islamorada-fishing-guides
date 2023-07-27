import Link from "next/link"
import { apercuBold } from '../../../styles/fonts'

export default function Breadcrumbs() {
    return (
        <div className="flex flex-col items-start gap-3 mb-8 md:mb-16">
            <p className="text-sm"><Link href="/" className="hover:text-cyan-hover">Home</Link> / <Link href="/charters" className="hover:text-cyan-hover">Charters</Link> / Eco & Enviro Tours</p>
            <h1 className={`text-3xl lg:text-5xl ${apercuBold.className}`}>Eco & Enviro Tour Packages</h1>
        </div>
    )
}