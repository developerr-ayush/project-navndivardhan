import { About } from "@/components/about";
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
      <h2 className="text-[4.5vw] text-center py-10 bg-black text-[#bb8866]">
        Transforming Spaces, Elevating Lives
      </h2>
      <About />
      <UpcomingVideo />
      <YearsExp />
      <h2 className="text-[4vw] text-center py-10 bg-black text-[#bb8866]  content-center">
        35000+ Delight Customer
        <br />
        500+ Happy Families Landmark Customers
      </h2>
      <Founder />
      <Project />
      <Media />
      <Sustainability />
      <News />
    </>
  );
}
