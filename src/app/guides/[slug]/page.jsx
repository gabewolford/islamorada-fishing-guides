'use client'

import { useEffect } from "react"
import BreadcrumbsAndDetails from "../../components/GuidesComponents/BreadCrumbsAndDetails"
import GuideFacts from "../../components/GuidesComponents/GuideFacts"
import { useParams } from "next/navigation"


export default function GuideDetailsPage({ guideData, setDetailPage, guides }) {
    // const { slug } = useParams()

    // useEffect(() => {
    //     const updateDetailPage = () => {
    //       for (let i = 0; i < guides.length; i++) {
    //         if (guides[i].slug === slug) {
    //           setDetailPage(guides[i])
    //           break;
    //         }
    //       }
    //     };
    
    //     if (guideData) {
    //       localStorage.setItem('guide', JSON.stringify(guideData));
    //     } else {
    //       const storedGuide = JSON.parse(localStorage.getItem('guide'));
    //       setDetailPage(storedGuide);
    //     }
    
    //     updateDetailPage();
    
    //   }, [slug, guides, guideData, setDetailPage]);

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-16">
                    <BreadcrumbsAndDetails guideData={guideData} />
                    <GuideFacts guideData={guideData} />
                </div>
            </div>
        </>
    )
}