"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";

export const BlogThumbnail = ({ img }: { img: string }) => {
  return (
    <div className="h-[100vh]">
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src={img}
            alt="hero"
            className="w-full h-[100vh] object-cover"
          />
          <div className="overlay absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
