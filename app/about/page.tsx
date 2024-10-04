import { AboutCompany } from "@/components/about-company";
import { Awards } from "@/components/awards";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import Timeline from "@/components/timeline";
import React from "react";

export default function page() {
  return (
    <>
      <Hero img="/image/hero.jpeg" />
      <AboutCompany />
      <Team />
      <Awards />
      <Timeline />;
    </>
  );
}
