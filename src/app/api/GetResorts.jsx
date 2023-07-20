'use client'

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../sanity/env";
import { useState, useEffect } from "react";
import ResortCard from "../components/ExploreComponents/ResortCard"

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

async function fetchResorts() {
  try {
    const resortsQuery = `*[_type == "resort"]{name, blurb, url, "mainImageUrl": main_photo.asset->url, "logoImageUrl": logo.asset->url} | order(name asc)`;
    const data = await client.fetch(resortsQuery);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

export default function GetResorts() {
  const [resorts, setResorts] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      const resortData = await fetchResorts();
      setResorts(resortData); 
    }
    fetchData();
  }, []);

    let resortsList = <h3>Loading resorts...</h3>
    if (resorts.length > 0) {
      resortsList = resorts
        .map((resort, i) => <ResortCard key={i} resortData={resort} />)
    }

  return (
    <>
      <h3 className="text-2xl md:text-3xl bold mb-8">Where to stay</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-y-16 justify-center">
          {resortsList}
      </div>
    </>
  )
}
