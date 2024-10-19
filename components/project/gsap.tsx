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
        trigger: ".project",
        ...GSAPCONFIG,
      },
    });

    tl.from(".project-title", {
      y: -100,
      opacity: 0,
    });
    tl.from(".project-desc", {
      y: -100,
      opacity: 0,
    });
    tl.from(".project .swiper", {
      stagger: 0.2,
      y: 100,
      opacity: 0,
    });
  });
  return null;
};
