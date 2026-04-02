import React from "react";

const Legacy = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-10">
      <div className="max-w-330 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto w-fit rounded-2xl sm:rounded-3xl md:rounded-[64px] bg-[#ff7526] text-center px-6 py-3 sm:py-4">
          <h2 className="text-white font-light text-base sm:text-lg md:text-xl lg:text-[20px] leading-tight font-['Plus_Jakarta_Sans']">
            Building Tomorrow LandMark's
          </h2>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#742092] font-bold mt-6 sm:mt-8 text-center leading-tight">
          The Legacy Of Mesh Sq
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl pt-4 sm:pt-6 text-center text-gray-700 leading-relaxed">
          MESH SQ, currently trading as MESH SQ REALTORS, was established in
          2018 with a vision of driving Real Estate Investments, Sales,
          consultancy services, and providing sufficient and value-added Real
          Estate services. The company is currently becoming a multi-faceted
          “property practice” passionately having experienced in Marketing and
          Brand Communication supporting staff. The company is offering
          professional services that include Property Valuation as well as
          Market Strategies and project accurate predictions. For the future,
          MESH SQ REALTORS has a structured plan of high yield investment, a
          great real estate portfolio, an aim, and a vision of creating and
          satisfying their clients and investors with more than expectation.
        </p>
        <div className="mt-6 sm:mt-10 md:mt-12 flex justify-center">
          <a href="#" className="header-btn3">
            Explore Our Projects
          </a>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl scale-100 hover:scale-90 transition duration-300 aspect-video">
          <img
            src="/mesh_legacy.png"
            alt="Legacy Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Legacy;
