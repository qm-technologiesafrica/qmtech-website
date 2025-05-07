import Image from "next/image";
import React from "react";
import FadeIn from "../FadeIn";

const Gallary = () => {
  return (
    <FadeIn>
      <div className="bg-neutral-50 min-h-[800px] flex items-center justify-center py-[150px] overflow-x-hidden">
        <div className="container space-y-10">
          <div className="flex flex-col space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold  md:text-start text-center">
              Explore Our{" "}
              <span className="text-primary-800 italic">Gallery</span>{" "}
            </h1>
            <p className="text-lg md:text-2xl md:text-start text-center">
              Discover Moments of Innovation and Inspiration
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col md:flex-row gap-10">
              <Image
                className="h-[350px] md:h-[356px] flex-[.5] w-full object-cover"
                src={"/gallery/1.png"}
                alt="gallery-1"
                width={400}
                height={400}
              />
              <Image
                className="h-[350px] md:h-[356px] flex-1 w-full  object-cover"
                src={"/gallery/2.png"}
                //   srcSet={"/gallery/2.png, /gallery/2@2x.png"}
                alt="gallery-1"
                width={400}
                height={400}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <Image
                className="h-[350px] md:h-[356px] flex-1 w-full object-cover"
                src={"/gallery/3.png"}
                alt="gallery-1"
                width={400}
                height={400}
              />
              <Image
                className="h-[350px] md:h-[356px] flex-[.5] w-full  object-cover"
                src={"/gallery/4.png"}
                alt="gallery-1"
                width={400}
                height={400}
              />
            </div>
            <div className="hidden  md:flex flex-row gap-10">
              <Image
                className="h-[350px] md:h-[356px] flex-1 w-full object-cover"
                src={"/gallery/5.png"}
                alt="gallery-1"
                width={400}
                height={400}
              />
              <Image
                className="h-[350px] md:h-[356px] flex-1 w-full  object-cover"
                src={"/gallery/6.png"}
                alt="gallery-1"
                width={400}
                height={400}
              />
              <Image
                className="h-[350px] md:h-[356px] flex-1 w-full object-cover"
                src={"/gallery/7.png"}
                alt="gallery-1"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Gallary;
