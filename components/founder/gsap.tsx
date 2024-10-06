"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin([ScrollTrigger]);
const GSAP = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Founder",
        start: "top 80%",
        end: "+=50",
        toggleActions: "play none reverse reset",
      },
    });
    tl.from(".founder-title", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.inOut",
    });
    tl.from(".founder-img", {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.4,
      ease: "power2.inOut",
    });
    tl.from(".founder-desc", {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.4,
      ease: "power2.inOut",
    });
  });
  return null;
};

export default GSAP;
