/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function BannerFirst() {
  return (
    <div className="relative w-100 h-100 ">
      <img
        src="https://gmedia.playstation.com/is/image/SIEPDC/days-of-play-homepage-hero-desktop-01-en-11may23?$4000px$"
        alt="banner_image"
      />
      <div class="absolute  text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col items-center justify-center">
          <Image
            width={200}
            height={200}
            src="https://gmedia.playstation.com/is/image/SIEPDC/days-of-play-discount-message-logo-01-22may23$en-au?$1200px--t$"
          />
          <h1 className="mt-4 text-4xl tracking-wider font-extralight">
            Epic deals. Amazing Savings.
          </h1>
          <p className="mt-4 text-lg text-center tracking-wider h-24 font-extralight">
            Days of Play is back with a bang! Enjoy big discounts on huge PS5 &
            PS4 games, PlayStation Plus subscriptions, and more until June 12th
          </p>
          <CustomButton color="red" text="Browse The Deals" />
        </div>
      </div>
    </div>
  );
}
