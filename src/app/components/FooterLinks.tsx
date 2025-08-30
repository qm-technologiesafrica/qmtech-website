"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FooterLinks() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <footer className="w-full text-zinc-100 py-12" data-aos="fade-up">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Left: Section Titles and Links */}
        <div className="flex flex-col gap-8 lg:gap-12" data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-2">
            Ready to connect with us?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Our Products */}
            <div data-aos="zoom-in" data-aos-delay="100">
              <h3 className="text-sm mb-3 font-medium text-zinc-400">
                Our Products
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Quiz Money
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Paper Pay
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div data-aos="zoom-in" data-aos-delay="200">
              <h3 className="text-sm mb-3 font-medium text-zinc-400">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms Of Use
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social */}
            <div data-aos="zoom-in" data-aos-delay="300">
              <h3 className="text-sm mb-3 font-medium text-zinc-400">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FaXTwitter size={15} /> X
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <FaInstagram size={15} /> Instagram
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact */}
            <div data-aos="zoom-in" data-aos-delay="400">
              <h3 className="text-sm mb-3 font-medium text-zinc-400">
                Contact us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaEnvelope size={14} />
                  <span>Admin@qmtech.org</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCalendarAlt size={14} />
                  <span>Mon -Fri (9am -5pm WAT)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt size={14} />
                  <span>King’s court Ikeja, Lagos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div
          className="mt-10 lg:mt-0 flex flex-col gap-6 max-w-md w-full"
          data-aos="fade-left"
        >
          <p className="text-zinc-200 font-medium">
            Subscribe to our Newsletter
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-zinc-700 text-white px-4 py-3 rounded-md mb-2 w-full"
          />
          <button className="bg-blue-800 text-white py-3 rounded-full w-full font-semibold hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
