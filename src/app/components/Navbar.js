"use client"

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current route
  const router = useRouter(); // For programmatic navigation

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'
      }`}
    >
      <div className="flex container items-center justify-between mx-auto px-4 py-2">
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

        {/* Menu */}
        <div>
          <ul className="flex items-center gap-12 text-sm font-medium">
            {menuItems.map((item) => (
              <li
                key={item.route}
                className={`cursor-pointer ${
                  pathname === item.route
                    ? "text-[#D7B56D] border-b-2 border-[#D7B56D]"
                    : "text-white"
                } hover:text-[#D7B56D]`}
                onClick={() => router.push(item.route)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Donation Button */}
        <div>
          <button className="bg-[#D7B56D] bg-opacity-75 py-2 px-3 text-white font-medium text-sm rounded-sm">
            DONATION
          </button>
        </div>
      </div>
    </nav>
  );
};
