import React from "react";
import Image from "next/image";
import arrowRight from "@/public/icon/arrow-right-blue.svg";
import { GSAP } from "./gsap";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "@/data/atom/title";
import { Subtitle } from "@/data/atom/subtitle";

// LeaderCard Component for reusability
const LeaderCard = ({
  imageSrc,
  name,
  title,
}: {
  imageSrc: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="flex item flex-col gap-4 items-center px-4 py-8 my-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative shrink-0 aspect-square w-full mb-4 rounded-sm overflow-hidden">
        <Image
          width={500}
          height={500}
          src={imageSrc}
          alt={`Portrait of ${name}`}
          className="rounded-sm w-full grayscale hover:grayscale-0 duration-500 transition-all"
        />
      </div>
      <div className="content text-center">
        <h3 className="text-[7vw] md:text-[2rem]  text-[#bb8866] md:text-3xl mb-2">
          {name}
        </h3>
        <p className="text-[4vw] md:text-[1rem] text-gray-600 mt-6 tracking-wider">
          {title}
        </p>
      </div>
    </div>
  );
};

export const OurLeader = () => {
  return (
    <SectionWrapper className="gap-8 container mx-auto lg:flex lg:items-center lg:justify-center leader">
      <GSAP />
      <div className="head max-w-[70rem] mx-auto lg:mx-0 lg:text-left lg:max-w-[30%] mb-8 lg:mb-16">
        <Title className="mx-auto mb-2 leader-title">Our Leaders</Title>
        <Subtitle className="pl-0 leader-desc">
          Lorem ipsum dolor sit amet, perspiciatis?
        </Subtitle>
        <a href="/leadership" className="transition-colors duration-300">
          <Image
            src={arrowRight}
            alt="arrow"
            className="w-12 h-12 arrow rotate-180"
          />
        </a>
      </div>

      <div className="body flex-1 lg:mx-0 grid md:grid-cols-2 gap-8 max-w-[50rem] mx-auto">
        <LeaderCard
          imageSrc="/image/anil-mutha.png"
          name="Mr. Anil Nagraj Mutha"
          title="Chief Visionary and Co-Founder"
        />
        <LeaderCard
          imageSrc="/image/yash-mutha.png"
          name="Mr. Yash Nagraj Mutha"
          title="Chief Visionary and Co-Founder"
        />
      </div>
    </SectionWrapper>
  );
};
