import Breadcrumbs from "../../components/ContactComponents/Breadcrumbs"
import { apercuMedium } from "../../styles/fonts"

export const metadata = {
    title: "Islamorada Fishing Guides | Contact Us",
    icons: {
      icon: "/images/tan-favicon.png"
    },
    description: "Not sure which charter or guide is right for you? Have questions? Talk with our experts who will help you plan and book your perfect Florida Keys fishing trip today!",
    keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
  }

export default function ContactConfirmationPage() {
    return (
        <>
            <main className="mx-auto max-w-7xl pt-16 md:pt-24 pb-12 md:pb-0">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Breadcrumbs />
                    <section className="mx-auto w-full md:w-1/3 animate__animated animate__pulse">
                        <h6 className={`text-center text-lg pt-1 ${apercuMedium}`}>Thanks for reaching out!</h6>
                        <h6 className="text-center text-lg pt-2">Your inquiry has been submitted successfully and you will be recieving a confirmation at the email you provided.</h6>
                        <h5 className={`text-2xl text-center pt-8 ${apercuMedium}`}>We&apos;ll be in touch :)</h5>
                    </section>
                </div>
            </main>
        </>
    )
}