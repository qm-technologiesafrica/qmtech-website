"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React, { useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";
import FooterLinks from "./FooterLinks";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <footer className="bg-zinc-900 mt-auto min-h-[800px] flex flex-col justify-center pt-20  overflow-x-clip">
      <div className="container space-y-10">
        <div className="grid gap-10" data-aos="fade-up">
          <div className="flex items-center gap-2" data-aos="fade-right">
            <Image
              src="/icons/logoWhite.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          <FooterLinks />
        </div>

        <div
          className="flex justify-center items-center "

          // data-aos="zoom-in"
        >
          <div className="size-[200px] lg:size-[400px] opacity-10 flex justify-center items-center">
            <div className="flex items-center gap-2 md:scale-[2] lg:scale-[4]">
              <Image src="/icons/tm.svg" alt="logo" width={100} height={100} />
              <div className="md:h-[100px] h-[50px] hidden md:block w-[1px] bg-white" />
              <p className="text-white uppercase">
                technologies <br /> limited{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center border-t border-white/20 md:py-10 py-5"
          // data-aos="fade-up"
        >
          <p className=" text-sm text-center">
            © {new Date().getFullYear()}. QM Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
