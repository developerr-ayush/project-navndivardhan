"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Image from "next/image";
import { SplitText } from "@/data/atom/SplitText";
import { DELAY } from "@/util";

export const Hero = ({ img }: { img: string }) => {
  return (
    <div>
      <Swiper slidesPerView={1}>
        <SwiperSlide>
          <Image
            width={1920}
            height={1080}
            src={img}
            alt="hero"
            className="w-full h-screen object-cover"
          />
          <div className="overlay absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </SwiperSlide>
      </Swiper>
      <SplitText
        text="Transforming Spaces, Elevating Lives"
        delay={DELAY}
        className="text-[5vw] md:text-[3vw] main-text text-center  bg-black text-[#bb8866] h-[15vh] md:h-[20vh] content-center"
      ></SplitText>
    </div>
  );
};
