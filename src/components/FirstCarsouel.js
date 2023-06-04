import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

export default function FirstCarsouel({ active, source }) {
  const [text, setText] = useState("no");
  return (
    <div
      className={clsx(
        "border-4",
        "box-border",
        "border-blue-500",
        "p-1",
        "rounded-3xl",
        active != "true" && "opacity-70",
        "hover:-translate-y-4 hover:cursor-pointer hover:shadow-xl hover:opacity-100",
        "transition-all",
        " ease-in-out",
        "delay-100"
      )}
    >
      <Image
        className=" rounded-3xl"
        src={source}
        height={200}
        width={200}
        alt="thumbnail_1"
      />
    </div>
  );
}
