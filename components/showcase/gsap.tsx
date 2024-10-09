"use client";
import { DELAY } from "@/util";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const GSAP = () => {
  useGSAP(() => {
    gsap.from(".animate", {
      delay: DELAY,
      x: 100,
      stagger: 0.1,
      opacity: 0,
      duration: 0.1,
    });
    gsap.from(".para", {
      delay: DELAY + 0.8,
      y: 100,
      opacity: 0,
      duration: 0.4,
    });
    gsap.from(".arrow", {
      x: -10,
      repeat: -1,
      duration: 0.4,
      yoyo: true,
    });
  });
  return null;
};
