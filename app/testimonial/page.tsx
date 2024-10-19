import { Hero } from "@/components/hero";
import { SectionWrapper } from "@/components/section-wrapper";
import TestimonialCarousel from "@/components/testimonial";
import TestimonialVideoCarousel from "@/components/testimonial-video";
import { Title } from "@/components/title";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero img="/image/projects.jpg" />
      <SectionWrapper className="px-0">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] text-center">
          Whats our Partners have to Says
        </Title>
        <TestimonialCarousel />
      </SectionWrapper>
      <SectionWrapper className="px-0">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] text-center">
          Whats our Customer Have to Says
        </Title>

        <TestimonialVideoCarousel />
      </SectionWrapper>
    </div>
  );
}
