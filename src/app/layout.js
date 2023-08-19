import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Observer from './components/utils/Observer'
import { apercuRegular } from '../app/styles/fonts'
import 'animate.css'

export const metadata = {
  title: "Islamorada Fishing Guides & Charters | Florida Keys",
  icons: {
    icon: "/images/tan-favicon.png"
  },
  description: "Experience the ultimate Florida Keys fishing adventure. Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.",
  keywords: "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable"
}

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={apercuRegular.className} >
      <Observer />
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  )
}
