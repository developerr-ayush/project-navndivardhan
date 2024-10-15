import React from "react";
import arrowRight from "@/public/icon/arrow-right-blue.svg";
import Image from "next/image";
import { GSAP } from "./gsap";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";
export const Redevelop = () => {
  return (
    <SectionWrapper className="grid lg:grid-cols-12 items-center about overflow-hidden  mx-auto">
      <GSAP />
      <div className="lg:col-span-5 p-[3vw] image">
        <Image
          src="/image/construction.jpg"
          alt="logo"
          className="w-full h-full object-cover"
          width={500}
          height={1000}
        />
      </div>
      <div className="lg:col-span-7 p-[3vw] content">
        <Title className="text-[7vw] lg:text-[3vw] text-[#bb8866]">
          Why Choose Redevelopment?
        </Title>
        <p className="mb-4">
          Redevelopment offers numerous benefits, both for residents and the
          community. Here’s why it’s the smarter choice:
          <br />
          <b>Improved Infrastructure:</b> Old and outdated buildings are
          replaced with modern structures, increasing safety and comfort.
          <br />
          <b>Enhanced Lifestyle:</b> New amenities like gyms, parks, and
          co-working spaces improve overall quality of life.
          <br />
          <b>Sustainable Growth:</b> Redevelopment promotes eco-friendly
          practices and helps minimize urban sprawl.
          <br />
          <b>Better Returns on Investment:</b> Property value increases with
          modern upgrades, offering better returns for residents and investors.
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
    </SectionWrapper>
  );
};
