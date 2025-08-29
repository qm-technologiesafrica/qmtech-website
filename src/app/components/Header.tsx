"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Logo } from "../../../public/page";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import FadeIn from "./FadeIn";
const navItems = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Products",
    href: "/#products",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
];
const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Handle body scroll lock when menu is open and detect scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* <FadeIn> */}
      <header className="sticky top-0 z-50 bg-white backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="h-16 w-16">
              <Image
                src={Logo}
                alt="QM Technologies"
                width={100}
                height={100}
                quality={100}
                className=" h-full w-full"
              />
            </div>

            <ul className="hidden md:flex gap-10">
              {navItems.map((item) => (
                <li key={item.name} className=" flex flex-col items-center">
                  <Link
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "text-primary-900 text-[20px]"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  {pathname === item.href && (
                    <div className="w-[80%] h-[2px] bg-primary-900" />
                  )}
                </li>
              ))}
            </ul>

            <div
              onClick={() => router.push("/contact")}
              className="bg-[#1B1B1B] text-white cursor-pointer px-8 py-3 text-sm rounded-full md:flex hidden items-center gap-2"
            >
              Contact us
              <BsArrowRightCircle size={15} color="white" />
            </div>

            <button
              className="md:hidden  p-2 focus:outline-none z-[9999]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <HiOutlineX size={24} />
                ) : (
                  <HiOutlineMenu size={24} />
                )}
              </motion.div>
            </button>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white/70 backdrop-blur-md z-[9990] md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-center p-6">
            {navItems.map((item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                href={item.href}
                className="text-xl font-medium text-black hover:text-primary-900 transition-colors"
                onClick={toggleMenu}
                key={item.name}
              >
                {item.name}
              </motion.a>
            ))}

            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              href=""
              className="mt-4 bg-[#1B1B1B] text-white px-6 py-2  rounded-full flex gap-4 items-center"
              onClick={() => {
                toggleMenu();
                router.push("/contact");
              }}
            >
              Contact us
              <BsArrowRightCircle size={15} color="white" />
            </motion.a>
          </div>
        </div>
      )}
      {/* </FadeIn> */}
    </>
  );
};

export default Header;
