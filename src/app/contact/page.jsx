import Breadcrumbs from "../components/ContactComponents/Breadcrumbs"
import ContactForm from "../components/ContactComponents/ContactForm"
import Footer from "../components/Footer/footer"

export const metadata = {
    title: "Islamorada Fishing Guides | Contact Us",
    icons: {
      icon: "/images/tan-favicon.png"
    },
    description: "Not sure which charter or guide is right for you? Have questions? Talk with our experts who will help you plan and book your perfect Florida Keys fishing trip today!",
    keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
  }

export default function ContactPage() {

    return (
        <>
            <main className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-8 md:mb-16">
                    <Breadcrumbs />
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </>
    )      
}