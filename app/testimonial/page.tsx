import { Hero } from "@/components/hero";
import TestimonialCarousel from "@/components/testimonial";
import TestimonialVideoCarousel from "@/components/testimonial-video";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero img="/image/projects.jpg" />
      <h3 className="text-[2rem] text-center mt-8 font-bold">
        Whats our Partners have to Says
      </h3>
      <TestimonialCarousel />
      <h3 className="text-[2rem] text-center mt-8 font-bold">
        Whats our Customer Have to say Says
      </h3>
      <TestimonialVideoCarousel />
    </div>
  );
}
