"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

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
  return (
    <div
      id="testimonials"
      className="bg-white min-h-[800px] flex flex-col justify-center py-20"
    >
      <div className="container space-y-12">
        <p className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-black">
          Testimonial
        </p>

        <p className="text-lg md:text-2xl text-center">
          Check out list of amazing products from QM Technologies across africa
        </p>

        <div className="flex flex-col items-center gap-12">
          <div className="w-full max-w-7xl">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={300}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              partialVisible={false}
              centerMode={false}
            >
              {Testimonials?.map((testimonial, index) => (
                <div
                  className="min-h-[335px] max-w-[400px] mx-auto shadow-lg shadow-zinc-300 rounded-xl border border-zinc-100 p-6 bg-white"
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

                    <div className="flex gap-6">
                      <div className="h-[48px] w-[48px] rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          height={400}
                          width={400}
                          alt={testimonial.name}
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="font-light">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
