import React from "react";
import Image from "next/image";
import { BsArrowDownCircle, BsArrowLeft } from "react-icons/bs";
import FadeIn from "../FadeIn";

// create an video controller component play a video

const Hero = () => {
  return (
    <FadeIn>
      <div className=" flex flex-col">
        <div className=" min-h-[500px] bg-primary-50 flex-1 flex flex-col justify-center items-center pt-[50px] sm:pt-[100px] pb-[100px] sm:pb-[200px]">
          <div className="container flex flex-col  items-center h-full space-y-5 md:space-y-8">
            <div className=" bg-white rounded-full px-5 py-2 text-sm text-primary-800 flex gap-2 items-center">
              <p>About QM Technology</p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-center text-black lg:leading-[90px] ">
              Empowering{" "}
              <span className="text-primary-800 italic">
                Africa&apos;s Tech
              </span>{" "}
              <br className="hidden md:block" /> Ecosystem.
            </h1>

            <p className="text-center text-lg  sm:text-xl md:text-2xl font-light ">
              Driving Innovation, Transforming Businesses
            </p>
          </div>
        </div>

        <div className=" flex-[.5] bg-white flex justify-center items-center pb-[100px]">
          <div className="container flex items-center flex-col">
            <div className="flex items-center gap-10 w-[80%] ">
              <div className=" bg-white md:h-[500px] w-full h-[164px] rounded-[20px] translate-y-[-30%] overflow-hidden flex">
                {/* <video
                  src="https://www.youtube.com/shorts/qm5GnrT8sww"
                  className="w-full h-full object-cover"
                  controls
                ></video> */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/uvX8EJ6RFcU?autoplay=1&loop=1&playlist=uvX8EJ6RFcU&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="6 June 2025"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-5">
              <p className="text-lg md:text-2xl md:text-start text-center">
                Who we <span className="text-primary-800 italic">are?</span>
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold  md:text-start text-center">
                Pioneering{" "}
                <span className="text-primary-800 italic">
                  QM Technology&apos;s
                </span>{" "}
                <br className="hidden md:block" />
                Journey
              </h1>
              <h4 className="md:leading-[3.5rem] leading-[2.5rem] text-[18px] md:text-[24px] md:text-start text-center  ">
                QM Technology is dedicated to revolutionizing the African tech
                landscape by crafting bespoke applications tailored to the needs
                of businesses in Nigeria and beyond. Our mission is clear: to
                drive innovation and empower businesses through cutting-edge
                technology solutions. With a deep understanding of the African
                tech market, we specialize in developing custom software that
                addresses the unique challenges and opportunities faced by
                enterprises in the region. From startups to established
                companies, our team of skilled developers and tech enthusiasts
                is committed to delivering solutions that exceed expectations
                and drive growth. At QM Tech Solutions, we believe in the power
                of technology to transform businesses and drive positive change.
                That&apos;s why we&apos;re not just in the business of creating
                software – we&apos;re in the business of making an impact. By
                empowering businesses with innovative technology solutions, we
                aim to foster growth, create opportunities, and drive economic
                development across the continent. Join us on our journey to
                pioneer tech solutions for Africa. Together, we can harness the
                power of technology to empower businesses, drive innovation, and
                shape the future of the African tech ecosystem. Welcome to QM
                Tech Solutions – where every solution is crafted with Africa in
                mind.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Hero;
