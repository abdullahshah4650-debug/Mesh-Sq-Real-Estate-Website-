"use client";

import React from "react";

const Projects = () => {
  return (
    <>
      <section
        id="property"
        className="w-full max-w-7xl mx-auto py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10"
      >
        {/* Badge */}
        <div className="mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[64px] bg-[#ff7526] w-full max-w-55 sm:max-w-65 md:max-w-75 text-center px-4 sm:px-6">
          <h2 className="text-white font-light text-sm sm:text-base md:text-lg lg:text-xl py-2">
            Our Projects
          </h2>
        </div>

        {/* Main Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#742092] font-bold mt-4 sm:mt-6 text-center">
          Projects Highlights
        </h2>

        {/* Projects Grid */}
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10">
          
          {/* Row 1 */}
          <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8">
            
            {/* Image 1 */}
            <div className="relative w-full sm:w-2/5 aspect-4/3 sm:aspect-auto sm:h-56 md:h-64 lg:h-80 overflow-hidden group rounded-xl">
              <img
                src="/property_1.webp"
                alt="Property 1"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center transform -translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  Under Construction
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-full sm:w-3/5 aspect-4/3 sm:aspect-auto sm:h-56 md:h-64 lg:h-80 overflow-hidden group rounded-xl">
              <img
                src="/property_2.webp"
                alt="Property 2"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center transform -translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  Under Construction
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-6 md:gap-8">
            
            {/* Image 3 */}
            <div className="relative w-full sm:w-1/3 aspect-4/3 sm:aspect-auto sm:h-56 md:h-64 lg:h-80 overflow-hidden group rounded-xl">
              <img
                src="/property_3.webp"
                alt="Property 3"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center transform -translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  Under Construction
                </p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative w-full sm:w-1/3 aspect-4/3 sm:aspect-auto sm:h-56 md:h-64 lg:h-80 overflow-hidden group rounded-xl">
              <img
                src="/property_4.webp"
                alt="Property 4"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center transform -translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  Under Construction
                </p>
              </div>
            </div>

            {/* Image 5 */}
            <div className="relative w-full sm:w-1/3 aspect-4/3 sm:aspect-auto sm:h-56 md:h-64 lg:h-80 overflow-hidden group rounded-xl">
              <img
                src="/property_5.webp"
                alt="Property 5"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center transform -translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-sm sm:text-base md:text-lg font-semibold">
                  Under Construction
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;