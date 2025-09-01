"use client";
import classNames from "classnames";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type ValueCard = {
  title: string;
  icon: string; // path to icon
  bg: string; // card background
  titleColor: string; // title text color
  accent: string; // left accent bar color
  description: string;
};

const values: ValueCard[] = [
  {
    title: "Innovation",
    icon: "/icons/bulbIcon.svg",
    bg: "#E4F1FA",
    titleColor: "#17478B",
    accent: "#17478B",
    description:
      "We embrace creativity and push the limits of possibility. We constantly seek new ways to innovate and drive real change through tech.",
  },
  {
    title: "Integrity",
    icon: "/icons/securityIcon.svg",
    bg: "#E7FEED",
    titleColor: "#009028",
    accent: "#009028",
    description:
      "We hold ourselves to the highest standards - honest, transparent, and ethical, so our partners, clients, and community can trust every interaction.",
  },
  {
    title: "Customer-Centricity",
    icon: "/icons/toolIcon.svg",
    bg: "#DFF9FF",
    titleColor: "#006E7D",
    accent: "#006E7D",
    description:
      "Our customers shape everything we build. We listen, adapt, and build products that truly meet their needs and exceed expectations.",
  },
];

const OurPurpose: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="w-full bg-[#F2F3F4]">
      {/* Heading */}
      <div className="container h-full py-5">
        <div className="flex flex-col gap-2">
          <span className="text-black" data-aos="fade-up">
            Our Core Values
          </span>
          <h1
            className="md:text-5xl text-3xl flex items-center lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We Build With
            <span className="text-primary-800 relative ml-2">
              <span className="pb-2 italic font-semibold">Purpose.</span>
              <div className="absolute -bottom-2 left-0 w-full pt-16">
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
        </div>
      </div>

      {/* Cards + wavy connector */}
      <div className="relative py-2">
        {/* wavy connector behind cards */}
        <div className=" z-0  inset-0 hidden md:block">
          <Image
            src="/innderLine.svg"
            alt=""
            fill
            sizes="100vw "
            className="object-contain h-full w-full"
            priority
          />
        </div>

        <div className="container px-0 md:px-5 pb-10">
          <div className="grid grid-cols-1 place-items-center relative gap-5 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, idx) => (
              <article
                key={v.title}
                className={classNames(
                  "w-full max-w-md rounded-2xl px-8  py-14 shadow-lg",
                  v.title === "Integrity" ? "md:mt-32 mt-0" : ""
                )}
                style={{
                  backgroundColor: v.bg,
                }}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <header className="mb-4 flex flex-col   gap-3">
                  <Image
                    src={v.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="shrink-0"
                  />
                  <h3
                    className="relative flex flex-col pl-3 text-2xl font-bold"
                    style={{ color: v.titleColor }}
                  >
                    {/* left accent bar */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-sm"
                      style={{ backgroundColor: v.accent }}
                    />
                    {v.title}
                  </h3>
                </header>
                <p className="text-base leading-relaxed text-gray-700">
                  {v.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
