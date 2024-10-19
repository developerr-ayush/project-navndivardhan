"use client";
import Image from "next/image";

import React from "react";
import { GSAP } from "./gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionWrapper } from "../section-wrapper";
import { Autoplay, Navigation } from "swiper/modules";
import { Title } from "@/data/atom/title";

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
    <SectionWrapper className="px-0 media overflow-hidden">
      <GSAP />
      <div className="head px-[3vw]  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto media-title">Media</Title>
        {/* <p className="text-[1.8rem] leading-none font-semibold media-desc">
          Explore our insightful and crafted contect with expertise and fresh
          perspectives
        </p> */}
      </div>
      <div className="">
        <div className=" container mx-auto ">
          <Swiper
            slidesPerGroup={1}
            spaceBetween={20}
            className="media-swiper"
            modules={[Navigation, Autoplay]}
            autoplay
            navigation
            breakpoints={{
              640: { slidesPerView: 1.5 }, // For phones
              1024: { slidesPerView: 2 }, // For desktops
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
                  {/* <div className="content  text-white items-end p-5 text-center">
                    <h3 className="text-[2rem] lg:text-[1.6vw] line-clamp-2">
                      {news.title}
                    </h3>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionWrapper>
  );
};
