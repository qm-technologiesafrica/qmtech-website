import Image from "next/image";
import React from "react";
import FadeIn from "../FadeIn";

const OurMilestone = () => {
  return (
    <FadeIn>
      <div className="bg-zinc-900 min-h-[800px] flex items-center justify-center py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-5">
            <h1 className=" text-lg md:text-2xl text-secondary-400 flex items-center gap-3 md:justify-start justify-center">
              Our Milestones
              <Image src={"/Star.png"} height={40} width={40} alt="star" />
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold md:text-start text-center">
              Breaking Ground, Venturing into{" "}
              <span className="text-secondary-400 italic"> New Horizons!</span>
            </h1>
            <h4 className="leading-[3.5rem] text-[18px] md:text-[24px] text-neutral-200 md:text-start text-center  ">
              With our innovative solutions and commitment to excellence, we're
              breaking new ground and venturing into uncharted territories,
              bringing our expertise and cutting-edge technology to even more
              businesses across the continent. Stay tuned as we continue to push
              boundaries, explore new opportunities, and shape the future of
              tech in Africa!
            </h4>
            <div className="flex md:flex-row flex-col gap-10">
              <div className=" flex flex-col gap-10 items-center">
                <p className=" text-4xl md:text-5xl font-bold text-white">
                  {" "}
                  +20
                </p>
                <p className=" text-zinc-200">Product Launched</p>
              </div>
              <div className="h-[100px] w-[2px] bg-primary-50 md:block hidden" />
              <div className=" flex flex-col gap-10 items-center">
                <p className=" text-4xl md:text-5xl font-bold text-white">
                  {" "}
                  +2
                </p>
                <p className=" text-zinc-200">Countries</p>
              </div>
              <div className="h-[100px] w-[2px] bg-primary-50 md:block hidden" />
              <div className=" flex flex-col gap-10 items-center">
                <p className=" text-4xl md:text-5xl font-bold text-white">
                  {" "}
                  +10,000
                </p>
                <div className="flex gap-3 items-center">
                  <div>
                    <Image
                      src={"/users.png"}
                      height={10}
                      width={80}
                      alt="users"
                    />
                  </div>
                  <p className=" text-zinc-200">Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <Image src={"/Globe.svg"} height={500} width={500} alt="globe" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default OurMilestone;
