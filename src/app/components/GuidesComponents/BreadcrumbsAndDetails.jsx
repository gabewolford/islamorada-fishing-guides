import Link from "next/link"

export default function BreadcrumbsAndDetails({ guideData }) {
    let captainName, businessName, guideType
    if (guideData) {
        captainName = guideData.name
        businessName = guideData.business_name
        if (guideData.backcountry && guideData.offshore) {
            guideType = 'Backcountry & Offshore Guide'
        } else if (guideData.backcountry) {
            guideType = 'Backcountry Guide'
        } else if (guideData.offshore) {
            guideType = 'Offshore Guide'
        }
    }


    return (
        <>
            <div className="flex flex-col items-start gap-3 mb-3">
                <p className="text-sm"><Link href="/" className="hover:text-cyan-hover">Home</Link> / <Link href="/guides" className="hover:text-cyan-hover">Guides</Link> / {captainName}</p>
            </div>
            <div className="text-center mb-8">
                {guideType && <h4 className="bold mb-3">{guideType}</h4>}
                <h1 className="text-3xl lg:text-5xl bold mb-3">Capt. {captainName}</h1>
                {businessName && <h5>of {businessName}</h5>}
            </div>
        </>
    )
}