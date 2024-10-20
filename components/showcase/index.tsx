"use client";
import React, { useEffect, useState } from "react";
import { GSAP } from "./gsap";
import Image from "next/image";
import { SplitText } from "@/data/atom/SplitText";
import { DELAY } from "@/util";
export const Showcase = () => {
  const [showTitle, setshowTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshowTitle(true);
    }, DELAY * 1000 + 200);
  }, []);
  return (
    <div className="showcase grid-cols-1 grid lg:grid-cols-12 h-screen">
      <GSAP />
      <div className="lg:col-span-12 row-start-1 col-start-1 -row-end-1 -col-end-1 relative">
        <video
          className="w-full h-screen object-cover"
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
          {showTitle && (
            <SplitText
              text="Crafting India's Finest"
              className="text-white text-center text-[1.2rem] md:text-[3rem] max-w-[40rem] tracking-[3.5px] translate-y-24"
            ></SplitText>
          )}
          {showTitle && (
            <SplitText
              text="Real Estate Experiences"
              className="text-white text-center text-[1.2rem] md:text-[3rem] max-w-[40rem] tracking-[3.5px] translate-y-24"
            ></SplitText>
          )}
        </div>
      </div>
    </div>
  );
};
