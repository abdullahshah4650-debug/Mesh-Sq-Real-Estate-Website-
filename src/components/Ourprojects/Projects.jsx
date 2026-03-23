// import React from "react";

// const Projects = () => {
//   return (
//     <>
//       <section className="w-330 mx-auto py-32">
//         <div className="  mx-auto  rounded-[64px] bg-[#ff7526] w-65 text-center">
//           <h2 className="text-white font-light text-2xl  leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
//             Our Projects
//           </h2>
//         </div>

//         <h2 className="text-3xl text-[#742092] md:text-4xl font-bold mt-5 text-center">
//           Projects Highlights
//         </h2>

//         <div className="flex flex-col gap-8 pt-10">
//           {/* Image Layer 1 */}
//           <div className="w-329 mx-auto pt-5 flex felx-row gap-8">
//             {/* Image 1 */}
//             <div className="relative w-3xl h-91.25 overflow-hidden group rounded-xl">
//               <img
//                 src="/property_1.webp"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               <div
//                 className="absolute top-0 left-0 w-full h-full flex items-center justify-center
//     transform -translate-y-10 opacity-0
//     group-hover:translate-y-0 group-hover:opacity-100
//     transition-all duration-500 ease-out"
//               >
//                 <p className="text-white text-xl font-semibold">
//                   Under Construction
//                 </p>
//               </div>
//             </div>
//             {/* Image 2 */}
//             <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
//               <img
//                 src="/property_2.webp"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               <div
//                 className="absolute top-0 left-0 w-full h-full flex items-center justify-center
//     transform -translate-y-10 opacity-0
//     group-hover:translate-y-0 group-hover:opacity-100
//     transition-all duration-500 ease-out"
//               >
//                 <p className="text-white text-xl font-semibold">
//                   Under Construction
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* image layer 2 */}
//           <div className="mx-auto w-329 flex flex-row gap-8 ">
//             {/* Image 3 */}
//             <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
//               <img
//                 src="/property_3.webp"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               <div
//                 className="absolute top-0 left-0 w-full h-full flex items-center justify-center
//     transform -translate-y-10 opacity-0
//     group-hover:translate-y-0 group-hover:opacity-100
//     transition-all duration-500 ease-out"
//               >
//                 <p className="text-white text-xl font-semibold">
//                   Under Construction
//                 </p>
//               </div>
//             </div>
//             {/* Image 4 */}
//             <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
//               <img
//                 src="/property_4.webp"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               <div
//                 className="absolute top-0 left-0 w-full h-full flex items-center justify-center
//     transform -translate-y-10 opacity-0
//     group-hover:translate-y-0 group-hover:opacity-100
//     transition-all duration-500 ease-out"
//               >
//                 <p className="text-white text-xl font-semibold">
//                   Under Construction
//                 </p>
//               </div>
//             </div>
//             {/* Image 5 */}
//             <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
//               <img
//                 src="/property_5.webp"
//                 alt=""
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//               <div
//                 className="absolute top-0 left-0 w-full h-full flex items-center justify-center
//     transform -translate-y-10 opacity-0
//     group-hover:translate-y-0 group-hover:opacity-100
//     transition-all duration-500 ease-out"
//               >
//                 <p className="text-white text-xl font-semibold">
//                   Under Construction
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;
import React from "react";

const Projects = () => {
  return (
    <>
      <section
        id="property"
        className="w-full sm:w-330 mx-auto  sm:py-16 md:py-30 lg:py-20 px-4 sm:px-6"
      >
        {/* Badge */}
        <div className="mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[64px] bg-[#ff7526] w-full sm:w-56 md:w-60 lg:w-65 text-center px-4 sm:px-6">
          <h2 className="text-white font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
            Our Projects
          </h2>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#742092] font-bold mt-4 sm:mt-5 text-center px-2">
          Projects Highlights
        </h2>

        {/* Projects Grid */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10">
          {/* Row 1 */}
          <div className="w-full mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
            {/* Image 1 - Large on desktop, full width on mobile */}
            <div className="relative w-full sm:w-2/5 md:w-2/5 h-48 sm:h-56 md:h-64 lg:h-91.25 overflow-hidden group rounded-lg md:rounded-xl">
              <img
                src="/property_1.webp"
                alt="Property 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-full sm:w-3/5 md:w-3/5 h-48 sm:h-56 md:h-64 lg:h-91.25 overflow-hidden group rounded-lg md:rounded-xl">
              <img
                src="/property_2.webp"
                alt="Property 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="w-full mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
            {/* Image 3 */}
            <div className="relative w-full sm:w-1/3 md:w-1/3 h-48 sm:h-56 md:h-64 lg:h-91.25 overflow-hidden group rounded-lg md:rounded-xl">
              <img
                src="/property_3.webp"
                alt="Property 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative w-full sm:w-1/3 md:w-1/3 h-48 sm:h-56 md:h-64 lg:h-91.25 overflow-hidden group rounded-lg md:rounded-xl">
              <img
                src="/property_4.webp"
                alt="Property 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>

            {/* Image 5 */}
            <div className="relative w-full sm:w-1/3 md:w-1/3 h-48 sm:h-56 md:h-64 lg:h-91.25 overflow-hidden group rounded-lg md:rounded-xl">
              <img
                src="/property_5.webp"
                alt="Property 5"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
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
