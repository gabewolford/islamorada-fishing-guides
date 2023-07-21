'use client'

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../sanity/env";
import { useState, useEffect } from "react";
import GuideCard from "../components/GuidesComponents/GuideCard"
import Spinner from "../components/utils/Spinner";

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

async function fetchGuides() {
  try {
    const guidesQuery  = `*[_type == "guide"]{first_name, last_name, slug, "imageUrl": featured_pic.asset->url, backcountry, offshore} | order(last_name asc)`;
    const data = await client.fetch(guidesQuery);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

export default function GetGuides() {
  const [guides, setGuides] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      const guideData = await fetchGuides();
      setGuides(guideData); 
    }
    fetchData();
  }, []);


  return (
    <>
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
    </>
  )
}
