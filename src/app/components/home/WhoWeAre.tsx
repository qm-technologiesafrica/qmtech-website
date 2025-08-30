"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="bg-[#ffffff] min-h-[600px] flex items-center justify-center">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          className="flex flex-col w-full items-start overflow-hidden rounded-lg justify-start h-[300px] lg:h-full"
          data-aos="fade-right"
        >
          <Image
            alt=""
            src="/Gallery/computerCenter.svg"
            width={500}
            height={500}
            objectFit="contain"
            className="h-full"
          />
        </div>
        <div
          className="flex flex-col justify-center space-y-5"
          data-aos="fade-left"
        >
          <h2 className="text-black text-base">About us</h2>
          <span className=" text-4xl md:text-7xl font-semibold">
            <h1 className=" text-black">We're Not Just</h1>
            <h1 className="text-primary-900 italic"> Building Apps</h1>
          </span>
          <h4 className=" leading-9  ">
            With a deep understanding of the African tech market, we specialize
            in developing custom software that addresses the unique challenges
            and opportunities faced by enterprises in the region. From startups
            to established companies, our team of skilled developers and tech
            enthusiasts is committed to delivering solutions that exceed
            expectations and drive growth.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
