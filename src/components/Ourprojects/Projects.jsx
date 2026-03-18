import React from "react";

const Projects = () => {
  return (
    <>
      <section className="w-330 mx-auto py-32">
        <div className="  mx-auto  rounded-[64px] bg-[#ff7526] w-65 text-center">
          <h2 className="text-white font-light text-2xl  leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
            Our Projects
          </h2>
        </div>

        <h2 className="text-3xl text-[#742092] md:text-4xl font-bold mt-5 text-center">
          Projects Highlights
        </h2>

        <div className="flex flex-col gap-8">
          {/* Image Layer 1 */}
          <div className="w-329 mx-auto py-10 flex felx-row gap-8">
            {/* Image 1 */}
            <div className="relative w-3xl h-91.25 overflow-hidden group rounded-xl">
              <img
                src="/img.png"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center
    transform -translate-y-10 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-out"
              >
                <p className="text-white text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>
            {/* Image 2 */}
            <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
              <img
                src="/img.png"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center
    transform -translate-y-10 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-out"
              >
                <p className="text-white text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>
          </div>
          {/* image layer 2 */}
          <div className="mx-auto w-329 flex flex-row gap-8 ">
            {/* Image 3 */}
            <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
              <img
                src="/img.png"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center
    transform -translate-y-10 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-out"
              >
                <p className="text-white text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>
            {/* Image 4 */}
            <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
              <img
                src="/img.png"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center
    transform -translate-y-10 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-out"
              >
                <p className="text-white text-xl font-semibold">
                  Under Construction
                </p>
              </div>
            </div>
            {/* Image 5 */}
            <div className="relative w-122.5 h-91.25 overflow-hidden group rounded-xl">
              <img
                src="/img.png"
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center
    transform -translate-y-10 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500 ease-out"
              >
                <p className="text-white text-xl font-semibold">
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
