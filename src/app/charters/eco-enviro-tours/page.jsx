import Observer from "../../components/utils/Observer"
import Breadcrumbs from "../../components/ChartersComponents/EcoEnviroTours/Breadcrumbs"
import PhotoLeftCard1 from "../../components/ChartersComponents/EcoEnviroTours/PhotoLeftCard1"
import PhotoRightCard2 from "../../components/ChartersComponents/EcoEnviroTours/PhotoRightCard2"
import PhotoLeftCard3 from "../../components/ChartersComponents/EcoEnviroTours/PhotoLeftCard3"

export const metadata = {
    title: "Islamorada Fishing Guides | Eco & Enviro Tours",
    icons: {
      icon: "/images/tan-favicon.png"
    },
    description: "More interested in exploring the famous Keys wildlife ABOVE the water than below? Then our Eco / Enviro Tours are ideal for you. Eco / Enviro Tours offer a terrific family experience that is not to be missed.",
    keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
  }

export default function EcoEnviroToursPage() {

    return (
        <>
            <Observer />
            <main className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <section className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Breadcrumbs />
                    <PhotoLeftCard1 />
                    <PhotoRightCard2 />
                    <PhotoLeftCard3 />
                </section>
            </main>
        </>
    )      
}