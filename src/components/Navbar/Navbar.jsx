import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaLocationDot,
} from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
        <div className="px-17.5 pt-4">
          <div className="navbar container bg-white w-330 m-auto px-5 py-4 items-center rounded-full flex justify-between">
            <div className="w-40">
              <img className="w-full" src="/logo.png" alt="logo" />
            </div>
            <div className="navlinks">
              <ul className="flex flex-row space-x-6">
                <li className="hover:text-[#742092]">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-[#742092]">
                  <a href="/">About Us</a>
                </li>
                <li className="hover:text-[#742092]">
                  <a href="/">Appartment</a>
                </li>
                <li className="hover:text-[#742092]">
                  <a href="/">Blog</a>
                </li>
                <li className="hover:text-[#742092]">
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6">
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#742092] hover:text-white transition">
                <FaFacebookF />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#742092] hover:text-white transition">
                <FaXTwitter />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#742092] hover:text-white transition">
                <FaYoutube />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#742092] hover:text-white transition">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-center min-h-[80vh] px-5">
          <div className="max-w-2xl text-white">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <FaLocationDot className="text-white" />
              <p className="text-xl">626 RXR Plaza Uniondale, NY 11556</p>
            </div>
            <h1 className="text-6xl text-[#ff7526] font-bold mb-6 leading-tight">
              Welcome to Your Luxurious Haven
            </h1>
            <p className="mb-8 text-2xl text-white leading-relaxed">
              Our exclusive property offers a seamless blend of luxury and
              comfort, designed to meet your every need. From the finest
              amenities to stunning views, experience pure elegance.
            </p>
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
