"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md text-black py-4" : "bg-transparent text-white py-6"
      }`}
    >
      <div className="flex items-center justify-between px-[10vw]">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            width={120}
            height={180}
            src={
              isScrolled
                ? "https://seasons.jdprojects.in/assets/img/logo/logo-green.png"
                : "https://seasons.jdprojects.in/assets/img/logo/logo-white.png"
            }
            alt="logo"
            // className={`${isScrolled ? "brightness-0 invert" : ""}`} // Makes logo visible on white background
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-6 text-[15px]">
          <li>
            <Link href="/" className={`${isScrolled ? "text-black" : "text-white"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/features" className={`${isScrolled ? "text-black" : "text-white"}`}>
              Features
            </Link>
          </li>
          <li>
            <Link href="/pages" className={`${isScrolled ? "text-black" : "text-white"}`}>
              Pages
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={`${isScrolled ? "text-black" : "text-white"}`}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${isScrolled ? "text-black" : "text-white"}`}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Call and Button (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md ${
                  isScrolled ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                <svg className="w-6 h-6" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5747 15.8619L15.8138 17.6228C15.7656 17.6732 15.7236 17.7026 15.6627 17.7362C13.1757 19.0753 8.40326 16.5734 6.21009 14.2626C6.18698 14.2374 6.16809 14.2185 6.14502 14.1954C3.83427 12.0021 1.33257 7.22927 2.67157 4.7421C2.70515 4.68124 2.73453 4.64134 2.78491 4.5931L4.54573 2.83006C4.67586 2.69992 4.82067 2.64116 5.00114 2.64116H5.01583C5.20471 2.64327 5.35163 2.71044 5.47965 2.84895L7.75047 5.30044C7.98973 5.55651 7.98131 5.95109 7.73368 6.19877L6.26666 7.66589C5.85321 8.08148 5.67271 8.62926 5.75877 9.20856C5.94134 10.428 6.55419 11.574 7.63293 12.7095C7.65603 12.7326 7.67489 12.7536 7.69799 12.7746C8.83342 13.8534 9.97723 14.4663 11.1966 14.6488C11.7779 14.7349 12.3257 14.5544 12.7412 14.1388L14.2062 12.6738C14.4538 12.4261 14.8484 12.4177 15.1065 12.6549L17.5578 14.9259C17.6963 15.0539 17.7614 15.2008 17.7656 15.3897C17.7698 15.5785 17.709 15.7276 17.5747 15.8619Z"
                  />
                </svg>
              </div>
              <div className={`flex flex-col ${isScrolled ? "text-black" : "text-white"}`}>
                <span className="text-xs">Call Us:</span>
                <Link href="tel:+913333333" className="text-base font-bold">
                  +91-3333333456
                </Link>
              </div>
            </div>
            <Button hrefPath="#" isScrolled={isScrolled} />
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="flex items-center space-x-4 lg:hidden">
            <Button hrefPath="#" isScrolled={isScrolled} />
            <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-white text-black shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button className="focus:outline-none" onClick={() => setIsOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" onClick={() => setIsOpen(false)}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pages" onClick={() => setIsOpen(false)}>
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/blogs" onClick={() => setIsOpen(false)}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
