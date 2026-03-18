import React from "react";

const Legacy = () => {
  return (
    <>
      <section className="w-330 mx-auto py-25">
        <div className="  mx-auto  rounded-[64px] bg-[#ff7526] w-120 text-center">
          <h2 className="text-white font-light text-2xl leading-none inline-block py-2 font-['Plus_Jakarta_Sans']">
            BUILDING TOMORROW’S LANDMARKS
          </h2>
        </div>

        <h2 className="text-3xl text-[#742092] md:text-4xl font-bold mt-5 text-center">
          THE LEGACY OF ARC DEVELOPERS
        </h2>
        <p className="text-md pt-5 text-center w-300">
          With a strong vision and years of dedication, ARC Developers continues
          to redefine Pakistan’s real estate landscape through innovation,
          integrity, and excellence. With more than 7 iconic projects
          successfully delivered and several new ventures underway, we take
          pride in creating developments that combine modern architecture with
          long-term value. Every ARC Developers project reflects our commitment
          to quality, precision, and innovation, transforming ideas into
          landmarks that inspire trust and stand the test of time.
        </p>
        <div className="mt-10 flex justify-center">
          <a href="#" className="footer-btn3">
            Explore Our Projects
          </a>
        </div>
        <img className="w-full" src="/house.png" alt="" />
      </section>
    </>
  );
};

export default Legacy;
