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
        trigger: ".project-page",
        ...GSAPCONFIG,
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
