"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { GSAPCONFIG } from "@/util";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const GSAP = () => {
  useGSAP(() => {
    gsap.from(".nandivardhan-lifestyle .content", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: " .nandivardhan-lifestyle .content",
        ...GSAPCONFIG,
      },
    });
    gsap.from(" .nandivardhan-lifestyle  .image", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".nandivardhan-lifestyle .image",
        start: "top 80%",
        end: "+=50",

        toggleActions: "play none reverse reset",
      },
    });
  });
  return null;
};
