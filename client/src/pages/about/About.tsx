import { useEffect } from "react";
import Header from "./Header";
import OurMission from "./OurMission";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="bg-white">
        <OurStory />
        <OurMission />
      </div>
      <div className="bg-white">
        <OurTeam />
      </div>
    </div>
  );
}
