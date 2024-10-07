"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export const Hero = ({ img }: { img: string }) => {
  return (
    <div className="h-[100vh]">
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <img
            src={img}
            alt="hero"
            className="w-full h-[85vh] md:h-[80vh] object-cover"
          />
          <div className="overlay absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </SwiperSlide>
      </Swiper>
      <h2 className="text-[4.5vw] text-center py-10 bg-black text-[#bb8866] h-[15vh] md:h-[20vh] content-center">
        Transforming Spaces, Elevating Lives
      </h2>
    </div>
  );
};
