import Image from "next/image";
import React from "react";
import FadeIn from "../FadeIn";

const WhoWeAre = () => {
  return (
    <FadeIn>
      <div className="bg-neutral-50 min-h-[800px] flex items-center justify-center py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-5">
            <p className="text-lg md:text-2xl md:text-start text-center">
              Who we <span className="text-primary-800 italic">are?</span>
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold  md:text-start text-center">
              Pioneering{" "}
              <span className="text-primary-800 italic">
                QM Technology&apos;s
              </span>{" "}
              Journey
            </h1>
            <h4 className="leading-[3.5rem] text-[18px] md:text-[24px] md:text-start text-center  ">
              With a deep understanding of the African tech market, we
              specialize in developing custom software that addresses the unique
              challenges and opportunities faced by enterprises in the region.
              From startups to established companies, our team of skilled
              developers and tech enthusiasts is committed to delivering
              solutions that exceed expectations and drive growth.
            </h4>
            <div className="bg-primary-900 text-white w-fit px-6 py-3 border border-secondary-500 hover:shadow-md hover:shadow-primary-900 duration-500 delay-100 cursor-pointer  rounded-full md:flex hidden items-center gap-2">
              Read more
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[500px] lg:h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uvX8EJ6RFcU?autoplay=1&loop=1&playlist=uvX8EJ6RFcU&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="6 June 2025"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full h-full object-cover rounded-3xl"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default WhoWeAre;
