import React from "react";
import GSAP from "./gsap";

export const YearsExp = () => {
  return (
    <div className="my-16 YearsExp">
      <GSAP />
      <div
        className="flex items-end justify-center gap-3
      "
      >
        <h2 className="text-[10rem] md:text-[20rem] font-extrabold leading-none  flex">
          <span className="shrink-0 text-bg-img">2</span>
          <span className="shrink-0 text-bg-img">2</span>
        </h2>
        <h2 className="flex flex-col pb-7 gap-2 text-[1.4rem] md:text-[2.4rem] md:pb-[3rem] leading-none textual-context">
          <span className=" font-bold text-[#bb8866]">Years Of Exp</span>
          <span>In Real Estate Development</span>
        </h2>
      </div>
    </div>
  );
};
