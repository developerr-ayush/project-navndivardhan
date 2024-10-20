"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import logo from "@/public/image/loader.gif";
import Image from "next/image";
import { DELAY } from "@/util";
export const Loader = () => {
  const loader = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(loader, {
      opacity: 0,
      duration: DELAY,
      onComplete: () => {
        if (loader?.current?.style) {
          loader.current.style.display = "none";
        }
      },
    });
  }, []);
  return (
    <div
      ref={loader}
      className="loader fixed inset-0 bg-white z-[21] flex items-center justify-center"
    >
      <Image src={logo} alt="logo" className="w-full lg:w-[10rem] " />
    </div>
  );
};
