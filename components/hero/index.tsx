"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export const Hero = () => {
  return (
    <div className="h-screen">
      <Swiper modules={[Navigation]} navigation slidesPerView={1}>
        <SwiperSlide>
          <img
            src="/image/hero.jpeg"
            alt="hero"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/hero.jpeg"
            alt="hero"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/hero.jpeg"
            alt="hero"
            className="w-full h-screen object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
