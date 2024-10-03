"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const GSAP = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);

  // GSAP animation to hide/show the header
  let { contextSafe } = useGSAP();
  const hideHeader = contextSafe(() => {
    gsap.to(".header", { y: "-100%", duration: 0.5 });
  });

  const showHeader = contextSafe(() => {
    gsap.to(".header", { y: "0", duration: 0.5 });
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        hideHeader(); // Hide on scroll down
      } else {
        showHeader(); // Show on scroll up
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);
  return null;
};
