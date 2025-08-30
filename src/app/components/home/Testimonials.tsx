"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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
const testimonials = [
  {
    id: 1,
    name: "Customer 1",
    img: "/icons/testimonial-1.svg",
  },
  {
    id: 2,
    name: "Customer 2",
    img: "/icons/testimonial-2.svg",
  },
  {
    id: 3,
    name: "Customer 3",
    img: "/icons/testimonial-3.svg",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      id="testimonials"
      className="min-h-[70svh] w-full grid pt-20 relative  mx-auto bg-white px-5"
      data-aos="fade-up"
    >
      <div className=" w-full  md:mt-28. container mt-10 mx-auto grid md:grid-cols-2 grid-cols-1 md:px-0 ">
        <div className="w-full flex flex-col items-start" data-aos="fade-right">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            What Our Users{" "}
            <span className="text-primary-800 relative">
              <span className=" pb-2">Say.</span>
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

          <div className="flex flex-col items-start space-x-4 mb-16">
            <div className="flex -space-x-3">
              {customers.map((customer, index) => (
                <div
                  key={customer.id}
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden"
                  style={{ zIndex: customers.length - index }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={customer.avatar}
                    alt={customer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-12 h-12 items-center justify-center flex flex-row rounded-full border-4 border-white shadow-lg overflow-hidden">
                100
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end hidden md:flex flex-col">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center w-full"
              data-aos="fade-left"
              data-aos-delay={idx * 150}
            >
              <Image
                src={testimonial.img}
                alt={testimonial.name}
                width={100}
                height={60}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
