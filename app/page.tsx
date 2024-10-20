import { About } from "@/components/about";
import { Counter } from "@/components/counter";
import { Founder } from "@/components/founder";
import { Media } from "@/components/media";
import { News } from "@/components/news";
import { Project } from "@/components/project";
import { Showcase } from "@/components/showcase";
import { Sustainability } from "@/components/sustainability";
import { UpcomingVideo } from "@/components/upcoming-video";
import { YearsExp } from "@/components/years-exp";
import { SplitText } from "@/data/atom/SplitText";
import { DELAY } from "@/util";
import React from "react";

export default function Home() {
  return (
    <>
      <Showcase />
      <SplitText
        text="Transforming Spaces, Elevating Lives"
        delay={DELAY}
        className="text-[5vw] md:text-[3vw] main-text h-[15vh] md:h-[20vh] content-center text-center  bg-black text-[#bb8866]"
      ></SplitText>
      <About />
      <UpcomingVideo />
      <YearsExp />
      <div className="text-[4vw] items-center text-center py-16 bg-black text-[#bb8866]  content-center flex-col md:flex-row flex justify-center md:items-baseline gap-8 leading-none">
        <div className="flex  items-center gap-4 md:w-[30%] lg:w-[25%] xl:w-[20%] justify-center ">
          <div>
            <Counter counter={26} />
          </div>
          <span className="text-[2rem] text-left  leading-[1.4]">
            Projects <br className="hidden lg:block" /> Delivered
          </span>
        </div>
        <div className="flex  items-center gap-4 md:w-[30%] lg:w-[25%] xl:w-[20%] justify-center ">
          <div>
            <Counter counter={10000} />
          </div>
          <span className="text-[2rem] text-left leading-[1.2]">
            Happy <br className="hidden lg:block" /> Families
          </span>
        </div>
        <div className="flex  items-center gap-4 md:w-[30%] lg:w-[25%] xl:w-[20%] justify-center ">
          <div>
            <Counter counter={4} />
          </div>
          <span className="text-[2rem] text-left leading-[1.2]">
            Million <br className="hidden lg:block" /> Sqft
          </span>
        </div>
      </div>
      <Founder />
      <Project />
      <Media />
      <Sustainability />
      <News />
    </>
  );
}
