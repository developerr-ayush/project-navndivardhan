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
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".image", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
  });
  return null;
};
