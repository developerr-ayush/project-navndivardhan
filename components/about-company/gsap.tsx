"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const GSAP = () => {
  useGSAP(() => {
    gsap.from(".content", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none reverse reset",
      },
    });
    gsap.from(".image", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none reverse reset",
      },
    });
  });
  return null;
};
