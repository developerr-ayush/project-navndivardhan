import React from "react";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "@/data/atom/title";
export const Sustainability = () => {
  return (
    <SectionWrapper className=" px-0 bg-black ">
      <div className="  ">
        {/* <GSAP /> */}
        <div className="head lg:text-center mb-8 lg:mb-16 sustainability-title">
          <Title className="mx-auto ">Sustainability</Title>
          <p className="sustainability-desc text-white">
            At Nandivardhan Group, sustainability is a core principle that
            guides every decision we make. Our projects prioritize long-term
            environmental impacts, focusing on energy efficiency, water
            conservation, and green building standards. Every project complies
            with green building norms and earns certifications that reflect our
            dedication to creating eco-friendly spaces.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full isolate">
          <div
            className="sustainability-project w-full group grid items-end isolate relative"
            style={{
              background: "url('/image/green.jpg') no-repeat center/cover ",
              backgroundAttachment: "fixed",
              height: "80vh",
            }}
          >
            <div className="absolute bg-black/30 inset-0 -z-[1]"></div>
            <div className="wrapper col-start-1 row-start-1 p-8">
              <h3 className="mt-4 text-[#bb8866] uppercase text-[1.8rem]  font-semibold lg:mt-8">
                Green certificate
              </h3>
              <p className="text-white">
                At Nandivardhan Group, sustainability is a core principle that
                guides every decision we make. Our projects prioritize long-term
                environmental impacts, focusing on energy efficiency, water
                conservation, and green building standards, with every project
                complying with green building norms and earning certifications
                that reflect our dedication to creating eco-friendly spaces. Our
                commitment to sustainable urban living is exemplified through
                the integration of solar energy systems and rainwater harvesting
                in our developments.
              </p>
            </div>
          </div>
          {/* <div className="sustainability-project">
            <div className="overflow-hidden group">
              <Image
                src="/image/case-study.png"
                className="group-hover:scale-105 transition-all duration-300"
                alt="green certificate"
                width={1080}
                height={1920}
              />
            </div>
            <h3 className="mt-4 text-[#bb8866] uppercase text-[1.8rem]  font-semibold lg:mt-8">
              Case Study – Fortuna Blue:
            </h3>
            <p className="text-white">
              This project integrates solar energy systems and rainwater
              harvesting, showcasing Nandivardhan’s commitment to sustainability
              in urban living.
            </p>
          </div> */}
        </div>
      </div>
    </SectionWrapper>
  );
};
