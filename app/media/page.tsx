import { Hero } from "@/components/hero";
import { MediaPage } from "@/components/media-page";
import React from "react";

export default function page() {
  return (
    <>
      <Hero img="/image/media-banner.jpeg" />
      <MediaPage />
    </>
  );
}
