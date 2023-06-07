import Image from "next/image";
import clsx from "clsx";

export default function SecondCarsouel({ image, active }) {
  return (
    <div
      className={clsx(
        "border-4",
        "box-border",
        active === "true" && "border-blue-500",
        active != "true" && "border-transparent",
        "p-1",
        "rounded-3xl",
        active != "true" && "opacity-70",
        "hover:-translate-y-4 hover:cursor-pointer hover:shadow-xl hover:opacity-100",
        "transition-all",
        " ease-in-out",
        "delay-100",
        "flex",
        "items-center",
        "flex-col"
      )}
    >
      <Image
        className="p-5"
        alt="thumnnail_2"
        src="https://gmedia.playstation.com/is/image/SIEPDC/DualSense-Edge-image-block-01-en-24aug22?$2400px$"
        width={600}
        height={600}
      />
      <h1 className="mt-2">DualSense Edge</h1>
    </div>
  );
}
