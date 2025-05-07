import Image from "next/image";
import React from "react";
import FadeIn from "../FadeIn";

const principles = [
  {
    title: "Innovation",
    description:
      "We embrace creativity and push the boundaries of what's possible, constantly seeking new ways to innovate and drive positive change in the tech industry.",
    color: "bg-cyan-500",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty, transparency, and ethical behavior in all our interactions, building trust and credibility with our clients, partners, and stakeholders.",
    color: "bg-orange-500",
  },
  {
    title: "Customer-Centricity",
    description:
      "We prioritize the needs and satisfaction of our clients above all else, striving to exceed their expectations by delivering exceptional products and services tailored to their unique requirements.",
    color: "bg-purple-500",
  },
  {
    title: "Collaboration",
    description:
      "We foster a culture of collaboration and teamwork, recognizing that our collective strength lies in our diversity of talents, perspectives, and experiences.",
    color: "bg-emerald-500",
  },
];

const WhoWeAre = () => {
  return (
    <FadeIn>
      <div className="bg-white min-h-[800px] flex items-center justify-center py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold  md:text-start text-center">
              Our Guiding{" "}
              <span className="text-primary-800 italic">Principles</span>{" "}
              Journey
            </h1>
            <h4 className=" leading-[3.5rem] text-[18px] md:text-[24px] md:text-start text-center ">
              At QM Technology, our guiding principles shape everything we do.
              From fostering innovation to prioritizing customer satisfaction,
              our core values drive us forward, ensuring that every decision we
              make aligns with our commitment to excellence and integrity.
            </h4>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="grid  md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className={`flex flex-col space-y-3 bg-primary-50 p-7 rounded-3xl ${
                    index % 2 === 0 ? "md:translate-y-10" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-[2px] h-7 rounded-full ${principle.color}`}
                    />
                    <h3 className="text-xl md:text-2xl font-semibold text-primary-800">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-lg font-light">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default WhoWeAre;
