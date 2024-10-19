import React from "react";
import Image from "next/image";
import { GSAP } from "./gsap";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";
export const NandivardhanExpert = () => {
  return (
    <SectionWrapper className="px-0 grid lg:grid-cols-12 items-center nandivardhan-expert overflow-hidden  mx-auto">
      <GSAP />
      <div className="lg:col-span-6 p-[3vw] pl-0 image">
        <Image
          src="/image/construction.jpg"
          alt="logo"
          className="w-full h-full object-cover"
          width={500}
          height={1000}
        />
      </div>
      <div className="lg:col-span-6 p-[3vw] content">
        <Title className="text-[7vw] mb-4 lg:text-[3vw] text-[#bb8866]">
          Nandivardhan’s Expertise
        </Title>
        <p className="mb-4 text-lg">
          At Nandivardhan, we specialize in transforming not just spaces, but
          lives. Our reputation as top redevelopment builders in Mumbai is built
          on our commitment to quality and detail. Our process is designed to
          ensure that every homeowner&apos;s needs are met, from initial
          planning to project completion.
          <br />
          <br />
          <b className="text-lg">Key Strengths</b>
          <br />
          <ul className="list-disc pl-4">
            <li className="my-4">
              Modern Amenities: Renovating properties provides access to modern
              features and comforts.
            </li>
            <li className="my-4">
              Increased Property Value: Redevelopment boosts both land and
              property value, making it an attractive investment.
            </li>
            <li className="my-4">
              Compliance with Regulations: Updating properties to meet new
              zoning regulations and building codes is essential.
            </li>
            <li className="my-4">
              Profit Potential: Redevelopment can serve as a profitable
              investment opportunity.
            </li>
          </ul>
        </p>
      </div>
    </SectionWrapper>
  );
};
