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
        trigger: ".media",
        start: "top 80%",
        end: "+=50",

        toggleActions: "play none reverse reset",
      },
    });
    tl.from(".media-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".media-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".media-swiper", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
    });
  });
  return null;
};
