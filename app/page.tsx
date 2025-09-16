import Services from "@/components/Services";
import AboutSection from "./AboutSection";
import Achievements from "./Achievements";
// import BlogSection from "./BlogSection";
import Cta from "./Cta";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import MadeWithLove from "./MadeWithLove";
// import ServiceSection from "./ServiceSection";
import Showreel from "./Showreel";
import HomeC from "@/components/HomeC";
// import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* <ParticlesBg amount={40} /> */}
      <Hero />
      <AboutSection />
      <Achievements />
      <Services />
      <HomeC />
      {/* <ServiceSection /> */}
      <MadeWithLove />
      <HowItWorks />
      <Showreel />
      {/* <BlogSection /> */}
      <Cta />
    </div>
  );
}
