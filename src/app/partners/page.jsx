import Breadcrumbs from "../components/PartnersComponents/Breadcrumbs";
import Footer from "../components/Footer/footer";
import PartnerCard from "../components/PartnersComponents/PartnerCard";
import { client } from "../../../sanity/lib/client";
import Spinner from "../components/utils/Spinner";

export default async function PartnersPage() {
  const data = await client.fetch(`
    *[_type == "partner"]{
        name, 
        url, 
        "imageUrl": image.asset->url} 
        | order(name asc)
  `);

  const partners = data;

  return (
    <>
      <div className="mx-auto max-w-7xl pt-16 md:pt-24 pb-8 md:pb-0 animate__animated animate__fadeIn">
        <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
          <Breadcrumbs />
          {partners.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-16 justify-center">
              {partners.map((partner, i) => (
                <div key={i}>
                  <PartnerCard key={i} partnerData={partner} />
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
