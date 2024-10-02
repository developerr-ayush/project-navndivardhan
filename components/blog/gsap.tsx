"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function GSAP() {
  // useGSAP(() => {
  //   gsap.from(".blog-card", {
  //     y: 100,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       trigger: ".blog",
  //       start: "top 80%",
  //       end: "+=100",
  //       markers: true,
  //     },
  //   });
  // });
  return null;
}
