"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pattern from "@/public/image/pattern.png";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
export const Projects = () => {
  return (
    <div className="container mx-auto px-6 my-10">
      <div className="head lg:text-center mb-8 lg:mb-16 sustainability-title ">
        <h2 className="text-[2rem] lg:text-[3.125rem] text-[#bb8866]">
          Our Projects
        </h2>
        <p className="text-[30px] lg:text-[48px] leading-none font-semibold leadership-desc">
          Discover our premium real estate projects, where design meets
          exceptional craftsmanship
        </p>
      </div>
      <div className="my-8 flex flex-col md:flex-row gap-8 my-10 ">
        <a href="#completed" className="text-[1.4rem]">
          Completed Projects
        </a>
        <a href="#ongoing" className="text-[1.4rem]">
          Ongoing Projects
        </a>
        <a href="#upcoming" className="text-[1.4rem]">
          Upcoming Projects
        </a>
      </div>
      <div className="body">
        <div className="project-group" id="completed">
          <p className="title lg:text-right text-[2rem] lg:text-[3rem] text-[#bb8866]">
            <b className="font-bold">Completed</b> Projects
          </p>
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={100}
            className="projects-swiper "
          >
            <SwiperSlide>
              <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex items-center justify-between relative">
                <div className="content text-center p-8 ">
                  <Image
                    src={pattern}
                    alt="pattern"
                    className="absolute inset-0 object-cover h-full -z-[1]"
                  />
                  <h3 className="text-[2rem] lg:text-[3rem] text-[#bb8866] uppercase">
                    sumer bunglow
                  </h3>
                  <h4 className="text-[1.4rem]">Residential Project</h4>
                  <p className="text-[1.2rem]">Castle Mill, Thane</p>
                  <a href="" className="text-[#bb8866] underline uppercase">
                    View Details
                  </a>
                </div>
                <div className="image w-1/2">
                  <img src="/image/parkway.jpeg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex items-center justify-between relative">
                <div className="content text-center p-8 ">
                  <Image
                    src={pattern}
                    alt="pattern"
                    className="absolute inset-0 object-cover h-full -z-[1]"
                  />
                  <h3 className="text-[2rem] lg:text-[3rem] text-[#bb8866] uppercase">
                    sumer bunglow
                  </h3>
                  <h4 className="text-[1.4rem]">Residential Project</h4>
                  <p className="text-[1.2rem]">Castle Mill, Thane</p>
                  <a href="" className="text-[#bb8866] underline uppercase">
                    View Details
                  </a>
                </div>
                <div className="image w-1/2">
                  <img src="/image/parkway.jpeg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="project-group" id="ongoing">
          <p className="title  text-[2rem] lg:text-[3rem] text-[#bb8866]">
            <b className="font-bold">Ongoing</b> Projects
          </p>
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={100}
            className="projects-swiper "
          >
            <SwiperSlide>
              <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex items-center justify-between relative">
                <div className="content text-center p-8 ">
                  <Image
                    src={pattern}
                    alt="pattern"
                    className="absolute inset-0 object-cover h-full -z-[1]"
                  />
                  <h3 className="text-[2rem] lg:text-[3rem] text-[#bb8866] uppercase">
                    sumer bunglow
                  </h3>
                  <h4 className="text-[1.4rem]">Residential Project</h4>
                  <p className="text-[1.2rem]">Castle Mill, Thane</p>
                  <a href="" className="text-[#bb8866] underline uppercase">
                    View Details
                  </a>
                </div>
                <div className="image w-1/2">
                  <img src="/image/parkway.jpeg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex items-center justify-between relative">
                <div className="content text-center p-8 ">
                  <Image
                    src={pattern}
                    alt="pattern"
                    className="absolute inset-0 object-cover h-full -z-[1]"
                  />
                  <h3 className="text-[2rem] lg:text-[3rem] text-[#bb8866] uppercase">
                    sumer bunglow
                  </h3>
                  <h4 className="text-[1.4rem]">Residential Project</h4>
                  <p className="text-[1.2rem]">Castle Mill, Thane</p>
                  <a href="" className="text-[#bb8866] underline uppercase">
                    View Details
                  </a>
                </div>
                <div className="image w-1/2">
                  <img src="/image/parkway.jpeg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="project-group" id="upcoming">
          <p className="title lg:text-right text-[2rem] lg:text-[3rem] text-[#bb8866]">
            <b className="font-bold">Upcoming</b> Projects
          </p>
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={1}
            spaceBetween={100}
            className="projects-swiper "
          >
            <SwiperSlide>
              <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex items-center justify-between relative">
                <div className="content text-center p-8 ">
                  <Image
                    src={pattern}
                    alt="pattern"
                    className="absolute inset-0 object-cover h-full -z-[1]"
                  />
                  <h3 className="text-[2rem] lg:text-[3rem] text-[#bb8866] uppercase">
                    sumer bunglow
                  </h3>
                  <h4 className="text-[1.4rem]">Residential Project</h4>
                  <p className="text-[1.2rem]">Castle Mill, Thane</p>
                  <a href="" className="text-[#bb8866] underline uppercase">
                    View Details
                  </a>
                </div>
                <div className="image w-1/2">
                  <img src="/image/parkway.jpeg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex items-center justify-between relative">
                <div className="content text-center p-8 ">
                  <Image
                    src={pattern}
                    alt="pattern"
                    className="absolute inset-0 object-cover h-full -z-[1]"
                  />
                  <h3 className="text-[2rem] lg:text-[3rem] text-[#bb8866] uppercase">
                    sumer bunglow
                  </h3>
                  <h4 className="text-[1.4rem]">Residential Project</h4>
                  <p className="text-[1.2rem]">Castle Mill, Thane</p>
                  <a href="" className="text-[#bb8866] underline uppercase">
                    View Details
                  </a>
                </div>
                <div className="image w-1/2">
                  <img src="/image/parkway.jpeg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
