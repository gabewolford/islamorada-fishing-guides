import Link from "next/link"
import { apercuBold } from "../../styles/fonts"

export default function Breadcrumbs() {
    return (
        <>
            <div className="flex flex-col items-start gap-3 mb-8 md:mb-16">
                <p className="text-sm"><Link href="/" className="hover:text-cyan-hover">Home</Link> / Guides</p>
                <h1 className={`text-3xl lg:text-5xl ${apercuBold.className}`}>Our Guides</h1>
            </div>
        </>
    )
}