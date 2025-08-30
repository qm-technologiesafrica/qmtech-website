"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactCta() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#ffffff] min-h-[600px] flex-col flex items-center justify-center">
      <div className=" w-full py-8 flex justify-center flex-col items-center">
        <span>Our products</span>
        <span className="text-black font-bold text-3xl md:text-7xl">
          What We&apos;re{" "}
          <span className=" text-primary-900 italic">Building</span>
        </span>
      </div>
      <div className="container grid ">
        <section className=" relative bg-white  overflow-hidden ">
          <div className="relative flex  flex-col bg-primary-900 pt-20 px-5 md:px-24  rounded-3xl hero md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left pb-8">
              <div className=" flex w-full md:justify-start justify-center pb-2">
                <Image
                  src={"/QuizMoney.svg"}
                  alt="Quiz Money"
                  width={100}
                  height={100}
                  priority
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-3xl md:text-5xl font-bold mb-4"
              >
                Have More Questions?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 leading-9 mb-8 max-w-xl"
              >
                Quiz Money is a trivia-based edtech app that rewards users br
                for what they know. Licensed by the National Lottery Regulatory
                Commission (NLRC), our topics include general knowledge,
                history, science, sports, entertainment, and more
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#E4F1FA] text-[#17478B] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  TRY QUIZ MONEY
                  <motion.span
                    className="relative"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <i className="bi bi-arrow-right-circle text-base sm:text-lg"></i>
                    <i className="bi bi-arrow-right-circle absolute left-0 animate-ping opacity-75 text-base sm:text-lg"></i>
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            <div
              className=" relative md:absolute flex items-center bottom-0 right-0 justify-center mx-auto md:max-w-[60%] lg:max-w-[40%]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <Image
                  src={"/Gallery/hero-phone-mobile.png"}
                  alt="Quiz Money"
                  width={700}
                  height={700}
                  priority
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
