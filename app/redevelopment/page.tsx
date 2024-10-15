import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Redevelop } from "@/components/redevelop";
import { RedevelopmentForm } from "@/components/redevelopment-form";
import { RedevelopmentProcess } from "@/components/redevelopment-process";
import React from "react";

export default function page() {
  return (
    <>
      <Hero img="/image/projects.jpg" />
      <Redevelop />
      <RedevelopmentProcess />
      <RedevelopmentForm />
      <FAQ />
    </>
  );
}
