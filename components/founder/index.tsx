import React from "react";
import GSAP from "./gsap";
import arrowRight from "@/public/icon/arrow-right-blue.svg";
import Image from "next/image";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "@/data/atom/title";
import { Subtitle } from "@/data/atom/subtitle";

export const Founder = () => {
  return (
    <SectionWrapper className="container   mx-auto Founder">
      <GSAP />
      <Title className="mx-auto     text-center founder-title">
        Leadership
      </Title>
      <div className="founder-item my-8  mx-auto max-w-[60rem]">
        <div className="info md:flex items-center gap-4 lg:gap-[4rem] founder-img">
          <Image
            width={500}
            height={800}
            className="w-[20rem] lg:w-[25rem] shrink-0 max-w-full mb-4 grayscale hover:grayscale-0 transition-all duration-500 "
            src="/image/anil-mutha.png"
            alt=""
          />
          <div className="text">
            <Title className=" text-[#bb8866] lg:text-[38px]  ">
              Mr. Anil Nagraj Mutha
            </Title>
            <p className="text-[20px] mt-6 md:text-[25px] leading-none font-semibold tracking-widest">
              Chief Visionary and Co-Founder
            </p>
            <p className="mt-8 founder-desc">
              Anil Nagraj Mutha, with his remarkable foresight and
              entrepreneurial spirit, has been instrumental in the rise of
              Nandivardhan Group. His visionary approach focuses on creating
              extraordinary living spaces that push the boundaries of design and
              functionality. He oversees every aspect of the company&apos;s
              operations, ensuring that innovation remains at the core of every
              project. His leadership has not only led to numerous successful
              developments but also solidified Nandivardhan&apos;s reputation as
              a trusted and respected name in real estate.
            </p>
            <a
              href="/about"
              className="flex mt-8 items-center gap-2 text-[#85888a] font-semibold text-[1.2rem]  "
            >
              <Image
                src={arrowRight}
                alt="arrow"
                className="  w-12 h-12 arrow rotate-180"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
