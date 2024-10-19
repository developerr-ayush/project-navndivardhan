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
        trigger: ".leader",
        ...GSAPCONFIG,
      },
    });

    tl.from(".leader-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".leader-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".leader .item", {
      stagger: 0.2,
      y: 100,
      opacity: 0,
    });
  });
  return null;
};
