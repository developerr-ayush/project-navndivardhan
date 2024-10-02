import { About } from "@/components/about";
import { News } from "@/components/news";
import { Project } from "@/components/project";
import { Showcase } from "@/components/showcase";
import { Sustainability } from "@/components/sustainability";
import React from "react";

export default function Home() {
  return (
    <>
      <Showcase />
      <h2 className="text-[4.5vw] text-center py-10 text-[#b2b3b3]">
        Transforming Spaces, Elevating Lives
      </h2>
      <About />
      <Project />
      <Sustainability />
      <News />
    </>
  );
}
