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
import ContactCta from "../components/home/ContactCta";
import ContactCtaPaperPay from "../components/home/ContactCtaPaperPay";
import OurPurpose from "../components/home/OurPurpose";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <div className=" flex-col flex w-full pb-8 gap-12 bg-[#ffffff]">
      <Hero />
      <WhoWeAre />
      <OurPurpose />
      <ContactCta />
      <ContactCtaPaperPay />
      <Testimonials />

      {/* <Principles />
      <OurMilestone />
      <OurProducts />
      <Team />
      <Featured />
      <Testimonial /> */}
    </div>
  );
}
