import BannerFirst from "@/components/BannerFirst";
import NavBar from "./NavBar";
import BannerSecond from "@/components/BannerSecond";
import BannerThird from "@/components/BannerThird";
import BannerFourth from "@/components/BannerFourth";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <BannerFirst />
        <BannerSecond />
        <BannerThird />
        <BannerFourth />
      </main>
    </>
  );
}
