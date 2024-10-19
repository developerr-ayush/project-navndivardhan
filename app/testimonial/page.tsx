import { Hero } from "@/components/hero";
import { SectionWrapper } from "@/components/section-wrapper";
import TestimonialCarousel from "@/components/testimonial";
import TestimonialVideoCarousel from "@/components/testimonial-video";
import { Title } from "@/components/title";
import React from "react";
const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    content:
      "This product has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours.",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Director, InnovateCo",
    content:
      "I can't imagine running our campaigns without this tool. It's been a game-changer for our team's productivity.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, StartupX",
    content:
      "The API is so well-designed, it made integration a breeze. Kudos to the development team!",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer, DesignHub",
    content:
      "As a designer, I appreciate the attention to detail in the UI. It's a joy to use and recommend to clients.",
  },
];

export default function page() {
  return (
    <div>
      <Hero img="/image/projects.jpg" />
      <SectionWrapper className="px-0">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] text-center">
          Whats our Partners Have to Says
        </Title>
        <TestimonialCarousel testimonial={testimonials} />
      </SectionWrapper>
      <SectionWrapper className="px-0">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] text-center">
          Whats our Customer Have to Say
        </Title>

        <TestimonialVideoCarousel />
      </SectionWrapper>
    </div>
  );
}
