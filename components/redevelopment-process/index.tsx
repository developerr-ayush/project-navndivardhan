"use client";
import React from "react";
import { Title } from "@/data/atom/title";
import { SectionWrapper } from "../section-wrapper";
import Image from "next/image";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Subtitle } from "@/data/atom/subtitle";

// Define an array of process steps for reusability and maintainability
const processSteps = [
  {
    imgSrc: "/icon/society-eval.png",
    title: "Society Evaluation",
    description: "Evaluating the potential and requirements of the property.",
  },
  {
    imgSrc: "/icon/redevelopment-feasibility.png",
    title: "Redevelopment Feasibility Report",
    description: "Evaluating the potential and requirements of the property.",
  },
  {
    imgSrc: "/icon/terms-condition.png",
    title: "Terms & Conditions Review",
    description:
      "Engaging with property owners and tenants for a smooth and inclusive transition.",
  },
  {
    imgSrc: "/icon/project-plan.png",
    title: "Project Plan & Design Development",
    description:
      "Creating sustainable, modern designs that prioritize comfort and efficiency.",
  },
  {
    imgSrc: "/icon/presentation.png",
    title: "Presentation & Selection",
    description:
      "Ensuring timely and quality construction using the best materials and techniques.",
  },
  {
    imgSrc: "/icon/feasibility.png",
    title: "Agreement and Approval of Sanctions",
    description: "A seamless transition to the new and improved property.",
  },
  {
    imgSrc: "/icon/physical.png",
    title: "Physical Possession of the Property",
    description: "A seamless transition to the new and improved property.",
  },
];

export const RedevelopmentProcess: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#000] px-0">
      <div className="head max-w-[70rem] mx-auto lg:text-center ">
        <Title className="mx-auto project-title">Our Process</Title>
        <Subtitle className=" mb-8 project-desc text-center leading-none">
          How We Approach Redevelopment
        </Subtitle>
      </div>

      {/* Swiper Wrapper */}
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={20}
        autoplay
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.4,
          },
          1024: {
            slidesPerView: 3.4,
          },
          1200: {
            slidesPerView: 4.2,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
      >
        {processSteps.map((step, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="item grid text-center place-content-center p-7 border border-solid my-4">
              <Image
                src={step.imgSrc}
                alt={step.title}
                width={100}
                height={100}
                className="mx-auto mb-4 invert"
              />
              <h3 className="mx-auto text-[1.8rem] text-[#bb8866] project-title text-center line-clamp-2">
                {step.title}
              </h3>
              <p className="text-white tracking-wider line-clamp-2">
                {step.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};
