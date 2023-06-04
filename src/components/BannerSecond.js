import FirstCarsouel from "@/components/FirstCarsouel";

export default function BannerSecond() {
  return (
    <div className="m-10 flex flex-row space-x-7">
      <FirstCarsouel
        active={"true"}
        source={
          "https://gmedia.playstation.com/is/image/SIEPDC/days-of-play-keyart-01-en-09may23?$1200px$"
        }
      />
      <FirstCarsouel
        source={
          "https://gmedia.playstation.com/is/image/SIEPDC/diablo-iv-ultimate-edition-keyart-01%E2%80%93en-25may23?$1200px$"
        }
      />
      <FirstCarsouel
        source={
          "https://gmedia.playstation.com/is/image/SIEPDC/access-controller-keyart-01-en-15may23?$1200px$"
        }
      />
      <FirstCarsouel
        source={
          "https://gmedia.playstation.com/is/image/SIEPDC/destiny-2-season-of-the-deep-keyart-01-12may23$en?$1200px$"
        }
      />
      <FirstCarsouel
        source={
          "https://gmedia.playstation.com/is/image/SIEPDC/star-wars-jedi-survivor-keyart-01-en-17apr23?$1200px$"
        }
      />
      <FirstCarsouel
        source={
          "https://gmedia.playstation.com/is/image/SIEPDC/Horizon-Burning-Shores-keyart-01-23feb23$en?$1200px$"
        }
      />
    </div>
  );
}
