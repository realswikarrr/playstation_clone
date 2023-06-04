import BannerFirst from "@/components/BannerFirst";
import NavBar from "./NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <BannerFirst />
        <div>
          <div>
            <Image
              src="https://gmedia.playstation.com/is/image/SIEPDC/days-of-play-homepage-hero-desktop-01-en-11may23?$4000px$"
              height={30}
              width={30}
              alt="thumbnail_1"
            />
          </div>
        </div>
      </main>
    </>
  );
}
