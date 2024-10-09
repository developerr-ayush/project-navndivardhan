import { useGSAP } from "@gsap/react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
export const GSAP = () => {
  useGSAP(() => {
    gsap.from(".title", {
      y: 100,
      opacity: 0,
    });
  });
  return null;
};
