import Image from "next/image";
import React from "react";
import { Title } from "@/data/atom/title";

export const ProjectInfo = () => {
  return (
    <div>
      <div className="container mx-auto  p-[3vw]">
        <div className="flex justify-center py-8">
          <Image
            src="/image/fortuna-logo.png"
            alt="fortuna blue"
            className="w-full max-w-2xl"
            width={700}
            height={300}
          />
        </div>
        <div className="grid lg:grid-cols-3 uppercase">
          <div className="py-6">
            <Title className="text-[#bb8866] text-[1.5rem] lg:text-[2rem]">
              Typology
            </Title>
            <p className="text-[1.2rem] md:text-[1.6rem] ">
              <span className="block"> 1 BHK, 1.5 BHK, 2 BHK, 2.5 BHK</span>
              <b className="block">Residences at LowerParel</b>
            </p>
          </div>
          <div className="py-6">
            <Title className="text-[#bb8866] text-[1.5rem] lg:text-[2rem]">
              Location
            </Title>
            <p className="text-[1.2rem] md:text-[1.6rem] ">
              <b className="block">lower Parel</b>
              <span className="block">Heart of mumbai</span>
            </p>
          </div>
          <div className="py-6">
            <Title className="text-[#bb8866] text-[1.5rem] lg:text-[2rem]">
              benefits
            </Title>
            <p className="text-[1.2rem] md:text-[1.6rem] ">
              <b className="block">Excellentconnectivity</b>
              <span className="block">and lifestyle</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
