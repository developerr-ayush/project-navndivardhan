import React from "react";
import { Title } from "../title";

export const OurLeader = () => {
  return (
    <div className=" gap-8 container mx-auto px-4">
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 timeline-title">
          Our Leaders
        </Title>
        <p className="text-[1.8rem] leading-none font-semibold timeline-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          perspiciatis?
        </p>
      </div>

      <div className="body flex-1 grid md:grid-cols-2 gap-8 max-w-[40rem] mx-auto">
        <div className="flex   flex-col  gap-4 items-center px-4 py-8 my-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative shrink-0 w-48 h-48 mb-4 rounded-full overflow-hidden">
            <img
              src="/image/anil-mutha.png"
              alt={`Portrait of persom`}
              className="rounded-full"
            />
          </div>
          <div className="content text-center ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mr. Anil Nagraj Mutha
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Chief Visionary and Co-Founder
            </p>
            <a
              href="/leadership"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              Leadership
            </a>
          </div>
        </div>
        <div className="flex   flex-col  gap-4 items-center px-4 py-8 my-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative shrink-0 w-48 h-48 mb-4 rounded-full overflow-hidden">
            <img
              src="/image/yash-mutha.png"
              alt={`Portrait of persom`}
              className="rounded-full"
            />
          </div>
          <div className="content text-center ">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mr. Anil Nagraj Mutha
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Chief Visionary and Co-Founder
            </p>
            <a
              href="/leadership"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              Leadership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
