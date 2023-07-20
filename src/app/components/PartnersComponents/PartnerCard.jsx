import Link from "next/link";

export default function PartnerCard({ partnerData }) {
    let partnerName, partnerPhoto, partnerURL;
    if (partnerData) {
        partnerName = <h3 className="text-sm text-center bold mt-2">{partnerData.name}</h3>;
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
