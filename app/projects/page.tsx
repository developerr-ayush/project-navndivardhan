import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects-page";
import React from "react";

export default function page() {
  return (
    <>
      <Hero img="/image/projects.jpg" />
      <Projects />
    </>
  );
}
