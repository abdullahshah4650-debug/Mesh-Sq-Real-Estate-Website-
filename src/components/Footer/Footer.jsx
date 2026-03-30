import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  // ✅ Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-center",
    });
    AOS.refresh();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = () => {
    let errs = {};

    if (!formData.name.trim()) errs.name = "Name is required";

    if (!formData.phone.trim()) {
      errs.phone = "Phone is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.trim())) {
      errs.phone = "Enter a valid phone number (10-15 digits)";
    }

    if (!formData.message.trim()) errs.message = "Message cannot be empty";

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSuccessMessage("✅ Message sent successfully!");
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setSuccessMessage(""), 3000); // hide after 3s
      return true;
    }
    return false;
  };

  return (
    <section id="aboutus" className="w-full py-4 sm:py-7 px-4 sm:px-5 relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(../footer-bg1.png)" }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-8 sm:pt-16 md:pt-20">
        {/* Contact Form & Gallery */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6"
        >
          {/* Contact Form */}
          <div className="w-full md:w-full lg:w-160 bg-white rounded-lg sm:rounded-2xl px-4 sm:px-6 md:px-7 py-6 sm:py-7 flex flex-col">
            <h2 className="text-xl sm:text-2xl text-[#ff7526] font-bold">
              Send Us A Message
            </h2>

            {successMessage && (
              <p className="text-green-500 text-sm sm:text-base mt-2">
                {successMessage}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-5">
              <div className="w-full">
                <input
                  className="p-2 sm:p-3 w-full outline-0 rounded-md sm:rounded-[5px] bg-gray-100 border-gray-50 text-sm sm:text-base"
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  className="p-2 sm:p-3 w-full outline-0 rounded-md sm:rounded-[5px] bg-gray-100 border-gray-50 text-sm sm:text-base"
                  type="text"
                  placeholder="Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="mt-4 sm:mt-5">
              <textarea
                className="w-full p-2 sm:p-3 outline-0 rounded-md sm:rounded-[5px] bg-gray-100 border-gray-50 text-sm sm:text-base resize-none"
                name="message"
                placeholder="Enter Your Message"
                cols={20}
                rows={5}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="mt-6 sm:mt-10 flex justify-end">
              <button
                onClick={validate}
                className="footer-btn3 text-sm sm:text-base"
              >
                Send Us Message
              </button>
            </div>
          </div>

          {/* Spacer */}
          <div className="w-full h-3 lg:w-3"></div>

          {/* Gallery */}
          <div className="w-full md:w-full lg:w-160 gallery flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <img
                className="rounded-lg sm:rounded-2xl w-full sm:w-1/2 h-40 sm:h-48 md:h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                src={logo1}
                alt="gallery 1"
              />
              <img
                className="rounded-lg sm:rounded-2xl w-full sm:w-1/2 h-40 sm:h-48 md:h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                src={logo2}
                alt="gallery 2"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <img
                className="rounded-lg sm:rounded-2xl w-full sm:w-1/2 h-40 sm:h-48 md:h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                src={logo3}
                alt="gallery 3"
              />
              <img
                className="rounded-lg sm:rounded-2xl w-full sm:w-1/2 h-40 sm:h-48 md:h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                src={logo4}
                alt="gallery 4"
              />
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="h-6 sm:h-8 md:h-10 lg:h-12"></div>

        {/* Footer Info Section */}
        <div className="py-6 sm:py-8 md:py-8 lg:py-10 px-4 sm:px-8 md:px-10 lg:px-15 bg-white rounded-2xl md:rounded-2xl lg:rounded-3xl">
          {/* Desktop Layout */}
          <div className="hidden md:flex lg:flex flex-row justify-between items-center flex-wrap gap-4">
            {/* Logo */}
            <div className="w-32 md:w-36 lg:w-40">
              <img className="w-full align-middle" src="/logo.png" alt="logo" />
            </div>

            {/* Nav Links */}
            <div className="flex flex-col md:flex-row gap-10">
              <ul className="flex flex-col gap-2 md:gap-3">
                <li className="hover:text-[#742092] transition duration-100 ease-in text-sm md:text-base">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in text-sm md:text-base">
                  <a href="#About us">About Us</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in text-sm md:text-base">
                  <a href="#property">Projects</a>
                </li>
              </ul>

              <ul className="flex flex-col gap-2 md:gap-3">
                <li className="hover:text-[#742092] transition duration-100 ease-in text-sm md:text-base">
                  <a href="#property">Gallery</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in text-sm md:text-base">
                  <a href="#soon">Blog</a>
                </li>
                <li className="hover:text-[#742092] transition duration-100 ease-in text-sm md:text-base">
                  <a href="#aboutus">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Location & Phone */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex space-x-2 text-black hover:text-[#742092] transition duration-100 ease-in-out">
                <FaLocationDot className="text-lg md:text-xl shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm">
                  626 RXR Plaza Uniondale, NY 11556
                </p>
              </div>
              <div className="flex space-x-2 text-black hover:text-[#742092] transition duration-100 ease-in-out">
                <FaPhone className="text-lg md:text-xl shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm">(844) 440-MESH</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 md:space-x-4 lg:space-x-6">
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 md:p-3 hover:bg-[#742092] hover:text-white flex items-center justify-center w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12">
                <FaFacebookF size={16} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 md:p-3 hover:bg-[#742092] hover:text-white flex items-center justify-center w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12">
                <FaXTwitter size={16} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 md:p-3 hover:bg-[#742092] hover:text-white flex items-center justify-center w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12">
                <FaYoutube size={16} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 md:p-3 hover:bg-[#742092] hover:text-white flex items-center justify-center w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12">
                <FaLinkedinIn size={16} />
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="flex flex-col md:hidden lg:hidden items-center gap-6">
            {/* Logo */}
            <div className="w-28 mx-auto">
              <img className="w-full align-middle" src="/logo.png" alt="logo" />
            </div>

            {/* Nav Links */}
            <div className="flex gap-8 justify-center w-full max-w-55">
              <div>
                <ul className="flex flex-col gap-2">
                  <li className="hover:text-[#742092] transition duration-100 ease-in text-xs">
                    <a href="#home">Home</a>
                  </li>
                  <li className="hover:text-[#742092] transition duration-100 ease-in text-xs">
                    <a href="#About us">About Us</a>
                  </li>
                  <li className="hover:text-[#742092] transition duration-100 ease-in text-xs">
                    <a href="#property">Projects</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  <li className="hover:text-[#742092] transition duration-100 ease-in text-xs">
                    <a href="#property">Gallery</a>
                  </li>
                  <li className="hover:text-[#742092] transition duration-100 ease-in text-xs">
                    <a href="#soon">Blog</a>
                  </li>
                  <li className="hover:text-[#742092] transition duration-100 ease-in text-xs">
                    <a href="#aboutus">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <div className="flex space-x-2 text-black hover:text-[#742092] transition duration-100 ease-in-out">
                <FaLocationDot className="text-sm shrink-0 mt-0.5" />
                <p className="text-xs">626 RXR Plaza Uniondale, NY 11556</p>
              </div>
              <div className="flex space-x-2 text-black hover:text-[#742092] transition duration-100 ease-in-out">
                <FaPhone className="text-xs shrink-0 mt-0.5" />
                <p className="text-xs">(844) 440-MESH</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 hover:bg-[#742092] hover:text-white flex items-center justify-center w-9 h-9">
                <FaFacebookF size={14} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 hover:bg-[#742092] hover:text-white flex items-center justify-center w-9 h-9">
                <FaXTwitter size={14} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 hover:bg-[#742092] hover:text-white flex items-center justify-center w-9 h-9">
                <FaYoutube size={14} />
              </button>
              <button className="bg-[#E6E8E7] text-[#742092] rounded-full p-2 hover:bg-[#742092] hover:text-white flex items-center justify-center w-9 h-9">
                <FaLinkedinIn size={14} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 sm:h-10 md:h-12 border-b border-[#E6E6E7] my-4 sm:my-6 md:my-6"></div>

          {/* Copyright */}
          <div className="text-center">
            <h3 className="text-xs sm:text-sm md:text-base">
              © 2026 All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
