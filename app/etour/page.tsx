import { Etour } from "@/components/etour";
import { Hero } from "@/components/hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero img="/image/projects.jpg" />
      <Etour />
    </div>
  );
}
