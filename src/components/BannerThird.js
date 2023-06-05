import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function BannerThird() {
  return (
    <div className="flex mt-20 justify-around items-center">
      <div className="">
        <h1 className=" font-extralight text-4xl mb-5">
          Dual Sense Edge Wireless <br /> Controller
        </h1>
        <p className=" font-extralight text-xl mb-5">
          Get an edge in gameplay with remappable <br /> buttons, tuneable
          triggers and sticks, <br /> changeable stick caps, back buttons, and{" "}
          <br /> more.
        </p>
        <CustomButton color="blue" text="Find out more" />
      </div>
      <div>
        <Image
          src="https://gmedia.playstation.com/is/image/SIEPDC/DualSense-Edge-image-block-01-en-24aug22?$2400px$"
          width={800}
          height={800}
          alt="Playstation_image"
        />
      </div>
    </div>
  );
}
