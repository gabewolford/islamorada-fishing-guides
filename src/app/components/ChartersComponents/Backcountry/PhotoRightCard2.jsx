import Link from "next/link";
import { apercuMedium, apercuBold } from "../../../styles/fonts";
import Image from "next/image";
import bonefish from "../../../../../public/images/bonefish.png";

export default function PhotoRightCard2() {
  return (
    <div className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
      <Image
        className="md:w-1/2 md:order-1"
        src={bonefish}
        alt="Bonefish Image"
      />
      <div className="flex flex-col md:order-0 lg:ml-20">
        <h4
          className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}
        >
          Bonefishing on the Flats
        </h4>
        <p className="text-sm md:text-base mb-4">
          Stalk or hunt across the shallow flats with your guide for the elusive
          bonefish. Also known as the “Grey Ghost”, this tough catch is one of
          the most sought-after challenges for anglers. Bonefishing is
          year-round in the Florida Keys.
        </p>
        <p className={`text-sm md:text-base mb-4 ${apercuBold.className}`}>
          Availability: All year
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
