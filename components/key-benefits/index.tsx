"use client";
import Image from "next/image";

import React from "react";
import { GSAP } from "./gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";

const keyBenefit = [
  {
    img: "/image/keyfeature-1.png",
    title: "22 Storeyed Residential Icon",
  },
  {
    img: "/image/keyfeature-2.png",
    title: "Excellent Connectivity",
  },
  {
    img: "/image/keyfeature-3.png",
    title: "Advanced Security",
  },
];
export const KeyBenefits = () => {
  return (
    <SectionWrapper className=" key-benefits overflow-hidden">
      <GSAP />
      <div className="head  container mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[4rem] lg:text-right text-[#bb8866] mb-2 key-benefits-title">
          <b>Key</b> Benefits
        </Title>
        {/* <p className="text-[1.8rem] leading-none font-semibold key-benefits-desc">
          Explore our insightful and crafted contect with expertise and fresh
          perspectives
        </p> */}
      </div>
      <div className=" container mx-auto ">
        <Swiper
          slidesPerGroup={1}
          spaceBetween={20}
          className="key-benefits-swiper"
          breakpoints={{
            640: { slidesPerView: 2 }, // For phones
            1024: { slidesPerView: 3 }, // For desktops
          }}
        >
          {keyBenefit.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="grid ">
                <div className="image row-start-1 col-start-1">
                  <Image
                    src={news.img}
                    alt="news"
                    width={1000}
                    height={1000}
                    className="block"
                  />
                </div>
                <div className="content  text-black items-end p-5 text-center">
                  <h3 className="text-[2rem] lg:text-[1.6vw]">{news.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};
