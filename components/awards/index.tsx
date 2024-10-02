"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const Awards = () => {
  return (
    <div className="awards">
      <div className="text-center max-w-[100ch] mx-auto my-20 px-[4rem]">
        <h2 className="text-[20px] lg:text-[50px] text-[#bb8866] text-center">
          Awards
        </h2>
        <p className=" text-center text-[30px] lg:text-[44px] leading-none font-semibold">
          Recognizing excellence and celebrating journey of achievements.
        </p>
      </div>
      <Swiper
        className="swiper-awards"
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: { slidesPerView: 1 }, // For phones
          1024: { slidesPerView: 3 }, // For desktops
        }}
      >
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[20vw] md:p-[7vw]">
            <p className="-mt-[3vw]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img src="/image/awards.png" alt="" className="absolute inset-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[20vw] md:p-[7vw]">
            <p className="-mt-[3vw]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img src="/image/awards.png" alt="" className="absolute inset-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[20vw] md:p-[7vw]">
            <p className="-mt-[3vw]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img src="/image/awards.png" alt="" className="absolute inset-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[20vw] md:p-[7vw]">
            <p className="-mt-[3vw]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img src="/image/awards.png" alt="" className="absolute inset-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[20vw] md:p-[7vw]">
            <p className="-mt-[3vw]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img src="/image/awards.png" alt="" className="absolute inset-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[20vw] md:p-[7vw]">
            <p className="-mt-[3vw]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <img src="/image/awards.png" alt="" className="absolute inset-0" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
