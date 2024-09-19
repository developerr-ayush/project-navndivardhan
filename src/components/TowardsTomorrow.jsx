import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const TowardsTomorrow = () => {
  return (
    <div>
      <h3 className="bg-[#84754e] pt-6 pb-12 text-white text-[10vw] lg:text-[3vw] text-center">
        Towards Tomorrow
      </h3>
      <div className="grid px-8 lg:grid-cols-2 items-center gap-8 -mt-8">
        <img src="/image/about-us.jpg" alt="" />
        <div className="text-left py-8">
          <p className="text-[5.333vw] mb-6 lg:text-[1.5vw]">
            The Nandivardhan Group, a leading real estate developer in Thane &
            Mumbai, specializes in creating luxurious residential projects.
            Renowned for their commitment to quality, they focus on prime
            locations and essential amenities to deliver exceptional living
            experiences.
          </p>
          <a
            href="#"
            className="text-[#84754E] tracking-[.2em] flex gap-2 items-center text-[1.2rem]"
          >
            VIEW SITE PLAN
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};
