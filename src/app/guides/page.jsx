import Breadcrumbs from "../components/GuidesComponents/Breadcrumbs";
import Footer from "../components/Footer/footer";
import GuideCard from "../components/GuidesComponents/GuideCard";
import { client } from "../../../sanity/lib/client";
import Spinner from "../components/utils/Spinner";

export const metadata = {
  title: "Islamorada Fishing Guides | Our Guides",
  icons: {
    icon: "/images/tan-favicon.png",
  },
  description:
    "All of our guides are licensed captains with years of experience and local expertise. We welcome all experience levels, whether you’re a seasoned fly fisherman or a family looking to try something new.",
};

export default async function GuidesPage() {
  const data = await client.fetch(`
    *[_type == "guide"]{
      first_name, 
      last_name, 
      slug, 
      "imageUrl": featured_pic.asset->url, 
      backcountry, 
      offshore} 
      | order(last_name asc)
  `);

  const guides = data;

  return (
    <>
      <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
        <div className="mx-6 lg:mx-20 mb-16">
          <Breadcrumbs />
          {guides.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-14 justify-center">
              {guides.map((guide, i) => (
                <div key={i}>
                  <GuideCard key={i} guideData={guide} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-row justify-around">
              <Spinner />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
