import Breadcrumbs from "../components/ExploreComponents/Breadcrumbs"
import PhotoLeftCard from "../components/ExploreComponents/PhotoLeftCard"
import GetResorts from "../api/GetResorts"

export const metadata = {
  title: "Islamorada Fishing Guides | Explore Islamorada",
  icons: {
    icon: "/images/tan-favicon.png"
  },
  description: "Experience the ultimate Florida Keys fishing adventure. Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.",
  keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
}

export default function ExploreIslamoradaPage() {

    return (
      <>
        <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
            <div className="mx-6 lg:mx-20 mb-16">
                <Breadcrumbs />
                <PhotoLeftCard />
                <GetResorts />
            </div>
        </div>
      </>
    )
}