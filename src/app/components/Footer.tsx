import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowRightCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 min-h-[800px] flex justify-center pt-20  overflow-x-clip">
      <div className="container space-y-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10">
          <div className="flex items-center gap-2">
            <Image
              src="/QM Footer logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
            <div className="h-[50px] md:h-[100px] w-[1px] bg-white" />
            <p className="text-white">Technology </p>
          </div>
          <div>
            <p className="text-white text-xl md:text-2xl">
              Let's explore available opportunities or create{" "}
              <br className="hidden md:block" /> bespoke solutions to serve your
              business needs.
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-center">
            <div className="bg-primary-900 text-white px-6 py-4 text-sm rounded-full w-fit flex  items-center gap-2">
              Contact us
              <BsArrowRightCircle size={15} color="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row  lg:justify-between lg:items-center">
          <div className="space-y-6">
            <p className="text-white text-xl md:text-2xl">
              Ready to connect with us?
            </p>
            <div className="grid md:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-10">
              <div className="flex flex-col gap-4">
                <p className=" text-sm ">Our Products</p>
                <Link href="/#products" className=" text-white">
                  Quiz Money
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <p className=" text-sm ">Support</p>
                <Link href="/contact" className=" text-white">
                  Contact Us
                </Link>
                <Link href="/" className=" text-white">
                  Help
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <p className=" text-sm ">Legal</p>
                <Link href="/" className=" text-white">
                  Privacy Policy
                </Link>
                <Link href="/" className=" text-white">
                  Term of Use
                </Link>
              </div>
              <div className="flex flex-col md:items-end gap-4">
                <p className=" text-sm ">Socials</p>
                <Link
                  href="/"
                  target="_blank"
                  className=" text-white flex items-center gap-2"
                >
                  <FaLinkedinIn size={15} /> LinkedIn
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className=" text-white flex items-center gap-2"
                >
                  <FaTwitter size={15} /> Twitter
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className=" text-white flex items-center gap-2"
                >
                  <FaInstagram size={15} /> Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            {/* subscribe to our newsletter */}
            <p className="">Subscribe to our newsletter</p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className=" bg-zinc-700 text-white px-4 py-2 rounded-md md:w-[384px] max-w-[384px]"
              />
            </div>
            <div className="bg-primary-900 text-white px-6 py-3 text-sm rounded-full max-w-[384px] flex  justify-center items-center gap-2">
              Subscribe
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="size-[200px] lg:size-[400px] opacity-10 flex justify-center items-center">
            <div className="flex items-center gap-2 md:scale-[2] lg:scale-[4]">
              <Image
                src="/QM Footer logo.svg"
                alt="logo"
                width={100}
                height={100}
              />
              <div className="h-[100px] w-[1px] bg-white" />
              <p className="text-white">Technology </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center border-t border-white/20 md:py-10 py-5">
          <p className=" text-sm text-center">© 2024. QM Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
