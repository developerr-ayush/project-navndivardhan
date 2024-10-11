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
        trigger: ".project-page",
        start: "top 80%",
        end: "+=50",

        toggleActions: "play none reverse reset",
      },
    });

    tl.from(".project-page-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".project-page-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".project-page-tabs", {
      y: -100,
      opacity: 0,
    });
    tl.from(".project-page .project-group .title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".project-page .swiper", {
      stagger: 0.2,
      y: 100,
      opacity: 0,
    });
  });
  return null;
};
