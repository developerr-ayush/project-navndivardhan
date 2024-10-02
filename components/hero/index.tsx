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
          <div className="overlay absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/hero.jpeg"
            alt="hero"
            className="w-full h-screen object-cover"
          />
          <div className="overlay absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/hero.jpeg"
            alt="hero"
            className="w-full h-screen object-cover"
          />
          <div className="overlay absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
