"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GSAP from "./gsap";
import Image from "next/image";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "@/data/atom/title";
import { Subtitle } from "@/data/atom/subtitle";
import { Para } from "@/data/atom/para";

export const Awards = () => {
  return (
    <SectionWrapper className="awards">
      <GSAP />
      <div className="text-center max-w-[100ch] mx-auto mb-10  px-[4rem]">
        <Title className="mx-auto  text-center awards-title">Awards</Title>
        <Subtitle className="    awards-desc">
          Recognizing excellence and celebrating journey of achievements.
        </Subtitle>
      </div>
      <Swiper
        className="swiper-awards"
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          768: { slidesPerView: 1.75 }, // For phones
          1200: { slidesPerView: 2.5 }, // For desktops
        }}
      >
        <SwiperSlide>
          <div className="aspect-square flex items-center justify-center p-[23vw] md:p-[10vw]">
            <p className="text-center  -mt-[3vw] text-[1rem] md:text-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam impedit optio atque asperiores ut omnis nobis eligendi,
              minima alias similique at error ab mollitia dignissimos eos
              inventore, quis ex magni.
            </p>
            <Image
              width={500}
              height={500}
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
            <Image
              width={500}
              height={500}
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
            <Image
              width={500}
              height={500}
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
            <Image
              width={500}
              height={500}
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
            <Image
              width={500}
              height={500}
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
            <Image
              width={500}
              height={500}
              src="/image/awards.png"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </SectionWrapper>
  );
};
