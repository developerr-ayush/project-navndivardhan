"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const GSAP = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".leadership",
        start: "top 80%",
        end: "+=50",

        toggleActions: "play none reverse reset",
      },
    });
    tl.from(".leadership-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".leadership-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".team-item", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
    });
  });
  return null;
};
