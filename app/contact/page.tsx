import React from "react";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";
import { Address } from "@/components/address";

export default function contact() {
  return (
    <div>
      <Hero img="/image/contact.jpeg" />
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-2 mx-auto px-6 py-20">
          <Address />
          <Contact />
        </div>
      </div>
    </div>
  );
}
