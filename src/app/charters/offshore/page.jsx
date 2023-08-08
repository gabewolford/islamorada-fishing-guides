import Footer from '../../components/Footer/footer'
import Observer from "../../components/utils/Observer"
import Breadcrumbs from "../../components/ChartersComponents/Offshore/Breadcrumbs"
import PhotoLeftCard1 from "../../components/ChartersComponents/Offshore/PhotoLeftCard1"
import PhotoRightCard2 from "../../components/ChartersComponents/Offshore/PhotoRightCard2"
import PhotoLeftCard3 from "../../components/ChartersComponents/Offshore/PhotoLeftCard3"

export const metadata = {
    title: "Islamorada Fishing Guides | Reef & Offshore Charters",
    icons: {
      icon: "/images/tan-favicon.png"
    },
    description: "World class adventures are found in the blue-waters of the Gulf Stream, just offshore from the Florida Keys. Dolphin, sailfish, wahoo, tuna, king mackerel, and marlin inhabit these 200 to 2,000 foot deep waters of the Atlantic Ocean.",
    keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
  }

export default function OffshorePage() {

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
            <Footer />
        </>
    )      
}