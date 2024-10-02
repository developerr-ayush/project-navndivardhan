"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const GSAP = () => {
  useGSAP(() => {
    gsap.from(".sustainability-title", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sustainability",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".sustainability-desc", {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".sustainability",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    gsap.from(".sustainability-project", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".sustainability",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
  });
  return null;
};
