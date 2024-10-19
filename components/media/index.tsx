"use client";
import Image from "next/image";

import React from "react";
import { GSAP } from "./gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";

const media = [
  {
    img: "/image/media-1.jpg",
    title: "Realiy boom in South-Central Munbai",
  },
  {
    img: "/image/media-2.jpg",
    title: "Growind Housing demand in South Mumbai",
  },
  {
    img: "/image/media-3.jpg",
    title:
      "Enhanced connectivity & Redevelopment fuels south Central Mumbai's Real Estate Boom",
  },
];
export const Media = () => {
  return (
    <SectionWrapper className=" media overflow-hidden">
      <GSAP />
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 media-title">
          Media
        </Title>
        {/* <p className="text-[1.8rem] leading-none font-semibold media-desc">
          Explore our insightful and crafted contect with expertise and fresh
          perspectives
        </p> */}
      </div>
      <div className=" container mx-auto ">
        <Swiper
          slidesPerGroup={1}
          spaceBetween={20}
          className="media-swiper"
          breakpoints={{
            640: { slidesPerView: 2 }, // For phones
            1024: { slidesPerView: 3 }, // For desktops
          }}
        >
          {media.map((news, index) => (
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
                  <h3 className="text-[2rem] lg:text-[1.6vw] line-clamp-2">
                    {news.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};
