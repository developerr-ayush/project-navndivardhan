"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { GSAP } from "./gsap";
import { Title } from "../title";

const timelineData = [
  {
    year: 2017,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
  {
    year: 2018,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
  {
    year: 2019,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
  {
    year: 2020,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
  {
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
  {
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
  {
    year: 2023,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
  {
    year: 2024,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur est eveniet dolorum quidem voluptatibus incidunt alias nam vitae illum, ex, beatae esse reiciendis repellendus itaque culpa minus maiores natus quae?",
  },
];

export default function Timeline() {
  return (
    <div className=" py-[3vw]  mt-[3rem] flex flex-col justify-center timeline">
      <GSAP />

      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 timeline-title">
          Timeline
        </Title>
        <p className="text-[1.8rem] leading-none font-semibold timeline-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
          perspiciatis?
        </p>
      </div>
      <Swiper
        className="mt-10 w-full timeline-swiper px-[4rem] timeline-swiper"
        slidesPerView={1}
        centeredSlides={true}
        modules={[Navigation]}
        autoplay
        // navigation
        breakpoints={{
          640: { slidesPerView: 2 }, // For phones
          1024: { slidesPerView: 3 }, // For desktops
        }}
      >
        {timelineData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center  gap-7">
              <h3 className="text-2xl md:text-[2.8rem]  px-6 text-[#bb8866]">
                {data.year}
              </h3>
              <div className="w-full flex items-center">
                <hr className="h-0.5 w-full bg-black" />
                <div className="rounded-full w-5 h-5 bg-[#bb8866] shrink-0"></div>
                <hr className="h-0.5 w-full bg-black" />
              </div>
              <p className="text-lg text-center px-6">{data.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
