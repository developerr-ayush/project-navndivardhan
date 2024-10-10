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
      <div className="text-[4vw] items-center text-center py-16 bg-black text-[#bb8866]  content-center flex-col md:flex-row flex justify-center md:items-baseline gap-8 leading-none">
        <div className="flex  gap-4 md:w-[30%] lg:w-[25%] xl:w-[20%] items-end">
          <div>
            <Counter counter={22} />
          </div>
          <span className="text-[2rem] text-left leading-none">
            Projects <br className="hidden lg:block" /> delivered
          </span>
        </div>
        <div className="flex  gap-4 md:w-[30%] lg:w-[25%] xl:w-[20%] items-end">
          <div>
            <Counter counter={800} />
          </div>
          <span className="text-[2rem] text-left leading-none">
            Happy <br className="hidden lg:block" /> Families
          </span>
        </div>
        <div className="flex  gap-4 md:w-[30%] lg:w-[25%] xl:w-[20%] items-end">
          <div>
            <Counter counter={4} />
          </div>
          <span className="text-[2rem] text-left leading-none">
            million <br className="hidden lg:block" /> Sqft
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
