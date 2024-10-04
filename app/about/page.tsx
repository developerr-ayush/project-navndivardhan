import { AboutCompany } from "@/components/about-company";
import { Awards } from "@/components/awards";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { Timeline } from "@/components/timeline";
import React from "react";

const timelineItems: TimelineItem[] = [
  {
    year: 2020,
    title: "Company Founded",
    content: "Our journey began with a vision to revolutionize the industry.",
  },
  {
    year: 2021,
    title: "First Major Client",
    content:
      "We secured our first Fortune 500 client, marking a significant milestone.",
  },
  {
    year: 2022,
    title: "Expansion to Europe",
    content: "We opened our first European office in Berlin, Germany.",
  },
  {
    year: 2023,
    title: "Product Launch",
    content:
      "We launched our flagship product, receiving rave reviews from industry experts.",
  },
  {
    year: 2024,
    title: "IPO",
    content:
      "We successfully went public, opening new avenues for growth and innovation.",
  },
];

export default function page() {
  return (
    <>
      <Hero img="/image/hero.jpeg" />
      <AboutCompany />
      <Team />
      <Awards />
      <Timeline items={timelineItems} />;
    </>
  );
}
