"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GSAP } from "./gsap";

export const Project = () => {
  return (
    <div className="my-10 p-[3vw] project">
      <GSAP />
      <h2 className="text-[2rem] lg:text-[3.125rem] text-[#00a8dd] project-title">
        Our Projects
      </h2>
      <p className="text-[2.4rem] lg:text-[3.6rem] project-desc">
        Explore our innovative projects, crafted with precision and excellence
      </p>
      <Swiper
        className="product-swiper"
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 }, // For phones
          1024: { slidesPerView: 3 }, // For desktops
        }}
      >
        <SwiperSlide>
          <div className="product-item grid">
            <div className="image col-start-1 row-start-1">
              <img
                src="/image/project-1.jpeg"
                alt="project"
                className="aspect-[9/16] object-cover"
              />
            </div>
            <div className="content col-start-1 row-start-1 flex justify-end p-4 lg:p-8 text-white bg-gradient-to-t from-black to-transparent flex-col">
              <h3 className="text-[2rem] font-primary font-bold lg:text-[1.6vw]">
                Mount Casa
              </h3>
              <p className="text-[1.5rem] font-bold">
                2 & 3 BHK luxurious residential homes{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-item grid">
            <div className="image col-start-1 row-start-1">
              <img
                src="/image/project-2.jpeg"
                alt="project"
                className="aspect-[9/16] object-cover"
              />
            </div>
            <div className="content col-start-1 row-start-1 flex justify-end p-4 lg:p-8 text-white bg-gradient-to-t from-black to-transparent flex-col">
              <h3 className="text-[2rem] font-primary font-bold lg:text-[1.6vw]">
                Mount Casa
              </h3>
              <p className="text-[1.5rem] font-bold">
                2 & 3 BHK luxurious residential homes{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-item grid">
            <div className="image col-start-1 row-start-1">
              <img
                src="/image/project-3.jpeg"
                alt="project"
                className="aspect-[9/16] object-cover"
              />
            </div>
            <div className="content col-start-1 row-start-1 flex justify-end p-4 lg:p-8 text-white bg-gradient-to-t from-black to-transparent flex-col">
              <h3 className="text-[2rem] font-primary font-bold lg:text-[1.6vw]">
                Parkway Matunga
              </h3>
              <p className="text-[1.5rem] font-bold">
                2 & 3 BHK luxurious residential homes{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides here if needed */}
      </Swiper>
    </div>
  );
};
