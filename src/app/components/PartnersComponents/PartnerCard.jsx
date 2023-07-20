import Link from "next/link"
import { projectId, dataset } from "../../../../sanity/env";
import urlFromImage from '../../../../sanity/lib/image'

export default function PartnerCard({ partnerData }) {
    let partnerName, altName, partnerPhoto, partnerURL, assetReference
    if (partnerData) {
        altName = partnerData.name
        partnerName = <h3 className="text-sm text-center bold mt-2">{partnerData.name}</h3>
        assetReference = partnerData.image.asset._ref;
        partnerPhoto = `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetReference}`;
        partnerURL = partnerData.url
    }

    return (
        <>
            <Link
                href={partnerURL}
                target="_blank"
                rel="noreferrer"
                className="p-4 hover-grow"
            >
                <img src={partnerPhoto} alt={altName} className="mx-auto w-full"/>
                {partnerName}
            </Link>
        </>
    )
}