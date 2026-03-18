import React from "react";
import "./Properties.css";
import Cards from "../Cards/Cards";
import ScrollReveal from "../Onscroll";
const Properties = () => {
  return (
    <>
      <section className="w-330 mx-auto py-32">
        <div className="  mx-auto  rounded-[64px] bg-[#ff7526] w-105 text-center">
          <h2 className="text-white font-light text-2xl  leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
            Turning imagination into iconic realities
          </h2>
        </div>
        <div className="mx-auto mb-10 mt-5 w-250 text-[44px] text-[#742092] pt-3 font-['Plus Jakarta Sans', sans-serif] leading-12 text-center font-bold ">
          <h3>Designing Tomorrow’s Landmarks Today</h3>
        </div>

        <div className="flex flex-row">
          <div className="w-140 m-10 ">
            <p>
              Since 2018, ARC Developers has been redefining commercial real
              estate by creating vibrant spaces that combine innovation,
              functionality, and sustainability. As a leading name in real
              estate development, we specialize in crafting premium projects
              that promote growth, opportunity, and community. Our commitment to
              excellence drives us to deliver high-quality, forward-thinking
              developments that meet the evolving needs of businesses and
              investors alike. Whether you’re looking for a dynamic office
              space, a strategic retail location, or a custom commercial
              property, ARC Developers is here to bring your vision to life with
              integrity, precision, and purpose.
            </p>
            <div className="mt-10  flex justify-start">
              <a href="#" className="footer-btn3">
                Learn More
              </a>
            </div>
          </div>
          <div className="w-130">
            <img className="w-full" src="/img_1.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
