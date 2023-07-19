import Observer from '../components/utils/Observer'
import Breadcrumbs from '../components/ChartersComponents/AllCharters/Breadcrumbs'
import PhotoLeftCard1 from '../components/ChartersComponents/AllCharters/PhotoLeftCard1'
import PhotoRightCard2 from '../components/ChartersComponents/AllCharters/PhotoRightCard2'
import PhotoLeftCard3 from '../components/ChartersComponents/AllCharters/PhotoLeftCard3'

export const metadata = {
  title: "Islamorada Fishing Guides | All Charters",
  icons: {
    icon: "/images/tan-favicon.png"
  },
  description: "Experience the ultimate Florida Keys fishing adventure. Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.",
  keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
}

export default function AllChartersPage() {

    return (
        <>
            <Observer />
            <main className="mx-auto max-w-7xl pt-16 md:pt-24 pb-12 md:pb-0 animate__animated animate__fadeIn">
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