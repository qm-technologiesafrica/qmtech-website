import Image from "next/image";
import ComingSoon from "../components/comingSoon/ComingSoon";
import Hero from "../components/home/Hero";
import WhoWeAre from "../components/home/WhoWeAre";
import Principles from "../components/home/Principles";
import OurMilestone from "../components/home/OurMilestone";
import OurProducts from "../components/home/OurProducts";
import Team from "../components/home/Team";
import Featured from "../components/home/Featured";
import Testimonial from "../components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Principles />
      <OurMilestone />
      <OurProducts />
      <Team />
      <Featured />
      <Testimonial />
    </>
  );
}
