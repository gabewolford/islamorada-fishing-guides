import Link from "next/link";
import Observer from "../utils/Observer";
import { apercuBold } from "../../styles/fonts";
import Image from "next/image";

export default function ResortCard({ resortData }) {
  let resortName, resortPhoto, resortURL, resortBlurb, resortLogo;
  if (resortData) {
    resortName = <h3 className={apercuBold.className}>{resortData.name}</h3>;
    resortBlurb = <p>{resortData.blurb}</p>;
    resortPhoto = <Image src={resortData.mainImageUrl} alt={resortData.name} />;
    resortURL = resortData.url;
    resortLogo = (
      <Image
        className="absolute top-0 left-0 w-1/3 h-auto pt-5 pl-5"
        src={resortData.logoImageUrl}
        alt={resortData.name}
      />
    );
  }

  return (
    <>
      <Observer />
      <Link
        href={resortData.url}
        target="_blank"
        rel="noreferrer"
        className="hover-grow"
      >
        <div className="fade-in flex flex-col items-start gap-6 relative">
          {resortPhoto}
          {resortLogo}
          <div className="flex flex-col items-start">
            {resortName}
            {resortBlurb}
          </div>
        </div>
      </Link>
    </>
  );
}
