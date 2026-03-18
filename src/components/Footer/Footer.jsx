import React from "react";
import ScrollReveal from "../Onscroll";
import logo1 from "/img_1.png";
import logo2 from "/img_2.png";
import logo3 from "/img_3.png";
import logo4 from "/img_4.png";
import { FaFacebookF } from "react-icons/fa";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="w-full min-h-screen py-7 px-5 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(../footer-bg1.png)" }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-330 mx-auto pt-28">
        <ScrollReveal>
          <div className="flex gap-2">
            <div className="table col-span-3 w-160 bg-white rounded-2xl px-7 py-7 flex-col">
              <h2 className="text-2xl text-[#ff7526] font-bold">
                Send Us A Message
              </h2>
              <div className="flex flex-row">
                <input
                  className="p-3 w-full outline-0 mt-5 rounded-[5px] mr-5 bg-gray-100 border-gray-50"
                  type="text"
                  placeholder="Enter Your Name"
                />
                <input
                  className="p-3 w-full mt-5 outline-0 rounded-[5px] bg-gray-100 border-gray-50"
                  type="number"
                  placeholder="Mobile Number"
                />
              </div>
              <textarea
                className="mt-5 w-full p-3 outline-0 mr-5 rounded-[5px] bg-gray-100 border-gray-50"
                name="text"
                placeholder="Enter Your Message"
                cols={20}
                rows={5}
              ></textarea>
              <div className="mt-10 flex justify-end">
                <a href="#" className="footer-btn3">
                  Send Us Message
                </a>
              </div>
            </div>
            <div className="w-5"></div>
            {/* Part 2 */}
            <div className="gallery w-160 flex flex-col gap-5">
              {/* Layer 1 */}
              <div className=" flex flex-row gap-5">
                <img
                  className="rounded-2xl w-63 h-47.5 transform transition-transform duration-300 ease-in-out hover:scale-105 "
                  src={logo1}
                  alt="gallery"
                />
                <img
                  className="w-90.25 h-47.5 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 "
                  src={logo2}
                  alt=""
                />
              </div>
              {/* Layer 2 */}
              <div className="flex flex-row gap-5 ">
                <img
                  className="w-90.25 h-47.5 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105 "
                  src={logo3}
                  alt=""
                />
                <img
                  className="rounded-2xl w-63 h-47.5 transform transition-transform duration-300 ease-in-out hover:scale-105 "
                  src={logo4}
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className="h-12"></div>
        <div className=" py-10 px-15 bg-white rounded-3xl ">
          <div className="flex flex-row justify-between items-center">
            {/* Logo */}
            <img className="w-40  align-middle" src="public/logo.png" alt="" />
            {/* Nav Links */}
            <div>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-[#742092] transition duration-100 ease-in">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in">
                  <a href="/">About Us</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in">
                  <a href="/">Appartment</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                <li className="hover:text-[#742092] transition duration-100 ease-in">
                  <a href="/">Gallery</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in">
                  <a href="/">Blog</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in">
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Location */}

            <div className="flex flex-col items-start gap-3">
              <div className="flex    space-x-2  text-black hover:text-[#742092] transition duration-100 ease-in-out">
                <FaLocationDot className="  text-2xl shrink-0 " />
                <p className=" text-md">626 RXR Plaza Uniondale, NY 11556</p>
              </div>
              <div className="h-3"></div>
              <div className="flex   space-x-2  text-black hover:text-[#742092] transition duration-100 ease-in-out">
                <FaPhone className="text-xl shrink-0 " />
                <p className=" text-md">(844) 440-MESH</p>
              </div>
            </div>

            {/* Icons */}
            <div className="flex space-x-6">
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-3 hover:bg-[#742092] hover:text-white transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12">
                <FaFacebookF size={18} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-3 hover:bg-[#742092] hover:text-white transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12">
                <FaXTwitter size={18} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-3 hover:bg-[#742092] hover:text-white transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12">
                <FaYoutube size={18} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-3 hover:bg-[#742092] hover:text-white transition duration-300 cursor-pointer flex items-center justify-center w-12 h-12">
                <FaLinkedinIn size={18} />
              </button>
            </div>
          </div>
          <div className="h-12 border-b border-[#E6E6E7] "></div>
          <div className=" mt-6 items-center text-center">
            <h3>© 2026 All Rights Reseverved </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
