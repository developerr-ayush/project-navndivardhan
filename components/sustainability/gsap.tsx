"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { GSAPCONFIG } from "@/util";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const GSAP = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sustainability",
        ...GSAPCONFIG,
      },
    });
    tl.from(".sustainability-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".sustainability-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".sustainability-project", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
    });
  });
  return null;
};
