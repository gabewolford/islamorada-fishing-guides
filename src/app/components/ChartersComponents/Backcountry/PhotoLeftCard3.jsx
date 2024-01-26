import Link from "next/link";
import { apercuMedium, apercuBold } from "../../../styles/fonts";
import Image from "next/image";
import snook from "../../../../../public/images/snook.png";

export default function PhotoLeftCard3() {
  return (
    <div className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
      <Image className="md:w-1/2" src={snook} alt="Snook Image" />
      <div className="flex flex-col items-start lg:mr-20">
        <h4
          className={`text-2xl md:text-3xl leading-7 mb-4 ${apercuMedium.className}`}
        >
          Snook, Redfish & Trout
        </h4>
        <p className="text-sm md:text-base mb-2">
          A perfect day trip - take a ride across the Florida Bay to the
          Everglades and enter the fishing grounds of Snook, Redfish, and Trout.
        </p>
        <p className="text-sm md:text-base mb-2">
          This trip also has plenty of opportunities for viewing wildlife with
          sea turtles, manatees, and porpoises often seen along the way. Bird
          enthusiasts will rejoice, because you’re sure to see an amazing
          variety at one time on your trip.
        </p>
        <p className="text-sm md:text-base mb-4">
          A full day is recommended for best fishing.
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
