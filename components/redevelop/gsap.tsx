"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { GSAPCONFIG } from "@/util";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export const GSAP = () => {
  useGSAP(() => {
    gsap.from(".about .content", {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: " .about .content",
        ...GSAPCONFIG,

      },
    });
    gsap.from(" .about  .image", {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about .image",
        start: "top 80%",
        end:"+=50",

        toggleActions: "play none reverse reset",
      },
    });
  });
  return null;
};
