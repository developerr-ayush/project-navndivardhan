import React from "react";
import { Title } from "../title";
import Image from "next/image";
import arrowRight from "@/public/icon/arrow-right-blue.svg";

export const OurLeader = () => {
  return (
    <div className=" gap-8 container mx-auto px-4 lg:flex lg:items-center lg:justify-center">
      <div className="head  max-w-[70rem] mx-auto lg:mx-0 lg:text-left lg:max-w-[30%]  mb-8 lg:mb-16 ">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 timeline-title">
          Our Leaders
        </Title>
        <p className="text-[1.8rem] leading-none font-semibold timeline-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          perspiciatis?
        </p>
        <a href="/leadership" className=" transition-colors duration-300">
          <Image
            src={arrowRight}
            alt="arrow"
            className="  w-12 h-12 arrow rotate-180"
          />
        </a>
      </div>

      <div className="body flex-1 lg:mx-0 grid md:grid-cols-2 gap-8 max-w-[40rem] mx-auto">
        <div className="flex   flex-col  gap-4 items-center px-4 py-8 my-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative shrink-0 w-48 h-48 mb-4 rounded-sm overflow-hidden">
            <img
              src="/image/anil-mutha.png"
              alt={`Portrait of persom`}
              className="rounded-sm"
            />
          </div>
          <div className="content text-center ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mr. Anil Nagraj Mutha
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Chief Visionary and Co-Founder
            </p>
          </div>
        </div>
        <div className="flex   flex-col  gap-4 items-center px-4 py-8 my-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative shrink-0 w-48 h-48 mb-4 rounded-sm overflow-hidden">
            <img
              src="/image/yash-mutha.png"
              alt={`Portrait of persom`}
              className="rounded-sm"
            />
          </div>
          <div className="content text-center ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mr. Anil Nagraj Mutha
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Chief Visionary and Co-Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
