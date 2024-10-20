"use client";
import React from "react";
import { GSAP } from "./gsap";
import Image from "next/image";
export const Showcase = () => {
  return (
    <div className="showcase grid-cols-1 grid lg:grid-cols-12 h-[85vh] lg:h-[80vh]">
      <GSAP />
      <div className="lg:col-span-12 row-start-1 col-start-1 -row-end-1 -col-end-1 relative">
        <video
          className="w-full h-[85vh] md:h-[80vh] object-cover"
          autoPlay
          loop
          muted
          src="/video/Luxry-video.mp4"
        ></video>
        <div className="absolute flex flex-col justify-center items-center inset-0 bg-black/50">
          <Image
            className="showcase-logo"
            alt="nandivardhan-logo"
            width={500}
            height={500}
            src="/image/nandivardhan-logo.png"
          />
          <h3 className="text-white text-center text-[1.4rem] md:text-[3rem] max-w-[40rem] tracking-[3.5px] translate-y-24">
            Crafting India&apos;s Finest <br /> Real Estate Experiences
          </h3>
        </div>
      </div>
    </div>
  );
};
