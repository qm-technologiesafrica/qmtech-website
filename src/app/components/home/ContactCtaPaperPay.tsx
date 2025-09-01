"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactCtaPaperPay() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#ffffff] min-h-[600px] flex items-center justify-center">
      <div className="container grid ">
        <section className=" relative bg-white  overflow-hidden ">
          <div className="relative grid grid-cols-1 md:grid-cols-2 bg-black pt-12 px-5 md:px-24  rounded-3xl  md:flex-row items-center justify-between gap-8">
            <img
              src={"/Gallery/curv.png"}
              alt="Card Sample"
              className=" absolute bottom-0 right-0 "
            />
            <div
              className="pt-4 flex items-center justify-center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                <Image
                  src={"/cardSample.svg"}
                  alt="Quiz Money"
                  width={500}
                  height={500}
                  // layout="fill"
                  objectFit="contain"
                  className="h-full"
                />
              </div>
            </div>
            <div className="text-center md:text-left pb-6">
              <div className=" flex w-full md:justify-start justify-center mt-10 relative  pb-2">
                <Image
                  src={"/paperpay.svg"}
                  alt="Quiz Money"
                  width={150}
                  height={150}
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
                Paper Pay is our upcoming payment tool designed for small and
                medium businesses, helping them get paid faster and easier.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex relative items-center gap-2 bg-[#ffffff] text-[#17478B] px-8 py-4  rounded-full font-medium hover:bg-opacity-90 transition-all"
                >
                  Coming Soon
                  <Image
                    src={"/noto-v1_fire.svg"}
                    alt="Arrow Right"
                    width={26}
                    height={26}
                    className="bi bi-arrow-right-circle animate-pulse left-0  text-base sm:text-lg"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
