import React from "react";
import FadeIn from "../FadeIn";

const ContactForm = () => {
  return (
    <FadeIn>
      <div className="bg-white min-h-[500px] flex flex-col justify-center py-20">
        <div className="container space-y-10 flex flex-col ">
          <div className=" bg-primary-50 rounded-full w-fit px-5 py-2 text-sm text-primary-800 flex gap-2 items-center">
            <p>Contact Us</p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold  md:text-start text-center">
            Get in touch{" "}
            <span className="text-primary-800 italic">with us</span>{" "}
          </h1>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col gap-4">
              <p className=" font-semibold text-black">Name</p>
              <div className="flex gap-2 bg-white h-[52px] lg:h-[72px] rounded-full p-1 border-2 w-full border-primary-800 ">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="bg-transparent outline-none flex-1 rounded-full px-5 py-2 text-sm text-primary-800 flex gap-2 items-center"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className=" font-semibold text-black">Email</p>
              <div className="flex gap-2 bg-white h-[52px] lg:h-[72px] rounded-full p-1 border-2 w-full border-primary-800 ">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-transparent outline-none flex-1 rounded-full px-5 py-2 text-sm text-primary-800 flex gap-2 items-center"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className=" font-semibold text-black">Message</p>
              <div className="flex gap-2 bg-white  rounded-3xl p-1 border-2 w-full border-primary-800 ">
                <textarea
                  placeholder="Message"
                  rows={10}
                  className="bg-transparent outline-none flex-1 px-5 py-2 text-sm text-primary-800 flex gap-2 items-center"
                />
              </div>
            </div>

            <div className="flex justify-end items-end">
              <div className="bg-primary-900 text-white md:w-fit w-full px-10 py-3 border border-secondary-500 hover:shadow-md hover:shadow-primary-900 duration-500 delay-100 cursor-pointer  rounded-full flex justify-center items-center gap-2">
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ContactForm;
