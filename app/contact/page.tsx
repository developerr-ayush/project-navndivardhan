import React from "react";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";

export default function contact() {
  return (
    <div>
      <Hero img="/image/contact.jpeg" />
      <div className="max-w-[60rem] mx-auto px-6 py-20">
        <Contact />
      </div>
    </div>
  );
}
