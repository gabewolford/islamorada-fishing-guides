import Observer from './components/utils/Observer'
import Hero from './components/HomeComponents/Hero'
import CharterTypes from './components/HomeComponents/CharterTypes'
import PhotoLeftCard from './components/HomeComponents/PhotoLeftCard'
import PhotoRightCard from './components/HomeComponents/PhotoRightCard'

export const metadata = {
  title: "Islamorada Fishing Guides & Charters | Florida Keys",
  icons: {
    icon: "/images/tan-favicon.png"
  },
  description: "Experience the ultimate Florida Keys fishing adventure. Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.",
  keywords: "florida keys fishing trips, florida keys fishing guides, florida keys fishing guides, islamorada fishing guides, islamorada fishing charters, florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
}

export default function HomePage() {

  return (
    <>
      <Observer />
      <main className="mx-auto max-w-7xl pt-4 md:pt-24 animate__animated animate__fadeIn">
        <Hero />
        <CharterTypes />
        <PhotoLeftCard />
        <PhotoRightCard />
      </main>
    </>
  )
}
