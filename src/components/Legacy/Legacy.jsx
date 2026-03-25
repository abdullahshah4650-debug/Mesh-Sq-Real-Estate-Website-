import React from "react";
const Legacy = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      {/* Badge */}
      <div className="mx-auto rounded-2xl sm:rounded-3xl md:rounded-[64px] bg-[#ff7526] text-center px-6 py-3 sm:py-4 max-w-100">
        <h2 className="text-white  font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-['Plus_Jakarta_Sans']">
          Building Tomorrow LandMark's
        </h2>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl text-[#742092] font-bold mt-6 sm:mt-8 text-center max-w-225 mx-auto leading-tight">
        The Legacy Of Mesh Sq
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl pt-4 sm:pt-6 text-center max-w-4xl mx-auto text-gray-700 leading-relaxed">
        MESH SQ, currently trading as MESH SQ REALTORS , was established in 2018
        with a vision of driving Real Estate Investments, Sales, consultancy
        services, and providing sufficient and value-added Real Estate services.
        The company is currently becoming a multi-faceted “property practice”
        passionately having experienced in Marketing and Brand Communication
        supporting staff. The company is offering professional services that
        include Property Valuation as well as Market Strategies and project
        accurate predictions. For the future, MESH SQ REALTORS has a structured
        plan of high yield investment, a great real estate portfolio, an aim,
        and a vision of creating and satisfying their clients and investors with
        more than expectation.
      </p>

      {/* CTA Button */}
      <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
        <a href="#" className="header-btn3">
          Explore Our Projects{" "}
        </a>
      </div>

      {/* Full Width Image */}
      <div className="mt-10">
        <img
          className="w-full max-w-300 mx-auto object-cover rounded-lg"
          src="/house.png"
          alt="Legacy Image"
        />
      </div>
    </section>
  );
};

export default Legacy;
