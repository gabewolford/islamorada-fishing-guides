'use client'

import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../sanity/env";
import { useState, useEffect } from "react";
import GuideFacts from "../components/GuidesComponents/GuideFacts";
import BreadcrumbsAndDetails from "../components/GuidesComponents/BreadcrumbsAndDetails";
import Spinner from "../components/utils/Spinner"
import { useParams } from 'next/navigation';

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn,
});

export default function GetGuideDetails() {
  const { slug } = useParams();

  const [guideDetails, setGuideDetails] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      if (!slug) {
        setGuideDetails([]);
        return;
      }

      try {
        const guideDetailsQuery = `*[_type == "guide" && slug == '${slug}']{first_name, last_name, slug, "imageUrl": featured_pic.asset->url, backcountry, offshore, business_name, about_me, boats, dock, specialty, fun_fact, days_off} | order(last_name asc)`;
        const data = await client.fetch(guideDetailsQuery);
        setGuideDetails(data);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
        setGuideDetails([]);
      }
    }

    fetchData();
  }, [slug]);

  useEffect(() => {
    localStorage.setItem('guide', JSON.stringify(guideDetails));
  }, [guideDetails]);

  useEffect(() => {
    const storedGuide = JSON.parse(localStorage.getItem('guide'));
    if (storedGuide && storedGuide.length > 0) {
      setGuideDetails(storedGuide);
    }
  }, []);
  
  return (
    <>
      {guideDetails.length > 0 ? (
        <>
          {guideDetails.map((guide, i) => (
            <div key={i}>
              <BreadcrumbsAndDetails guideData={guide} />
              <GuideFacts guideData={guide} />
            </div>
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
