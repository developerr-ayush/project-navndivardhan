"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GSAP from "./gsap";
import { Title } from "../title";

export const Awards = () => {
  return (
    <div className="awards">
      <GSAP />
      <div className="text-center max-w-[100ch] mx-auto my-20 px-[4rem]">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] text-center awards-title">
          Awards
        </Title>
        <p className=" mb-4 text-[1.4rem] lg:text-[3.6rem] awards-desc text-center leading-none">
          Recognizing excellence and celebrating journey of achievements.
        </p>
      </div>
      <Swiper
        className="swiper-awards"
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          768: { slidesPerView: 1.75 }, // For phones
          1024: { slidesPerView: 3 }, // For desktops
        }}
      >
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[23vw] md:p-[10vw]">
            <p className="text-center  -mt-[3vw] text-[3vw] md:text-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img
              src="/image/awards.png"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[23vw] md:p-[10vw]">
            <p className="text-center  -mt-[3vw] text-[3vw] md:text-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img
              src="/image/awards.png"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[23vw] md:p-[10vw]">
            <p className="text-center  -mt-[3vw] text-[3vw] md:text-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img
              src="/image/awards.png"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[23vw] md:p-[10vw]">
            <p className="text-center  -mt-[3vw] text-[3vw] md:text-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img
              src="/image/awards.png"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[23vw] md:p-[10vw]">
            <p className="text-center  -mt-[3vw] text-[3vw] md:text-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img
              src="/image/awards.png"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[23vw] md:p-[10vw]">
            <p className="text-center  -mt-[3vw] text-[3vw] md:text-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img
              src="/image/awards.png"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
