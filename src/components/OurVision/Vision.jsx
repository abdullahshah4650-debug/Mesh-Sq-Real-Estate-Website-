import React from "react";
import ScrollReveal from "../Onscroll";

const Vision = () => {
  return (
    <>
      <section className="w-330 mx-auto pt-0 pb-10">
        <ScrollReveal>
          <div className="  mx-auto mb-10  rounded-[64px] bg-[#ff7526] w-60 text-center">
            <h2 className="text-white font-light text-2xl leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
              Our Mission
            </h2>
          </div>
        </ScrollReveal>
        <div className="flex flex-row items-center gap-20">
          <ScrollReveal direction="left">
            <p className="w-160 pl-20">
              Since 2018, Mesh Square has been transforming the commercial real
              estate sector by moving beyond traditional construction to create
              truly vibrant, functional, and sustainable environments. What
              began as a vision to bridge the gap between modern innovation and
              practical utility has evolved into a portfolio of premium
              developments that serve as catalysts for business growth. <br />
              <span className="text-2xl inline-block py-5 text-[#742092] ">
                Our Vision & Success
              </span>{" "}
              <br />
              At Mesh Square, we believe that a building is more than just four
              walls—it is an ecosystem where opportunity meets community. Our
              journey is defined by a relentless commitment to excellence and a
              forward-thinking approach to the evolving needs of global
              investors and modern enterprises. We don’t just deliver projects;
              we craft strategic spaces designed to foster innovation and
              long-term value. add this vision paragraph as well
            </p>
          </ScrollReveal>
          <div>
            <ScrollReveal direction="right">
              <img
                className=" w-120 h-80 rounded-2xl items-center"
                src="/Our_mssion.png"
                alt=""
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
