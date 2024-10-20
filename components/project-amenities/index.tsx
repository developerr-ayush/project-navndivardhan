import React from "react";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "@/data/atom/title";
import Image from "next/image";

export const ProjectAmenities = () => {
  return (
    <SectionWrapper>
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 media-title">
          Amenities
        </Title>
        <p className="text-[1rem] leading-none font-semibold media-desc">
          Give your family the gift of healthy living with fitness amenities and
          leisure activities. at Fortuna Blue, we have reserved ample of space
          for you to relax and unwind for an enriched way of life
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid gap-20 justify-center grid-cols-2 lg:grid-cols-3">
        <div className="amenities-img max-w-32 mx-auto">
          <Image
            src="/amenities/jogging.png"
            alt="jogging"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div className="amenities-img max-w-32 mx-auto">
          <Image
            src="/amenities/gazebo.png"
            alt="jogging"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div className="amenities-img max-w-32 mx-auto">
          <Image
            src="/amenities/gym.png"
            alt="jogging"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div className="amenities-img max-w-32 mx-auto">
          <Image
            src="/amenities/indoor-games.png"
            alt="jogging"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div className="amenities-img max-w-32 mx-auto">
          <Image
            src="/amenities/meditation.png"
            alt="jogging"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <div className="amenities-img max-w-32 mx-auto">
          <Image
            src="/amenities/reflexology.png"
            alt="jogging"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
