"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Events", route: "/events" },
    { name: "Sermons", route: "/sermons" },
    { name: "Contact Us", route: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  // Ensure the menu closes when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="flex relative container items-center justify-between mx-auto px-4 md:px-8 lg:px-4 py-2">
        {/* Logo */}
        <div>
          <Image
            src="/TDI-removebg-preview.png"
            width={1000}
            height={1000}
            className="w-16"
            alt="Logo"
          />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden absolute right-4">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div
          className={`md:flex items-center gap-12 text-sm font-medium ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul
            className={`flex flex-col md:flex-row items-center md:gap-8 lg:gap-12 ${
              isMenuOpen
                ? "absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4"
                : ""
            }`}
          >
            {/* Close Button */}
            {isMenuOpen && (
              <li className="w-full text-right mb-4 hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            )}
            {menuItems.map((item) => (
              <li
                key={item.route}
                className={`cursor-pointer mb-5 md:mb-0 ${
                  pathname === item.route
                    ? "text-[#D7B56D] border-b-2 border-[#D7B56D]"
                    : "text-white"
                } hover:text-[#D7B56D]`}
                onClick={() => {
                  setIsMenuOpen(false); // Close menu on navigation
                  router.push(item.route);
                }}
              >
                {item.name}
              </li>
            ))}
            {/* Donation Button */}
            {isMenuOpen && (
              <li className="mt-4">
                <button className="bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-medium text-sm rounded-sm">
                  DONATION
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Donation Button (for Larger Screens) */}
        <div className="hidden md:block">
          <button className="bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-medium text-sm rounded-sm">
            DONATION
          </button>
        </div>
      </div>
    </nav>
  );
};
