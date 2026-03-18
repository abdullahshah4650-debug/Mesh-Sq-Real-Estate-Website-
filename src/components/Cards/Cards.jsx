import React from "react";
import "./Cards.css";
import ScrollReveal from "../Onscroll";
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
  return (
    <ScrollReveal>
      <div className="w-full bg-white pt-0 pb-10 px-7 md:px-16">
        <div className="  mx-auto  rounded-[64px] bg-[#ff7526] w-80 text-center">
          <h2 className="text-white font-light text-2xl  leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
            Our Fundamental Principles
          </h2>
        </div>

        <h2 className="text-3xl text-[#742092] md:text-4xl font-bold mt-5 text-center">
          Follow Simple Steps To Buy Property
        </h2>

        <div className="grid grid-cols-4 gap-8 mt-30">
          {data.map((item) => (
            <div
              key={item.id}
              className={`relative bg-gray-100  rounded-xl pt-20 pb-10 px-4 text-center group hover:shadow-lg transition w-70 h-50 mx-auto ${
                item.id % 2 === 1 ? "translate-y-0" : "translate-y-12"
              }`}
            >
              <div className=" absolute -top-16 left-1/2 -translate-x-1/2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white transition duration-500 group-hover:-rotate-12"
                />

                <div className="absolute flip-number -right-2 top-2 bg-[#ff7526] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {String(item.id).padStart(2, "0")}
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-4 group-hover:text-[#742092] transition">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
