import AboutSection from "./AboutSection";
import Achievements from "./Achievements";
import BlogSection from "./BlogSection";
import Cta from "./Cta";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import MadeWithLove from "./MadeWithLove";
import ServiceSection from "./ServiceSection";
import Showreel from "./Showreel";

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden">
      <Hero />
      <AboutSection />
      <Achievements />
      <ServiceSection />
      <MadeWithLove />
      <HowItWorks />
      <Showreel />
      <BlogSection />
      <Cta />
    </div>
  );
}
