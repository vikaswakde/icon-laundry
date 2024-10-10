"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

interface FabStore {
  view: (id: number) => void;
}

declare global {
  interface Window {
    fabStore?: FabStore;
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNowClick = () => {
    const timeStamp = new Date().getTime();
    const script = document.createElement("script");
    script.src = `https://app.fabklean.com/js/webstore.js?time=${timeStamp}`;
    script.onload = () => {
      if (typeof window.fabStore !== "undefined") {
        window.fabStore.view(8583);
        // Center the form
        const formContainer = document.querySelector("#fabkleanStore");
        if (formContainer instanceof HTMLElement) {
          formContainer.style.position = "fixed";
          formContainer.style.top = "50%";
          formContainer.style.left = "50%";
          formContainer.style.transform = "translate(-50%, -50%)";
          formContainer.style.zIndex = "9999";
          formContainer.style.maxWidth = "90%";
          formContainer.style.maxHeight = "90%";
          formContainer.style.overflow = "auto";
          formContainer.style.height = "20rem";
        }
      } else {
        console.error("fabklean plugin is not loaded");
      }
    };
    document.body.appendChild(script);
  };

  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        strategy="afterInteractive"
      />
      <header
        className={`fixed top-0 left-0 md:max-h-[6rem] right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-70 backdrop-blur-md shadow-md hidden md:block"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-3 mb-10 flex items-center justify-between">
          <Link href="/">
            <Image
              src="https://iconlaundry.in/assets/img/logo1.png"
              className={isScrolled ? "invert" : ""}
              alt="Icon Laundry"
              width={120}
              height={20}
            />
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#aboutus" isScrolled={isScrolled}>
              About Us
            </NavLink>
            <NavLink href="#why_choose" isScrolled={isScrolled}>
              Why Us?
            </NavLink>
            <NavLink href="#laundryservice" isScrolled={isScrolled}>
              Our Services
            </NavLink>
            <NavLink href="#requestservice" isScrolled={isScrolled}>
              Contact Us
            </NavLink>
          </div>
          <button
            onClick={handleBookNowClick}
            className={`px-4 py-2 rounded-full transition-colors ${
              isScrolled
                ? "bg-[#091271] text-white hover:bg-opacity-90"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Book Now
          </button>
        </nav>
      </header>
    </>
  );
}

function NavLink({
  href,
  children,
  isScrolled,
}: {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`transition-colors ${
        isScrolled
          ? "text-[#091271] hover:text-opacity-80"
          : "text-white hover:text-gray-300"
      }`}
    >
      {children}
    </Link>
  );
}
