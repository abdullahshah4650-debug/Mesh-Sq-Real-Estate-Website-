import React from "react";
import "./Properties.css";
import Cards from "../Cards/Cards";

const Properties = () => {
  return (
    <>
      <section className="w-full sm:w-330 mx-auto py-8 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        {/* Badge */}
        <div className="mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[64px] bg-[#ff7526] w-full sm:w-50 md:w-86 lg:w-115 text-center">
          <h2 className="text-white font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-none inline-block py-2 px-4 sm:px-6 font-['Plus_Jakarta_Sans']">
            Turning imagination into iconic realities
          </h2>
        </div>

        {/* Main Heading */}
        <div className="mx-auto mb-6 sm:mb-8 md:mb-10 mt-3 sm:mt-5 w-full sm:w-160 md:w-200 lg:w-250 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#742092] pt-2 sm:pt-3 font-['Plus Jakarta Sans', sans-serif] leading-tight sm:leading-normal md:leading-12 text-center font-bold px-4 sm:px-0">
          <h3>Designing Tomorrow's Landmarks Today</h3>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 lg:w-140 mx-4 sm:mx-0">
            <p className="text-sm sm:text-base md:text-base lg:text-base leading-relaxed text-gray-700">
              Since 2018, ARC Developers has been redefining commercial real
              estate by creating vibrant spaces that combine innovation,
              functionality, and sustainability. As a leading name in real
              estate development, we specialize in crafting premium projects
              that promote growth, opportunity, and community. Our commitment to
              excellence drives us to deliver high-quality, forward-thinking
              developments that meet the evolving needs of businesses and
              investors alike. Whether you're looking for a dynamic office
              space, a strategic retail location, or a custom commercial
              property, ARC Developers is here to bring your vision to life with
              integrity, precision, and purpose.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10 flex justify-start">
              <a href="#" className="footer-btn3">
                Learn More
              </a>
            </div>
          </div>

          {/* Video Content */}
          <div className="w-full md:w-1/2 lg:w-130 mx-4 sm:mx-0 aspect-video">
            <iframe
              className="w-full h-full rounded-lg md:rounded-xl"
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
