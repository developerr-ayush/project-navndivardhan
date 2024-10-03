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
        trigger: ".news",
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none reverse reset",
      },
    });
    tl.from(".news-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".news-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".news-item", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
    });
  });
  return null;
};
