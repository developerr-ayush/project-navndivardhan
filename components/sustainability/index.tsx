import Image from "next/image";
import React from "react";
import { GSAP } from "./gsap";
export const Sustainability = () => {
  return (
    <div className=" p-[3vw]  max-w-[70rem] mx-auto sustainability">
      <GSAP />
      <div className="head lg:text-center mb-8 lg:mb-16 sustainability-title">
        <h2 className="text-[2rem] lg:text-[3.125rem] text-[#bb8866]">
          Sustainability
        </h2>
        <p className="sustainability-desc">
          At Nandivardhan Group, sustainability is not just a buzzword – it’s a
          core principle that guides every decision we make. Our projects are
          designed with long-term environmental impacts in mind, focusing on
          energy efficiency, water conservation, and green building standards.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="sustainability-project">
          <Image
            src="/image/green-certificate.png"
            alt="green certificate"
            width={1080}
            height={1920}
          />
          <h3 className="mt-4 text-[#bb8866] uppercase text-[1.8rem] font-primary font-semibold lg:mt-8">
            Green certificate
          </h3>
          <p>
            {" "}
            Every project complies with green building norms and receives
            certifications that reflect our dedication to creating eco-friendly
            spaces.
          </p>
        </div>
        <div className="sustainability-project">
          <Image
            src="/image/case-study.png"
            alt="green certificate"
            width={1080}
            height={1920}
          />
          <h3 className="mt-4 text-[#bb8866] uppercase text-[1.8rem] font-primary font-semibold lg:mt-8">
            Green certificate
          </h3>
          <p>
            {" "}
            Every project complies with green building norms and receives
            certifications that reflect our dedication to creating eco-friendly
            spaces.
          </p>
        </div>
      </div>
    </div>
  );
};
