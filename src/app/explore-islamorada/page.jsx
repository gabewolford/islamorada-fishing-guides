import Breadcrumbs from "../components/ExploreComponents/Breadcrumbs";
import PhotoLeftCard from "../components/ExploreComponents/PhotoLeftCard";
import { apercuBold } from "../styles/fonts";
import Footer from "../components/Footer/footer";
import { client } from "../../../sanity/lib/client";
import Spinner from "../components/utils/Spinner";
import ResortCard from "../components/ExploreComponents/ResortCard";

export const metadata = {
  title: "Islamorada Fishing Guides | Explore Islamorada",
  icons: {
    icon: "/images/tan-favicon.png",
  },
  description:
    "Experience the ultimate Florida Keys fishing adventure. Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.",
  keywords:
    "florida keys, islamorada, florida, fishing, sport fishing, sportfishing, guides, charters, fishing charters, fishing guides, tours, florida bay, gulf stream, inshore, backcountry, offshore, reef, tarpon, sailfish, bonefish, snook, permit, redfish, trout, mahi-mahi, dorado, dolphin, grouper, snapper, hogfish, barracuda, sharks, everglades, sandbar, flats, alligator lighthouse, cape sable",
};

export default async function ExploreIslamoradaPage() {
  const data = await client.fetch(`
    *[_type == "resort"]{
      name, 
      blurb, 
      url, 
      "mainImageUrl": main_photo.asset->url, 
      "logoImageUrl": logo.asset->url} 
      | order(name asc)
  `);

  const resorts = data;

  return (
    <>
      <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
        <div className="mx-6 lg:mx-20 mb-16">
          <Breadcrumbs />
          <PhotoLeftCard />
          <h3 className={`text-2xl md:text-3xl ${apercuBold.className} mb-8`}>
            Where to stay
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-y-16 justify-center">
            {resorts.length > 0 ? (
              resorts.map((resort, i) => (
                <ResortCard key={i} resortData={resort} />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
