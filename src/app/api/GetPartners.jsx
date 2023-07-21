'use client'

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../sanity/env";
import { useState, useEffect } from "react";
import PartnerCard from "../components/PartnersComponents/PartnerCard"
import Spinner from "../components/utils/Spinner";

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

async function fetchPartners() {
  try {
    const partnersQuery = `*[_type == "partner"]{name, url, "imageUrl": image.asset->url} | order(name asc)`;
    const data = await client.fetch(partnersQuery);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

export default function GetPartners() {
  const [partners, setPartners] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      const partnerData = await fetchPartners();
      setPartners(partnerData); 
    }
    fetchData();
  }, []);

  return (
    <>
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
    </>
  )
}
