import { Hero } from "@/components/hero";
import { RedevelopFAQ } from "@/components/redevelop-faq";
import React from "react";

export default function page() {
  return (
    <>
      <Hero img="/image/FAQ.jpeg" />
      <RedevelopFAQ />
    </>
  );
}
