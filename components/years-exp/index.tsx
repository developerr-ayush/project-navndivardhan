import React from "react";
import GSAP from "./gsap";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "../title";

export const YearsExp = () => {
  return (
    <SectionWrapper className=" YearsExp">
      <GSAP />
      <Title className="mx-auto  text-[2rem] tracking-[6px] uppercase lg:text-[3.8vw] text-[#bb8866] mb-12 text-center ">
        Values Etched In Veracity
      </Title>

      <div
        className="flex items-end justify-center gap-6 lg:gap-8
      "
      >
        <div className="text-bg-img-wrap">
          <h2 className="text-[10rem] md:text-[20rem] font-extrabold leading-none  flex text-bg-img">
            <span className="shrink-0 ">2</span>
            <span className="shrink-0">2</span>
          </h2>
        </div>
        <h2 className="flex flex-col pb-7 gap-2 text-[1.8rem] md:text-[5rem] md:pb-[3rem] leading-none textual-context tracking-[3.5px]">
          <span className="  text-[#bb8866]">years of legacy</span>
        </h2>
      </div>
    </SectionWrapper>
  );
};
