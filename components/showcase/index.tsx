import React from "react";
import hero from "@/public/image/hero.png";
import Image from "next/image";
import arrowRight from "@/public/icon/arrow-right-blue.svg";
import pattern from "@/public/image/pattern.png";
import { GSAP } from "./gsap";
export const Showcase = () => {
  return (
    <div className="showcase grid-cols-1 grid lg:grid-cols-12 min-h-screen">
      <GSAP />
      <div className="lg:col-span-5 row-start-1 col-start-1 -row-end-1 -col-end-1">
        <Image
          src={hero}
          alt="logo"
          className="w-full h-full block object-cover"
          width={500}
          height={1000}
        />
      </div>
      <div className="lg:col-span-7 flex justify-center flex-col row-start-1 col-start-1 -row-end-1 -col-end-1 p-[2vw] lg:pl-[8vw] lg:pr-[10vw] relative">
        <h1 className="uppercase text-[10vw] text-white lg:text-black lg:text-[5.1rem] font-secondary leading-none flex justify-start">
          <span className="animate block">T</span>
          <span className="animate block">o</span>
          <span className="animate block">w</span>
          <span className="animate block">a</span>
          <span className="animate block">r</span>
          <span className="animate block">d</span>
          <span className="animate block">s</span>
        </h1>
        <h1 className="uppercase text-[10vw] text-white lg:text-black lg:text-[5.1rem] font-secondary leading-none flex justify-start">
          <span className="animate block"> T</span>
          <span className="animate block"> o</span>
          <span className="animate block"> m</span>
          <span className="animate block"> o</span>
          <span className="animate block"> r</span>
          <span className="animate block"> r</span>
          <span className="animate block"> o</span>
          <span className="animate block"> w</span>
        </h1>
        <p className="text-white lg:text-[#bb8866] text-[1.25rem] mt-2 para">
          From premium residences to commercial hubs, every project is a
          testament to our commitment to quality, innovation, and
          sustainability.{" "}
        </p>
        <a
          href="/contact"
          className="lg:absolute lg:right-16 lg:top-1/2 lg:-translate-y-1/2 w-20 h-20 arrow"
        >
          <Image
            src={arrowRight}
            alt="arrow"
            className="filter brightness-0 invert lg:filter-none w-20 h-20 mt-10 rotate-180"
          />
        </a>
        <Image
          src={pattern}
          alt="pattern"
          className="absolute inset-0 object-cover h-full -z-[1]"
        />
      </div>
    </div>
  );
};
