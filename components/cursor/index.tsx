"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Cursor = () => {
  const cursorRef = useRef(null);
  const { contextSafe } = useGSAP();
  const moveCursor = contextSafe((e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      x: e.clientX - 10, // Adjusting position to center the cursor
      y: e.clientY - 10,
      duration: 1, // Smooth following effect
      delay: 0.1,
      ease: "power3.out",
    });
  });
  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor fixed w-5 h-5 bg-[#bb8866] rounded-full pointer-events-none z-[200] hidden lg:block"
    ></div>
  );
};
