import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurProducts = () => {
  return (
    <div
      id="products"
      className="bg-white min-h-[1000px] flex items-center justify-center py-10"
    >
      <div className="container flex flex-col-reverse md:grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6 flex flex-col md:items-start items-center">
          <div className=" bg-secondary-50 text-primary-900 p-3 px-6 w-fit rounded-full md:text-2xl text-lg">
            Quiz Money
          </div>
          <h4 className=" leading-[3.5rem] text-[18px] md:text-[24px]  md:text-start text-center ">
            Quiz Money is a platform or app that allows users to participate in
            quizzes and potentially earn money or rewards for their knowledge
            and skills. Typically, Quiz Money operates by offering a variety of
            quizzes on different topics, ranging from general knowledge to
            specific subjects like history, science, sports, entertainment, and
            more.
          </h4>
          <Link
            href={"https://www.quizmoney.ng/"}
            target="_blank"
            className="bg-primary-900 text-white w-fit px-6 py-3 border border-secondary-500 hover:shadow-md hover:shadow-primary-900 duration-500 delay-100 cursor-pointer  rounded-full  items-center gap-2"
          >
            View Product
          </Link>
          <Image
            src={"/curve-line.svg"}
            alt="curve line"
            height={130}
            width={130}
            className="pt-8 md:block hidden"
          />
        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold  md:text-start text-center">
            Our <span className="text-primary-800 italic">Products?</span>
          </h1>
          <div className=" flex justify-center items-end h-[320px] sm:h-[512px] max-w-[591px] bg-primary-50 rounded-[50px]">
            <Image
              src={"/product-mock.svg"}
              height={512}
              width={591}
              alt="product"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
