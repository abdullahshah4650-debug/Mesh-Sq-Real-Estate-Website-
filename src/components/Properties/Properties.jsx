"use client";

import React from "react";
import Cards from "../Cards/Cards";

const Properties = () => {
  return (
    <>
      <section className="w-full mx-auto py-10 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Badge */}
        <div className="mx-auto w-fit rounded-2xl sm:rounded-3xl lg:rounded-[64px] bg-[#ff7526] text-center px-4 py-2">
          <h2 className="whitespace-nowrap text-white font-light text-sm sm:text-base md:text-lg lg:text-xl">
            Turning imagination into iconic realities
          </h2>
        </div>
        <div className="mx-auto mb-8 sm:mb-10 md:mb-12 mt-4 sm:mt-6 max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#742092] font-bold leading-tight">
            Designing Tomorrow's Landmarks Today
          </h3>
        </div>
        <div className="relative w-full max-w-5xl mx-auto group">
          <div className="absolute -inset-2 bg-linear-to-r from-[#742092] to-[#ff7526] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wml3u4OUjnM"
              title="Commercial Property Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
