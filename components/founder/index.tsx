import React from "react";
import GSAP from "./gsap";

export const Founder = () => {
  return (
    <div className="container my-6 px-6 mx-auto Founder">
      <GSAP />
      <h2 className="text-[2rem] lg:text-[3.125rem] text-[#bb8866]  text-center founder-title">
        Meet Our Founder
      </h2>
      <div className="founder-item my-14">
        <div className="info md:flex items-center gap-4 lg:gap-[4rem] founder-img">
          <img
            className="w-[15rem] max-w-full mb-4"
            src="/image/anil-mutha.png"
            alt=""
          />
          <div className="text">
            <h3 className="text-[20px] md:text-[50px] text-[#bb8866]  font-semibold">
              Mr. Anil Nagraj Mutha
            </h3>
            <p className="text-[20px] md:text-[25px] leading-none font-semibold">
              Chief Visionary and Co-Founder
            </p>
          </div>
        </div>
        <p className="mt-8 founder-desc">
          Anil Nagraj Mutha, with his remarkable foresight and entrepreneurial
          spirit, has been instrumental in the rise of Nandivardhan Group. His
          visionary approach focuses on creating extraordinary living spaces
          that push the boundaries of design and functionality. He oversees
          every aspect of the company&apos;s operations, ensuring that
          innovation remains at the core of every project. His leadership has
          not only led to numerous successful developments but also solidified
          Nandivardhan&apos;s reputation as a trusted and respected name in real
          estate.
        </p>
      </div>
    </div>
  );
};
