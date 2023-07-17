import Link from "next/link"

export default function Breadcrumbs() {
    return (
        <div className="flex flex-col items-start gap-3 mb-2">
            <p className="text-sm"><Link href="/" className="hover:text-cyan-hover">Home</Link> / Contact</p>
            <h1 className="text-3xl lg:text-5xl mx-auto bold">Contact Us</h1>
        </div>
    )
}