import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import FadeIn from "../FadeIn";

const Brochure = () => {
  return (
    <FadeIn>
      <div className="bg-primary-50 min-h-[500px] flex flex-col justify-center py-20">
        <div className="container space-y-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold  md:text-start text-center">
            know more about{" "}
            <span className="text-primary-800 italic">QM Technologies?</span>{" "}
          </h1>
          <p className="text-lg md:text-2xl md:text-start text-center">
            Uncover Our Vision, Mission, and Commitment to Innovation{" "}
          </p>
          <div className="flex justify-center md:justify-start items-center">
            <div className="bg-primary-900 text-white px-6 py-4 text-sm md:rounded-xl rounded-full w-fit flex  items-center gap-2">
              Download Brochure
              <BsArrowRightCircle size={15} color="white" />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Brochure;
