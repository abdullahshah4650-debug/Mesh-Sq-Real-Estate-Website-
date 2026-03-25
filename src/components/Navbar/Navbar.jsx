"use client";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaLocationDot, FaBars } from "react-icons/fa6";
import { X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // ✅ AUTO HIDE MESSAGE
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION
  const validate = (type) => {
    let errs = {};

    if (type === "signup" && !formData.name) {
      errs.name = "Full Name is required";
    }

    if (!formData.email) {
      errs.email = "Email is required";
    }

    if (!formData.password || formData.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setMessage(
        type === "signin"
          ? "✨ Welcome back!"
          : "🎉 Account created successfully!",
      );
      if (type === "signin") setShowSignIn(false);
      if (type === "signup") setShowSignUp(false);
      return true;
    }

    return false;
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* 🔔 TOAST MESSAGE */}
      {message && (
        <div className="fixed top-5 right-5 bg-linear-to-r from-[#742092] to-[#ff7526] text-white px-6 py-4 rounded-xl shadow-lg animate-bounce z-999">
          {message}
        </div>
      )}

      {/* Background Video */}
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
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 pt-4">
          {/* Navbar */}
          <div className="navbar container max-w-330 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 items-center sticky top-0 z-50 rounded-2xl sm:rounded-full flex justify-between bg-white">
            {/* Logo */}
            <div className="w-28 sm:w-32 md:w-40">
              <img className="w-full" src="/logo.png" alt="logo" />
            </div>

            {/* Desktop Links */}
            <div className="navlinks hidden lg:block">
              <ul className="flex flex-row space-x-4 xl:space-x-6">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#About us">About Us</a>
                </li>
                <li>
                  <a href="#property">Projects</a>
                </li>
                <li>
                  <a href="#soon">Blog</a>
                </li>
                <li>
                  <a href="#aboutus">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex space-x-3 xl:space-x-6">
              <button
                onClick={() => setShowSignIn(true)}
                className="bg-[#E6E8E7] text-[#742092] rounded-full px-4 lg:px-6 py-2 lg:py-3 hover:bg-[#742092] hover:text-white transition text-xs lg:text-base font-semibold"
              >
                Sign In
              </button>

              <button
                onClick={() => setShowSignUp(true)}
                className="bg-[#E6E8E7] text-[#ff7526] rounded-full px-4 lg:px-6 py-2 lg:py-3 hover:bg-[#ff7526] hover:text-white transition text-xs lg:text-base font-semibold"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-2xl text-[#742092]"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-lg p-4 z-40">
              <ul className="flex flex-col space-y-3">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#About us">About Us</a>
                </li>
                <li>
                  <a href="#property">Projects</a>
                </li>
                <li>
                  <a href="#soon">Blog</a>
                </li>
                <li>
                  <a href="#aboutus">Contact Us</a>
                </li>
              </ul>

              <div className="flex flex-col space-y-2 mt-4">
                <button
                  onClick={() => {
                    setShowSignIn(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#E6E8E7] text-[#742092] rounded-full py-2"
                >
                  Sign In
                </button>

                <button
                  onClick={() => {
                    setShowSignUp(true);
                    setMobileMenuOpen(false);
                  }}
                  className="bg-[#E6E8E7] text-[#ff7526] rounded-full py-2"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Hero (UNCHANGED) */}
        <div className="flex items-center justify-center text-center min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] px-4">
          <div className="max-w-2xl text-white">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <FaLocationDot />
              <p className="text-sm sm:text-base md:text-lg">
                626 RXR Plaza Uniondale, NY
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff7526] font-bold mb-4 leading-tight">
              Welcome to Your Luxurious Haven
            </h1>

            <p className="mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
              Experience pure elegance with premium amenities and views.
            </p>

            <a href="#" className="header-btn3">
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>

      {/* SIGN IN */}
      {showSignIn && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowSignIn(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg overflow-hidden animate-fadeIn relative"
          >
            <div className="h-18 bg-linear-to-r from-[#742092] to-[#ff7526] relative">
              <button
                onClick={() => setShowSignIn(false)}
                className="absolute top-3 right-3 text-white"
              >
                <X />
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Sign In</h2>

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full mb-5 p-3 border rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full mb-5 p-3 border rounded-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              <button
                onClick={() => validate("signin")}
                className="w-full bg-linear-to-r from-[#742092] to-[#ff7526] text-white py-3 rounded-lg"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SIGN UP */}
      {showSignUp && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowSignUp(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg overflow-hidden animate-fadeIn relative"
          >
            <div className="h-18 bg-linear-to-r from-[#ff7526] to-[#742092] relative">
              <button
                onClick={() => setShowSignUp(false)}
                className="absolute top-3 right-3 text-white"
              >
                <X />
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

              <input
                name="name"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full mb-5 p-3 border rounded-lg"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full mb-5 p-3 border rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full mb-5 p-3 border rounded-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              <button
                onClick={() => validate("signup")}
                className="w-full bg-linear-to-r from-[#ff7526] to-[#742092] text-white py-3 rounded-lg"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Navbar;
