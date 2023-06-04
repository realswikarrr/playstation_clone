import BannerFirst from "@/components/BannerFirst";
import NavBar from "./NavBar";
import BannerSecond from "@/components/BannerSecond";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <BannerFirst />
        <BannerSecond />
      </main>
    </>
  );
}
