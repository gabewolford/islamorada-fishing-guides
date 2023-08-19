import Footer from "../../components/Footer/footer"
import Observer from "../../components/utils/Observer"
import Breadcrumbs from "../../components/ChartersComponents/Backcountry/Breadcrumbs"
import PhotoLeftCard1 from "../../components/ChartersComponents/Backcountry/PhotoLeftCard1"
import PhotoRightCard2 from "../../components/ChartersComponents/Backcountry/PhotoRightCard2"
import PhotoLeftCard3 from "../../components/ChartersComponents/Backcountry/PhotoLeftCard3"
import PhotoRightCard4 from "../../components/ChartersComponents/Backcountry/PhotoRightCard4"

export const metadata = {
    title: "Islamorada Fishing Guides | Backcounty Charters",
    icons: {
      icon: "/images/tan-favicon.png"
    },
    description: "Some of the premiere fishing areas in the Florida Keys are on the famous Islamorada flats. Bonefish, tarpon, redfish, snook, permit are the catch-of-the-day here, but expect barracuda, shark and other species to visit too.",
    keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
  }

export default function InshoreBackcountryPage() {

    return (
        <>
            <Observer />
            <main className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <section className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Breadcrumbs />
                    <PhotoLeftCard1 />
                    <PhotoRightCard2 />
                    <PhotoLeftCard3 />
                    <PhotoRightCard4 />
                </section>
            </main>
            <Footer />
        </>
    )      
}