import React from "react";
import arrowRight from "@/public/icon/arrow-right-blue.svg";
import Image from "next/image";
import image from "@/public/image/about.png";
import { GSAP } from "./gsap";
export const About = () => {
  return (
    <div className="grid lg:grid-cols-12 items-center about overflow-hidden">
      <GSAP />
      <div className="lg:col-span-7 p-[3vw] content">
        <h2 className="text-[7vw] lg:text-[3vw] text-[#bb8866]">
          About Nandivardhan Group{" "}
        </h2>
        <p className="mb-4">
          For over 20 years, Nandivardhan Group has been a leader in
          transforming Mumbai’s real estate sector, delivering both premium
          residential and commercial projects across strategic locations. The
          Group&apos;s journey began with a focus on quality construction and
          evolved into becoming a pioneer in redevelopment, offering innovative
          solutions for aging societies. Our legacy is built on trust,
          transparency, and a commitment to elevating urban living experiences.
          <br />
          <br />
          With a portfolio that includes 15 landmark projects, Nandivardhan
          Group stands tall as a symbol of quality, reliability, and visionary
          thinking in the industry. Our work is driven by core values of
          integrity, sustainability, and innovation, which ensure that each
          project not only meets but exceeds client expectations.
        </p>
        <a
          href="/about"
          className="flex  items-center gap-2 text-[#85888a] font-semibold text-[1.2rem]  "
        >
          <Image
            src={arrowRight}
            alt="arrow"
            className="  w-12 h-12 arrow rotate-180"
          />
        </a>
      </div>
      <div className="lg:col-span-5 p-[3vw] image">
        <Image
          src={image}
          alt="logo"
          className="w-full h-full object-cover"
          width={500}
          height={1000}
        />
      </div>
    </div>
  );
};
