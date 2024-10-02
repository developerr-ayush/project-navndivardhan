import { AboutCompany } from "@/components/about-company";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import React from "react";

export default function page() {
  return (
    <>
      <Hero />
      <h2 className="text-[4.5vw] text-center py-10 text-[#b2b3b3]">
        Transforming Spaces, Elevating Lives
      </h2>
      <AboutCompany />
      <Team />
    </>
  );
}
