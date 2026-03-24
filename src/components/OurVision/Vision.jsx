// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Vision = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: "ease-out",
//       once: false,
//       mirror: true,
//       offset: 100,
//       anchorPlacement: "top-center",
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <section id="About us" className="w-full sm:w-350 mx-auto pt-8 sm:pt-12 md:pt-0 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6">
//       {/* Heading */}
//       <div
//         data-aos="fade-up"
//         className="mx-auto mb-6 sm:mb-8 md:mb-10 rounded-2xl sm:rounded-3xl md:rounded-[64px] bg-[#ff7526] w-full sm:w-52 md:w-60 text-center px-4 sm:px-6"
//       >
//         <h2 className="text-white font-light text-base sm:text-lg md:text-2xl leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
//           Our Mission
//         </h2>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-20">
//         {/* Left Text */}
//         <p
//           data-aos="fade-right"
//           className="w-full md:w-160 pl-0 md:pl-20 text-gray-700 text-sm sm:text-base leading-relaxed"
//         >
//           Since 2018, Mesh Square has been transforming the commercial real
//           estate sector by moving beyond traditional construction to create
//           truly vibrant, functional, and sustainable environments. What began as
//           a vision to bridge the gap between modern innovation and practical
//           utility has evolved into a portfolio of premium developments that
//           serve as catalysts for business growth.
//           <br />
//           <span className="text-lg sm:text-xl md:text-2xl inline-block py-3 sm:py-5 text-[#742092] font-semibold">
//             Our Vision & Success
//           </span>
//           <br />
//           At Mesh Square, we believe that a building is more than just four
//           walls—it is an ecosystem where opportunity meets community. Our
//           journey is defined by a relentless commitment to excellence and a
//           forward-thinking approach to the evolving needs of global investors
//           and modern enterprises. We don't just deliver projects; we craft
//           strategic spaces designed to foster innovation and long-term value.
//         </p>

//         {/* Right Image */}
//         <div data-aos="fade-left" className="w-full md:w-140">
//           <img
//             className="w-full md:w-140 h-48 sm:h-64 md:h-80 rounded-lg sm:rounded-2xl object-cover"
//             src="/Our_mssion.png"
//             alt="Our Mission"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Vision;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-center",
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="About-us"
      className="w-full px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20 overflow-hidden"
    >
      {/* Heading */}
      <div
        data-aos="fade-up"
        className="mx-auto mb-8 sm:mb-10 md:mb-12 rounded-2xl sm:rounded-3xl md:rounded-[64px] bg-[#ff7526] text-center px-6 py-3 max-w-150"
      >
        <h2 className="text-white font-light text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight font-['Plus_Jakarta_Sans']">
          Our Mission
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
        {/* Left Text */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 max-w-2xl text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
        >
          <p>
            Since 2018, Mesh Square has been transforming the commercial real
            estate sector by moving beyond traditional construction to create
            truly vibrant, functional, and sustainable environments. What began
            as a vision to bridge the gap between modern innovation and
            practical utility has evolved into a portfolio of premium
            developments that serve as catalysts for business growth.
          </p>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl block py-3 sm:py-5 text-[#742092] font-semibold">
            Our Vision & Success
          </span>
          <p>
            At Mesh Square, we believe that a building is more than just four
            walls—it is an ecosystem where opportunity meets community. Our
            journey is defined by a relentless commitment to excellence and a
            forward-thinking approach to the evolving needs of global investors
            and modern enterprises. We don't just deliver projects; we craft
            strategic spaces designed to foster innovation and long-term value.
          </p>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="w-full lg:w-1/2 max-w-xl">
          <img
            className="w-full h-auto rounded-lg sm:rounded-2xl object-cover shadow-lg"
            src="/Our_mssion.png"
            alt="Our Mission"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
