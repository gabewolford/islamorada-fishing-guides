import Link from "next/link";
import { apercuMedium, apercuBold } from "../../../styles/fonts";
import Image from "next/image";
import reefFishing from "../../../../../public/images/reef-fishing.png";

export default function PhotoLeftCard3() {
  return (
    <div className="fade-in fade-in show flex flex-col md:flex-row md:items-center gap-6 lg:gap-28 order-1 mb-16">
      <Image className="md:w-1/2" src={reefFishing} alt="Reef Fishing Image" />
      <div className="flex flex-col items-start lg:mr-20">
        <h4
          className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}
        >
          Reef Fishing
        </h4>
        <p className="text-sm md:text-base mb-4">
          Reef fishing is an exhilarating experience that caters to both
          seasoned anglers and newcomers alike. Exploring the vibrant underwater
          world, you&apos;ll encounter a diverse array of species, including
          grouper, snapper, hogfish, barracuda, and even sharks. These majestic
          creatures add a thrilling edge to your fishing endeavors.
        </p>
        <p className={`text-sm md:text-base mb-4 ${apercuBold.className}`}>
          Availability: All year{" "}
        </p>
        <p className="text-xs mb-6">
          Rates vary depending on the boat and number of people.
        </p>
        <Link
          href="/contact"
          className={`text-white bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit ${apercuMedium.className}`}
        >
          Book A Charter
        </Link>
      </div>
    </div>
  );
}
