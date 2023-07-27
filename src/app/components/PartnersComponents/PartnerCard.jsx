import Link from "next/link";
import { apercuBold } from "../../styles/fonts";

export default function PartnerCard({ partnerData }) {
    let partnerName, partnerPhoto, partnerURL;
    if (partnerData) {
        partnerName = <h3 className={`text-sm text-center mt-2 ${apercuBold.className}`}>{partnerData.name}</h3>;
        partnerPhoto = <img src={partnerData.imageUrl} alt={partnerData.name} className="mx-auto w-full" />;
        partnerURL = partnerData.url;
    }

    return (
        <>
            <Link
                href={partnerURL}
                target="_blank"
                rel="noreferrer"
                className="p-4 hover-grow"
            >
                {partnerPhoto}
                {partnerName}
            </Link>
        </>
    );
}
