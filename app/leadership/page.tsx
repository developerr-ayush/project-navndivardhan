import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import React from "react";

export default function page() {
  return (
    <>
      <Hero img="/image/hero.jpeg" />
      <Team />
    </>
  );
}
