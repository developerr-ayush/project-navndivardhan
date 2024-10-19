import React from "react";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";
import Image from "next/image";
export const RedevelopmentProcess = () => {
  return (
    <SectionWrapper className="bg-[#e8e7e7] ">
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-3">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-title text-center">
          Our Process
        </Title>
        <p className=" text-[1.4rem] lg:text-[2.6rem] mb-8 project-desc text-center leading-none">
          How We Approach Redevelopment
        </p>
      </div>
      <div className="grid grid-cols-2 gcontainer  flex-wrap mx-auto px-8 lg:flex gap-4 mb-10">
        <div className="item grid text-center place-content-center  p-4 border border-solid  my-4">
          <Image
            src="/icon/feasibility.png"
            alt="image"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Title className="mx-auto text-[2rem]  text-[#bb8866] project-title text-center">
            Society Evaluation
          </Title>

          <p>Evaluating the potential and equirements of the property.</p>
        </div>
        <div className="item grid text-center place-content-center  p-4 border border-solid  my-4">
          <Image
            src="/icon/feasibility.png"
            alt="image"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Title className="mx-auto text-[2rem]  text-[#bb8866] project-title text-center">
            Redevelopment Feasibility Report
          </Title>

          <p>Evaluating the potential and equirements of the property.</p>
        </div>

        <div className="item grid text-center place-content-center  p-4 border border-solid  my-4">
          <Image
            src="/icon/resident.png"
            alt="image"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Title className="mx-auto text-[2rem]  text-[#bb8866] project-title text-center">
            Terms & Conditions Review
          </Title>

          <p>
            Engaging with property owners and tenants for a smooth and inclusive
            transition.
          </p>
        </div>

        <div className="item grid text-center place-content-center  p-4 border border-solid  my-4">
          <Image
            src="/icon/design.png"
            alt="image"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Title className="mx-auto text-[2rem]  text-[#bb8866] project-title text-center">
            Project Plan & Design Development
          </Title>

          <p>
            Creating sustainable, modern designs that prioritize comfort and
            efficiency.
          </p>
        </div>

        <div className="item grid  text-center place-content-center  p-4 border border-solid  my-4">
          <Image
            src="/icon/execution.png"
            alt="image"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Title className="mx-auto text-[2rem]  text-[#bb8866] project-title text-center">
            Presentation & Selection
          </Title>

          <p>
            Ensuring timely and quality construction using the best materials
            and techniques.
          </p>
        </div>

        <div className="item grid  text-center place-content-center  p-4 border border-solid  my-4">
          <Image
            src="/icon/handover.png"
            alt="image"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Title className="mx-auto text-[2rem]  text-[#bb8866] project-title text-center">
            Agreement and Approval of Sanctions
          </Title>

          <p>A seamless transition to the new and improved property.</p>
        </div>
        <div className="item grid  text-center place-content-center  p-4 border border-solid  my-4">
          <Image
            src="/icon/handover.png"
            alt="image"
            width={100}
            height={100}
            className="mx-auto mb-4"
          />
          <Title className="mx-auto text-[2rem]  text-[#bb8866] project-title text-center">
            **Physical Possession of the Property
          </Title>

          <p>A seamless transition to the new and improved property.</p>
        </div>
      </div>
    </SectionWrapper>
  );
};
