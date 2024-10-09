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
import React from "react";

export default function Home() {
  return (
    <>
      <Showcase />
      <h2 className="text-[4vw] text-center py-10 bg-black text-[#bb8866]">
        Transforming Spaces, Elevating Lives
      </h2>
      <About />
      <UpcomingVideo />
      <YearsExp />
      <div className="text-[4vw] text-center py-16 bg-black text-[#bb8866]  content-center flex justify-center items-baseline gap-8 leading-none">
        <div className="flex  gap-2 items-end">
          <Counter counter={35000} />+
          <span className="text-[2rem] text-left leading-none">
            Delight <br />
            Customer
          </span>
        </div>
        <br />
        <div className="flex  gap-2 items-end">
          <Counter counter={500} />+
          <span className="text-[2rem] text-left leading-none">
            Happy <br /> Families
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
