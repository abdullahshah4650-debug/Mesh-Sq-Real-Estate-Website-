import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { FaLocationDot, FaBars } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative home min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/banner.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <div className="px-4 sm:px-6 md:px-17.5 pt-4">
          <div className="navbar container bg-white w-full sm:w-330 m-auto px-4 sm:px-5 py-3 sm:py-4 items-center sticky top-0 z-50 rounded-2xl sm:rounded-full flex justify-between">
            {/* Logo */}
            <div className="w-28 sm:w-32 md:w-40">
              <img className="w-full" src="/logo.png" alt="logo" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="navlinks hidden md:block">
              <ul className="flex flex-row space-x-4 lg:space-x-6">
                <li className="hover:text-[#742092] transition text-sm lg:text-base">
                  <a href=".home">Home</a>
                </li>
                <li className="hover:text-[#742092] transition text-sm lg:text-base">
                  <a href="#aboutus">About Us</a>
                </li>
                <li className="hover:text-[#742092] transition text-sm lg:text-base">
                  <a href="#property">Appartment</a>
                </li>
                <li className="hover:text-[#742092] transition text-sm lg:text-base">
                  <a href="/">Blog</a>
                </li>
                <li className="hover:text-[#742092] transition text-sm lg:text-base">
                  <a href="#aboutus">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex space-x-3 lg:space-x-6">
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full px-4 lg:px-6 py-2 lg:py-3 flex items-center justify-center hover:bg-[#742092] hover:text-white transition text-xs lg:text-base font-semibold">
                Sign In
              </button>
              <button className="bg-[#E6E8E7] text-[#ff7526] rounded-full px-4 lg:px-6 py-2 lg:py-3 flex items-center justify-center hover:bg-[#ff7526] hover:text-white transition text-xs lg:text-base font-semibold">
                Sign Up
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center text-[#742092] text-2xl"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-lg p-4 z-40">
              <ul className="flex flex-col space-y-3">
                <li className="hover:text-[#742092] transition border-b pb-2">
                  <a href="#home" className="block text-sm font-semibold">
                    Home
                  </a>
                </li>
                <li className="hover:text-[#742092] transition border-b pb-2">
                  <a href="#aboutus" className="block text-sm font-semibold">
                    About Us
                  </a>
                </li>
                <li className="hover:text-[#742092] transition border-b pb-2">
                  <a href="#property" className="block text-sm font-semibold">
                    Appartment
                  </a>
                </li>
                <li className="hover:text-[#742092] transition border-b pb-2">
                  <a href="/" className="block text-sm font-semibold">
                    Blog
                  </a>
                </li>
                <li className="hover:text-[#742092] transition border-b pb-2">
                  <a href="/aboutus" className="block text-sm font-semibold">
                    Contact Us
                  </a>
                </li>
              </ul>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-2 mt-4">
                <button className="bg-[#E6E8E7] text-[#742092] rounded-full w-full py-2 hover:bg-[#742092] hover:text-white transition text-sm font-semibold">
                  Sign In
                </button>
                <button className="bg-[#E6E8E7] text-[#ff7526] rounded-full w-full py-2 hover:bg-[#ff7526] hover:text-white transition text-sm font-semibold">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="flex items-center justify-center text-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] px-4 sm:px-6">
          <div className="max-w-2xl text-white">
            {/* Location */}
            <div className="flex justify-center items-center space-x-2 mb-4 sm:mb-6">
              <FaLocationDot className="text-white text-lg sm:text-xl" />
              <p className="text-sm sm:text-lg md:text-xl">
                626 RXR Plaza Uniondale, NY 11556
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff7526] font-bold mb-4 sm:mb-6 leading-tight">
              Welcome to Your Luxurious Haven
            </h1>

            {/* Description */}
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
              Our exclusive property offers a seamless blend of luxury and
              comfort, designed to meet your every need. From the finest
              amenities to stunning views, experience pure elegance.
            </p>

            {/* CTA Button */}
            <a href="#" className="header-btn3">
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
