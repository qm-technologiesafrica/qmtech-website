"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";

const Testimonials = [
  {
    name: "Orlando Diggs1",
    position: "Position",
    company: "Company name",
    image: "/team1.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo quas accusantium vero quis esse impedit eaque illo, illum expedita?",
    rating: 5,
  },
  {
    name: "Orlando Diggs2",
    position: "Position",
    company: "Company name",
    image: "/team1.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo quas accusantium vero quis esse impedit eaque illo, illum expedita?",
    rating: 5,
  },
  {
    name: "Orlando Diggs3",
    position: "Position",
    company: "Company name",
    image: "/team1.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo quas accusantium vero quis esse impedit eaque illo, illum expedita?",
    rating: 5,
  },
  {
    name: "Orlando Diggs4",
    position: "Position",
    company: "Company name",
    image: "/team1.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo quas accusantium vero quis esse impedit eaque illo, illum expedita?",
    rating: 5,
  },
  {
    name: "Orlando Diggs5",
    position: "Position",
    company: "Company name",
    image: "/team1.png",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo quas accusantium vero quis esse impedit eaque illo, illum expedita?",
    rating: 5,
  },
];

const Testimonial = () => {
  const [startIndex, setStartIndex] = useState(0);
  const groupSize = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(
        (prevIndex) => (prevIndex + groupSize) % Testimonials.length
      );
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGroup = [
    Testimonials[startIndex],
    Testimonials[(startIndex + 1) % Testimonials.length],
    Testimonials[(startIndex + 2) % Testimonials.length],
  ];

  return (
    <div
      id="testimonials"
      className="bg-white min-h-[800px] flex flex-col justify-center py-20"
    >
      <div className=" container space-y-12">
        <p className=" text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-black">
          Testimonial
        </p>

        <p className=" text-lg md:text-2xl text-center">
          Check out list of amazing products from QM Technologies across africa
        </p>

        <div className="flex flex-col items-center gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentGroup?.map((testimonial, index) => (
              <div
                className=" min-h-[335px]  max-w-[400px] shadow-lg shadow-zinc-300 rounded-xl border border-zinc-100 p-6"
                key={index}
              >
                <div className="flex flex-col justify-between gap-6 h-full">
                  <div className="flex gap-2">
                    {Array(5)
                      .fill(0)
                      .map((_, idx) => (
                        <BsStarFill
                          key={idx}
                          size={24}
                          color={testimonial.rating > idx ? "orange" : "#ccc"}
                        />
                      ))}
                  </div>
                  <p className="flex-1 text-lg text-zinc-500">
                    &ldquo;{testimonial.body}&rdquo;
                  </p>

                  <div className=" flex gap-6">
                    <div className=" h-[48px] w-[48px] rounded-full">
                      <Image
                        src={testimonial.image}
                        height={400}
                        width={400}
                        alt=""
                        className=" h-full w-full rounded-full"
                      />
                    </div>
                    <div className="">
                      <p className=" font-semibold">{testimonial.name}</p>
                      <p className=" font-light">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className=" gap-4 flex ">
            {Array(groupSize)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={` ${
                    startIndex == index ? "bg-primary-800" : "bg-zinc-300"
                  } h-[6px] w-7 rounded-full `}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
