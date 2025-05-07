import React from "react";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
import FadeIn from "../FadeIn";
const Hero = () => {
  return (
    <FadeIn>
      <div className=" flex flex-col">
        <div className=" min-h-[500px] bg-primary-50 flex-1 flex flex-col justify-center items-center pt-[100px] pb-[200px]">
          <div className="container flex flex-col  items-center h-full space-y-5 md:space-y-8">
            <div className=" bg-white rounded-full px-5 py-2 text-sm text-primary-800 flex gap-2 items-center">
              <p>Hello There, we are QM Technologies</p>
              <Image src={"/wave.png"} alt="wave" width={24} height={24} />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-center text-black lg:leading-[90px] ">
              We Build{" "}
              <span className="text-primary-800 italic">Technologically</span>{" "}
              <br className="hidden md:block" /> driven solutions.
            </h1>

            <p className="text-center text-lg  sm:text-xl md:text-2xl font-light ">
              Empowering Africa's ecosystem by providing technologically driven{" "}
              <br className="hidden md:block" />
              solution to businesses.
            </p>

            <div className="flex gap-2 bg-white h-[52px] lg:h-[72px] rounded-full p-1 border-2 w-[90%] md:w-[80%] lg:w-[40%] border-primary-800 ">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-transparent outline-none flex-1 rounded-full px-5 py-2 text-sm text-primary-800 flex gap-2 items-center"
              />
              <div className="bg-primary-900 flex-[.5] md:flex-[.3] text-white rounded-full px-2 md:px-7 py-2 text-sm flex justify-center items-center">
                Book a call
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-[.5] bg-white flex justify-center items-center pb-[100px]">
          <div className="container flex items-center flex-col">
            <div className="flex items-center gap-10 w-[80%] ">
              <div className=" bg-white md:h-[383px] w-full h-[227px] rounded-[20px] translate-y-[-30%] overflow-hidden hidden lg:flex">
                <Image
                  src={"/hero-1.png"}
                  alt="hero-1"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" bg-white md:h-[383px] w-full h-[227px] rounded-[20px] translate-y-[-10%] lg:translate-y-[-20%] overflow-hidden  ">
                <Image
                  src={"/hero-2.png"}
                  alt="hero-1"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" bg-white md:h-[383px] w-full h-[227px] rounded-[20px] translate-y-[-30%] overflow-hidden hidden lg:flex">
                <Image
                  src={"/hero-3.png"}
                  alt="hero-1"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className=" text-primary-800 flex items-center gap-3">
              <p className="font-semibold text-lg md:text-2xl">
                Get to know about QM Technology
              </p>
              <BsArrowDownCircle size={22} />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Hero;
