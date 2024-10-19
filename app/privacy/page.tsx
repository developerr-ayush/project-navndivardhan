import { Hero } from "@/components/hero";
import PrivacyPolicy from "@/components/privacy";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero img="/image/media-banner.jpeg" />
      <PrivacyPolicy />
    </div>
  );
}
