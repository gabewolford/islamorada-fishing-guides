'use client'

import { useState, useEffect } from "react"
import PartnerCard from "../components/PartnersComponents/PartnerCard"
import Partners from "../components/PartnersComponents/Partners"
import Breadcrumbs from "../components/PartnersComponents/Breadcrumbs"

export default function PartnersPage() {
    const [partners, setPartners] = useState([])

    useEffect(() => {
        setPartners(allPartners)
    })

    const allPartners = [
        {
        name: 'Amara Cay Resort',
        image: '/images/partners/amaracay.png',
        url: 'https://www.islamoradaresortcollection.com/amara-cay-resort'
        },
        {
        name: 'Bass Pro Shops',
        image: '/images/partners/basspro.png',
        url: 'https://www.basspro.com/'
        },
        {
        name: "Bonefish & Tarpon Trust",
        image: '/images/partners/tarpontrust.png',
        url: 'https://www.bonefishtarpontrust.org/'
        },
        {
        name: 'Caribbean Watersports',
        image: '/images/partners/caribbean-watersports.png',
        url: 'https://www.caribbeanwatersports.com/'
        },
        {
        name: 'Cheeca Lodge & Spa',
        image: '/images/partners/cheeca-logo.png',
        url: 'https://www.cheeca.com/'
        },
        {
        name: 'Costa Del Mar Sunglasses',
        image: '/images/partners/costa-sunglasses.png',
        url: 'https://www.costadelmar.com/'
        },
        {
        name: 'Diawa',
        image: '/images/partners/diawa.png',
        url: 'https://daiwa.us/'
        },
        {
        name: 'Everglades Coalition',
        image: '/images/partners/evergladescoalition.png',
        url: 'https://www.evergladescoalition.org/'
        },
        {
        name: 'Fish For Holly',
        image: '/images/partners/fish-for-holly.png',
        url: 'http://fishforholly.com/'
        },
        {
        name: 'Florida Bay Forever',
        image: '/images/partners/florida-bay-forever.png',
        url: 'https://www.floridabayforever.org/'
        },
        {
        name: 'Florida Fish & Wildlife Commission',
        image: '/images/partners/florida-fish-wildlife.png',
        url: 'https://myfwc.com/'
        },
        {
        name: 'Florida Keys Fishing Guides Association',
        image: '/images/partners/keysfishingguidesassoc.png',
        url: 'https://fkfga.org/'
        },
        {
        name: 'Grassy Flats Resort & Beach Club',
        image: '/images/partners/grassyflats.png',
        url: 'https://www.grassyflats.com/'
        },
        {
        name: 'Islamorada Charter Boat Association',
        image: '/images/partners/charterboatassoc.png',
        url: 'https://www.islamoradacharterboatassociation.org/'
        },
        {
        name: 'Islamorada Chamber of Commerce',
        image: '/images/partners/islamorada-chamber.png',
        url: 'https://islamoradachamber.com/'
        },
        {
        name: 'Islamorada Times',
        image: '/images/partners/islamorada-times.png',
        url: 'https://www.islamoradatimes.com/'
        },
        {
        name: "Mangrove Mike's",
        image: '/images/partners/mangrove-mikes.png',
        url: 'https://www.mangrovemikes.com/'
        },
        {
        name: "Markey Marine Service",
        image: '/images/partners/markeys-marine.png',
        url: 'https://www.markeymarine.com/'
        },
        {
        name: "Maverick Boats",
        image: '/images/partners/maverick.png',
        url: 'https://www.maverickboats.com/'
        },
        {
        name: "Mercury Marine",
        image: '/images/partners/mercury-marine.png',
        url: 'https://www.mercurymarine.com/'
        },
        {
        name: "Penn Fishing Gear",
        image: '/images/partners/penn.png',
        url: 'https://www.pennfishing.com/'
        },
        {
        name: "Salt Water Sportsman",
        image: '/images/partners/saltwater-sportsman.png',
        url: 'https://www.saltwatersportsman.com/'
        },
        {
        name: "Stray Cat Charters",
        image: '/images/partners/straycat-charters.png',
        url: 'https://www.straycatscharters.com/'
        },
        {
        name: "Upper Keys Rotary Club",
        image: '/images/partners/upper-keys-rotary.png',
        url: 'https://keysrotary.org/'
        },
        {
        name: 'World Wide Sportsman',
        image: '/images/partners/wws-logo.png',
        url: 'https://www.basspro.com/'
        },
    ]

    let partnersList
    if (allPartners.length > 0) {
      partnersList = partners
        .map((partner, i) => <PartnerCard key={i} partnerData={partner} />)
    }

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 pb-8 md:pb-0 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Breadcrumbs />
                    <Partners partnersList={partnersList}/>
                </div>
            </div>

        </>
    )      
}
