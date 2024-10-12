import React from "react";
import { SectionWrapper } from "../section-wrapper";
import Image from "next/image";

export const ProjectOverview = () => {
  return (
    <SectionWrapper className="container mx-auto ">
      <p className="title  text-[2rem] lg:text-[4rem] text-[#bb8866] opacity-20 lg:text-right lg:-mb-16">
        <b className="font-extrabold">Overview</b> of Projects
      </p>
      <div className="grid md:grid-cols-2 items-center ">
        <div className="img-wrap xl:pr-[7rem]">
          <Image
            src="/image/project-detail-demo.png"
            alt="project detail"
            width={1080}
            height="720"
            className="object-cover"
          />
        </div>
        <div className="content-wrap py-6 lg:px-[3rem] xl:pl-[7rem]">
          <h3 className="text-[#bb8866] text-[2rem] lg:text-[3rem] ">
            Fortuna Blue
          </h3>
          <p>
            It is indeed a rare privilege to step into a world where every
            welcome is crowned. At FortuneBlue, the Entrance Lobby will greet
            you with finesse and exclusivity to give you a feeling of pride.
            Strategically-located at Lower Parel’s finest address, presenting to
            you a tastefully-crafted lifestyle that will elevate your standards
            of living. An exclusive world where life is measured beyond square
            feets and area ratios, and where joyful excperiences with your loved
            ones, will come alive each day.Fortuna Blue brings you a host of
            active and healthy amenities that cater to your every mood. Be it
            lounging in the open spaces, working out at the gym, beginning your
            morning with a quick jog or re-connecting with your spiritual being;
            Out here, your fitness and wellness will always be taken care of.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
