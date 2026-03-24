import React from "react";

const Legacy = () => {
  return (
    <>
      <section className="w-full sm:w-330 mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-0 px-4 sm:px-6">
        {/* Badge */}
        <div className="mx-auto rounded-2xl sm:rounded-3xl md:rounded-[64px] bg-[#ff7526] w-full sm:w-100 md:w-110 lg:w-125 text-center px-4 sm:px-6">
          <h2 className="text-white font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
            BUILDING TOMORROW'S LANDMARKS
          </h2>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#742092] font-bold mt-4 sm:mt-5 text-center">
          THE LEGACY OF ARC DEVELOPERS
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-md pt-4 sm:pt-5 text-center w-full sm:w-280 md:w-300 mx-auto leading-relaxed text-gray-700">
          With a strong vision and years of dedication, ARC Developers continues
          to redefine Pakistan's real estate landscape through innovation,
          integrity, and excellence. With more than 7 iconic projects
          successfully delivered and several new ventures underway, we take
          pride in creating developments that combine modern architecture with
          long-term value. Every ARC Developers project reflects our commitment
          to quality, precision, and innovation, transforming ideas into
          landmarks that inspire trust and stand the test of time.
        </p>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <a href="#" className="footer-btn3">
            Explore Our Projects
          </a>
        </div>
      </section>

      {/* Full Width Image */}
      <img className="md:w-full lg:w-full sm:w-330" src="/house.png" alt="Legacy Image" />
    </>
  );
};

export default Legacy;