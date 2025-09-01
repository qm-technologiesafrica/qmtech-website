import Hero from "../components/home/Hero";
import WhoWeAre from "../components/home/WhoWeAre";

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
    </div>
  );
}
