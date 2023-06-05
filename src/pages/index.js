import BannerFirst from "@/components/BannerFirst";
import NavBar from "./NavBar";
import BannerSecond from "@/components/BannerSecond";
import BannerThird from "@/components/BannerThird";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <BannerFirst />
        <BannerSecond />
        <BannerThird />
      </main>
    </>
  );
}
