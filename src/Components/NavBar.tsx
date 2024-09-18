"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/your-cv.pdf";
    link.download = "your-cv.pdf";
    link.click();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-600 body-font bg-black">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between p-4">
        <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl pl-4 sm:text-2xl md:text-3xl text-red-500">
            ReXon Solution
          </span>
        </div>

        {/* Hamburger or Cross Icon for mobile view */}
        <button
          className="inline-flex items-center md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation menu */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row md:items-center w-full md:w-auto text-center md:text-left bg-black md:bg-transparent`}
        >
          <Link
            href="/"
            className="block md:inline-block mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black text-white"
          >
            Home
          </Link>
          <Link
            href="/About"
            className="block md:inline-block mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black text-white"
          >
            About Us
          </Link>
          {/* <Link
            href="/Portfolio"
            className="block md:inline-block mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black text-white"
          >
            Portfolio
          </Link> */}
          {/* <Link
            href="/DownloadCv"
            onClick={handleDownload}
            className="block md:inline-block mr-5 hover:text-gray-900 rounded hover:bg-white p-1 px-3 hover:text-black text-white cursor-pointer"
          >
            Download CV
          </Link> */}
          <Link
            href="/Contact"
            className="block md:inline-block mr-5 text-sm sm:text-base px-2 sm:px-4 bg-green-500 py-1 text-red-500 rounded hover:bg-red-900 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
