import React from "react";
import GSAP from "./gsap";
import { SectionWrapper } from "../section-wrapper";

export const YearsExp = () => {
  return (
    <SectionWrapper className=" YearsExp">
      <GSAP />
      <div
        className="flex items-end justify-center gap-3
      "
      >
        <div className="text-bg-img-wrap">
          <h2 className="text-[10rem] md:text-[20rem] font-extrabold leading-none  flex text-bg-img">
            <span className="shrink-0 ">2</span>
            <span className="shrink-0">2</span>
          </h2>
        </div>
        <h2 className="flex flex-col pb-7 gap-2 text-[1.4rem] md:text-[2.4rem] md:pb-[3rem] leading-none textual-context">
          <span className=" font-bold text-[#bb8866]">years of legacy</span>
          <span>In Real Estate Development</span>
        </h2>
      </div>
    </SectionWrapper>
  );
};
