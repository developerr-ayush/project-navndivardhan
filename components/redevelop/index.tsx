import React from "react";
import arrowRight from "@/public/icon/arrow-right-blue.svg";
import Image from "next/image";
import { GSAP } from "./gsap";
import { Title } from "../title";
export const Redevelop = () => {
  return (
    <div className="grid lg:grid-cols-12 items-center about overflow-hidden container mx-auto">
      <GSAP />
      <div className="lg:col-span-7 p-[3vw] content">
        <Title className="text-[7vw] lg:text-[3vw] text-[#bb8866]">
          Lorem ipsum dolor sit
        </Title>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
          cupiditate libero voluptatum asperiores totam non sint suscipit, fugit
          id rem aperiam rerum. Officiis iste esse ducimus eligendi debitis, id
          repellat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          quidem illum minus officiis. Distinctio iste nostrum minima totam
          inventore ea illum, blanditiis praesentium itaque cupiditate aperiam?
          Pariatur eum quos quo nemo amet, beatae eaque commodi?
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
          src="/image/construction.jpg"
          alt="logo"
          className="w-full h-full object-cover"
          width={500}
          height={1000}
        />
      </div>
    </div>
  );
};
