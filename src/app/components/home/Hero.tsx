import React from "react";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
import FadeIn from "../FadeIn";
import { ArrowDown, ChevronDown } from "lucide-react";
import GlowBorder from "@/app/components/GlowBorder";

const customers = [
  {
    id: 1,
    name: "Customer 1",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Customer 2",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Customer 3",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Customer 4",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

const Hero = () => {
  return (
    <FadeIn>
      <div className="min-h-[70svh] grid relative container mx-auto bg-[#E4F1FA] px-5">
        <div className=" w-full  md:mt-28 mt-10 mx-auto grid md:grid-cols-2 grid-cols-1 md:px-0 ">
          <div className="w-full flex flex-col items-start  ">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Technology, meet{" "}
              <span className="text-primary-800 relative">
                <span className=" pb-2">solution.</span>
                <div className="absolute -bottom-2 left-0 w-full pt-16 ">
                  <Image
                    src="/rLine.svg"
                    alt="Underline"
                    width={150}
                    height={20}
                    className="object-contain w-full h-auto"
                  />
                </div>
              </span>
            </h1>
            <p className="  text-gray-700 mb-12 leading-9 max-w-xl">
              We empower Africa's ecosystem by building technology that solves
              real problems and drives meaningful change.
            </p>

            <div className="flex flex-col items-start space-x-4 mb-16">
              <div className="flex -space-x-3">
                {customers.map((customer, index) => (
                  <div
                    key={customer.id}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden"
                    style={{ zIndex: customers.length - index }}
                  >
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-gray-700 font-medium">10k+ Customers</div>
            </div>
          </div>
          <div className=" justify-end hidden md:flex">
            <Image
              src="/mapAfrica.svg"
              alt="Dotted Map"
              width={500}
              height={500}
              // layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="w-full mt-auto py-5 ">
          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <GlowBorder className="size-16 rounded-full bg-primary-800 flex items-center justify-center">
              <span className="flex items-center justify-center w-full h-full">
                <ArrowDown className="w-6 h-6 text-white animate-bounce" />
              </span>
            </GlowBorder>
            <span className="text-black  font-medium">Scroll down</span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Hero;
