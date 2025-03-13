"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    // bg-gray-600
    <nav className="flex justify-between items-center py-4 px-[10vw] w-full">
      {/* left section logo hamburger and navlinks */}
      <div className="flex items-center ">
        <div className="logo mx-4 flex">
          <Image width={120} height={180} src="https://seasons.jdprojects.in/assets/img/logo/logo-white.png" alt="logo" />

          {/* Hamburger Icon */}
          <button className="text-white focus:outline-none mx-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile - Nav Links */}
        <ul className={`${isOpen ? "block" : "hidden"} md:hidden space-x-6 text-white`}>
          <li>Home</li>
          <li>Features</li>
          <li>Pages</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>

        {/* Desktop - Nav Links */}
        <ul className="hidden md:flex space-x-6 text-white text-[15px] mx-4">
          <li>Home</li>
          <li>Features</li>
          <li>Pages</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* ******************* left section logo hamburger and navlinks end ******************** */}

      {/* ******************* right section Contact Section and login btn *************** */}
      <div className="flex items-center space-x-2">
        {/* Contact Icon */}
        <div className="contact-container flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 space-x-2 bg-white rounded-full shadow-md ">
            <svg className="w-6 h-6 text-gray-700" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5747 15.8619L15.8138 17.6228C15.7656 17.6732 15.7236 17.7026 15.6627 17.7362C13.1757 19.0753 8.40326 16.5734 6.21009 14.2626C6.18698 14.2374 6.16809 14.2185 6.14502 14.1954C3.83427 12.0021 1.33257 7.22927 2.67157 4.7421C2.70515 4.68124 2.73453 4.64134 2.78491 4.5931L4.54573 2.83006C4.67586 2.69992 4.82067 2.64116 5.00114 2.64116H5.01583C5.20471 2.64327 5.35163 2.71044 5.47965 2.84895L7.75047 5.30044C7.98973 5.55651 7.98131 5.95109 7.73368 6.19877L6.26666 7.66589C5.85321 8.08148 5.67271 8.62926 5.75877 9.20856C5.94134 10.428 6.55419 11.574 7.63293 12.7095C7.65603 12.7326 7.67489 12.7536 7.69799 12.7746C8.83342 13.8534 9.97723 14.4663 11.1966 14.6488C11.7779 14.7349 12.3257 14.5544 12.7412 14.1388L14.2062 12.6738C14.4538 12.4261 14.8484 12.4177 15.1065 12.6549L17.5578 14.9259C17.6963 15.0539 17.7614 15.2008 17.7656 15.3897C17.7698 15.5785 17.709 15.7276 17.5747 15.8619Z"
              />
            </svg>
          </div>

          <div className="flex flex-col text-white">
            <span className="text-[12px]">Call Us:</span>
            <Link href="tel:+913333333" className="text-[16px] font-bold">
              +91-3333333456
            </Link>
          </div>
        </div>

        <Button hrefPath="#" />
      </div>
      {/* ******************* right section Contact Section and login btn end *************** */}
    </nav>
  );
};

export default Nav;
