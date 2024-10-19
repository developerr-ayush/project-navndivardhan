import React from "react";
import Image from "next/image";
import { GSAP } from "./gsap";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";
export const NandiVardhanLifestyle = () => {
  return (
    <SectionWrapper className="px-0 grid lg:grid-cols-12 items-center nandivardhan-lifestyle overflow-hidden  mx-auto">
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
          Upgrading Lifestyle with Nandivardhan
        </Title>
        <p className="mb-4 text-lg">
          Our mission is to redefine living through premium and luxury
          redevelopment projects in Mumbai. With a focus on modern amenities and
          top-notch construction quality, we ensure that you continue to enjoy
          the comfort of your beloved neighbourhood.
          <br />
          <br />
          <b className="text-lg">Our Golden Promise</b>
          <br />
          <ul className="list-disc pl-4">
            <li className="my-4">
              On-Time Delivery: We prioritize timely project completion.
            </li>
            <li className="my-4">
              Quality Assurance: We use only the best materials and practices
            </li>
            <li className="my-4">
              Regulatory Compliance: Our projects adhere to all legal processes,
              ensuring a seamless journey to your new home.
            </li>
          </ul>
        </p>
      </div>
    </SectionWrapper>
  );
};
