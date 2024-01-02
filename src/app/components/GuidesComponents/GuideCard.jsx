import Link from "next/link";
import Image from "next/image";
import { apercuBold } from "../../styles/fonts";

export default function GuideCard({ guideData }) {
  let guideName, guidePhoto, badges;
  if (guideData) {
    guideName = (
      <h3 className={`text-md mt-2 text-center ${apercuBold.className}`}>
        Capt. {guideData.first_name}&nbsp;{guideData.last_name}
      </h3>
    );
    guidePhoto = (
      <Image
        src={guideData.imageUrl}
        alt={guideData.first_name + " " + guideData.last_name}
        height={300}
        width={300}
      />
    );
    if (guideData.backcountry === true && guideData.offshore === true) {
      badges = (
        <h5 className="text-center">
          <span className="text-center text-xs bg-offshore-420 text-white px-2 mr-1 py-1 rounded-full">
            Offshore
          </span>
          <span className="text-center text-xs bg-backcountry-420 text-white px-2 py-1 rounded-full">
            Backcountry
          </span>
        </h5>
      );
    } else if (guideData.backcountry === true) {
      badges = (
        <h5 className="text-center">
          <span className="text-center text-xs bg-backcountry-420 text-white px-2 py-1 rounded-full">
            Backcountry
          </span>
        </h5>
      );
    } else if (guideData.offshore === true) {
      badges = (
        <h5 className="text-center">
          <span className="text-center text-xs bg-offshore-420 text-white px-2 mr-1 py-1 rounded-full">
            Offshore
          </span>
        </h5>
      );
    }
  }

  return (
    <Link href={`/guides/${guideData.slug}`} className="p-4 hover-grow">
      {guidePhoto}
      {guideName}
      {badges}
    </Link>
  );
}
