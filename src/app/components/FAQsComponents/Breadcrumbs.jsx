import Link from "next/link"

export default function Breadcrumbs() {
    return (
        <div className="flex flex-col items-start gap-3 mb-8 md:mb-16">
            <p className="text-sm"><Link href="/" className="hover:text-cyan-hover">Home</Link> / FAQs</p>
            <h1 className="text-3xl lg:text-5xl bold">Frequently Asked Questions</h1>
        </div>
    )
}