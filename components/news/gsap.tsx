"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const GSAP = () => {
  useGSAP(() => {
    gsap.from(".news-title", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".news",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".news-desc", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".news",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".news-item", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".news",
        start: "top 50%",
        end: "top 40%",
        scrub: 1,
      },
    });
  });
  return null;
};
