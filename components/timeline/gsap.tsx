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
        trigger: ".timeline",
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none reverse reset",
      },
    });
    tl.from(".timeline-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".timeline-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".timeline-swiper", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
    });
  });
  return null;
};
