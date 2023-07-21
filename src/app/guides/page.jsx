import Breadcrumbs from "../components/GuidesComponents/Breadcrumbs"
import GetGuides from '../api/GetGuides'

export const metadata = {
  title: "Islamorada Fishing Guides | Our Guides",
  icons: {
    icon: "/images/tan-favicon.png"
  },
  description: "All of our guides are licensed captains with years of experience and local expertise. We welcome all experience levels, whether you’re a seasoned fly fisherman or a family looking to try something new."
}

export default function GuidesPage() {

    return (
          <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
              <div className="mx-6 lg:mx-20 mb-16">
                <Breadcrumbs />
                <GetGuides />
              </div>
          </div>
    )
}