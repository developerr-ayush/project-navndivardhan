import React from "react";
import GSAP from "./gsap";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "../title";

export const YearsExp = () => {
  return (
    <SectionWrapper className=" YearsExp">
      <GSAP />
      <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 text-center ">
        Values Etched In Veracity
      </Title>

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
        <h2 className="flex flex-col pb-7 gap-2 text-[1.4rem] md:text-[3rem] md:pb-[3.5rem] leading-none textual-context tracking-[3.5px]">
          <span className="  text-[#bb8866]">years of legacy</span>
        </h2>
      </div>
    </SectionWrapper>
  );
};
