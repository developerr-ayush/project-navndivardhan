import React from "react";

export const OurLeader = () => {
  return (
    <div className="lg:flex items-center gap-8 container mx-auto px-4">
      <div className="head">
        <h3 className="text-[2rem] font-bold text-[#bb8866]">Our Leaders</h3>
      </div>
      <div className="body flex-1 lg:flex gap-8">
        <div className="flex  flex-1 flex-col items-center px-4 py-8 my-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
            <img
              src="/image/anil-mutha.png"
              alt={`Portrait of persom`}
              className="rounded-full"
            />
          </div>
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
        <div className="flex flex-1  flex-col items-center px-4 py-8 my-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
            <img
              src="/image/yash-mutha.png"
              alt={`Portrait of persom`}
              className="rounded-full"
            />
          </div>
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
  );
};
