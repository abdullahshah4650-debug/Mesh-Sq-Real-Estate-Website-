import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    title: "Find Real Estate",
    text: "Search and explore the best properties available in your area.",
    img: "/service_img1.png",
  },
  {
    id: 2,
    title: "Meet Realtor",
    text: "Connect with professional real estate agents easily.",
    img: "/service_img2.png",
  },
  {
    id: 3,
    title: "Documentation",
    text: "Complete all legal paperwork safely and efficiently.",
    img: "/service_img3.png",
  },
  {
    id: 4,
    title: "Take The Keys",
    text: "Receive your keys and enjoy your new dream home.",
    img: "/service_img4.png",
  },
];

export default function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-center",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 md:py-16">
      {/* Badge */}
      <div className="mx-auto w-fit rounded-2xl sm:rounded-3xl md:rounded-[64px] bg-[#ff7526] text-center px-4 sm:px-6 py-3">
        <h2 className="text-white lg:text-[20px] font-light text-base sm:text-lg md:text-2xl leading-tight font-['Plus_Jakarta_Sans']">
          Our Fundamental Principles
        </h2>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:mb-20 text-[#742092] font-bold pt-6 pb-10 text-center max-w-2xl mx-auto leading-tight">
        Follow Simple Steps To Buy Property
      </h2>
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-10 lg:gap-12 mt-8">
        {data.map((item) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={item.id * 100}
            className={`relative bg-transparent rounded-lg sm:rounded-xl pt-20 pb-8 px-3 sm:px-4 text-center group transition w-full mx-auto
        ${item.id % 2 === 1 ? "translate-y-0 lg:translate-y-0" : "lg:translate-y-12"}
      `}
          >
            {/* Image */}
            <div className="absolute -top-10 sm:-top-12 md:-top-14 lg:-top-16 left-1/2 -translate-x-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 rounded-full object-cover border-4 border-white transition duration-500 group-hover:-rotate-12"
              />
              <div className="absolute -right-2 top-2 bg-[#ff7526] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                {String(item.id).padStart(2, "0")}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold group-hover:text-[#742092] transition mt-6">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
