import React from "react";
import { Awards } from "@/components/awards";
import { Hero } from "@/components/hero";
import { Design } from "@/components/design";
import ImageGrid from "@/components/image-grid";
import { Media } from "@/components/media";

export default function page() {
  return (
    <div>
      <Hero img="/image/projects.jpg" />
      <Design />
      <ImageGrid />
      <Awards />
      <Media />
    </div>
  );
}
