import React from "react";
import { Hero } from "@/components/hero";
import { GrowWithUs } from "@/components/grow-with-us";
import { KnowUs } from "@/components/know-us";
import { Openings } from "@/components/openings";
import { ImageCarousel } from "@/components/image-carousel";

export default function page() {
  return (
    <div>
      <Hero img="/image/hero.jpeg" />
      <KnowUs />
      <ImageCarousel />
      <GrowWithUs />
      <Openings />
    </div>
  );
}
