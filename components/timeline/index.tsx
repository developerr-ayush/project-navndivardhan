"use client";

import { Swiper, SwiperSlide } from "swiper/react";

const timelineData = [
  {
    year: 2024,
    description:
      "Expanding beyond their stronghold in Thane, Raymond Realty has made an exciting move with the launch of 'The Address by GS' - Bandra. This venture marks their entry into a new territory, promising innovation and quality synonymous with the Raymond brand. Launched its first High Street Retail project - Park Avenue in Thane.",
  },
  {
    year: 2017,
    description:
      "Understanding the strength of its brand equity, Raymond entered the real estate sector through 'Raymond Realty' to offer affordable housing solutions. The team started with as few as 20 employees. The focus was to go beyond real estate conventions and introduce a new standard of living that pushes the envelope on every aspect of construction quality, design aesthetic, and comfort feasibility.",
  },
  {
    year: 2019,
    description:
      "Launched its first project, TEN X Habitat in Thane, which is a thriving gated community designed to elevate the benchmark of living standards.",
  },
];

export default function Timeline() {
  return (
    <div className=" p-8  flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-center mb-12">Timeline</h2>
      <hr />
      <Swiper slidesPerView={3}>
        {timelineData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center  gap-7">
              <h3 className="text-2xl font-bold ps-[4vw]">{data.year}</h3>
              <hr className="h-0.5 w-full bg-black" />
              <p className="text-lg text-center ps-[4vw]">{data.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
