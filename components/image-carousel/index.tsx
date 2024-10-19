"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";

export function ImageCarousel() {
  const images = [
    "/image/carousel-1.png",
    "/image/carousel-1.png",
    "/image/carousel-1.png",
  ];

  return (
    <SectionWrapper className=" mx-auto px-4 py-8 bg-[#eaecec]">
      <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-title text-center">
        Fun at Work
      </Title>
      <p className=" text-[1.4rem] lg:text-[2.6rem] mb-8 project-desc text-center leading-none">
        The selection has just begun!! Are you ready?
      </p>
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-gray-700">
          We believe to create a world that inspires human connections.
          Dedicated to constant learning, we at The Wadhwa Group work as a team
          and hand-pick the finest in the industry, through campus drives. Join
          us in making history alongside the brightest and most curious minds
          from the industry.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, EffectCards]}
        spaceBetween={30}
        slidesPerView={1.5}
        loop
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        className="rounded-lg overflow-hidden swiper-slide-opacity"
        effect={"cards"}
        cardsEffect={{
          perSlideOffset: 200,
          rotate: false,
        }}
        grabCursor={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
}
