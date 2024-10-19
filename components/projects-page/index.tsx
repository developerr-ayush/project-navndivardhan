"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import pattern from "@/public/image/pattern.png";
import Image from "next/image";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { GSAP } from "./gsap";
import { SectionWrapper } from "../section-wrapper";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab

  return (
    <SectionWrapper className=" mx-auto  project-page">
      <GSAP />
      <div className="head lg:text-center mb-8 lg:mb-16  ">
        <h2 className="text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-page-title">
          Our Projects
        </h2>
        <p className="text-[30px] lg:text-[48px] leading-none font-semibold project-page-desc">
          Discover our premium real estate projects, where design meets
          exceptional craftsmanship
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-between text-center my-16 project-page-tabs">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`text-[1.4rem] grid place-content-center border-r-2 flex-1 ${
            activeTab === "upcoming" ? "font-bold" : ""
          }`}
        >
          Upcoming Projects
        </button>
        <button
          onClick={() => setActiveTab("ongoing")}
          className={`text-[1.4rem] grid place-content-center flex-1 border-r-2 px-4 ${
            activeTab === "ongoing" ? "font-bold" : ""
          }`}
        >
          Ongoing Projects
        </button>

        <button
          onClick={() => setActiveTab("completed")}
          className={`text-[1.4rem] grid place-content-center flex-1  px-4 ${
            activeTab === "completed" ? "font-bold" : ""
          }`}
        >
          Completed Projects
        </button>
      </div>

      {/* Tab Content */}
      <div className="body">
        {activeTab === "completed" && (
          <div className="project-group" id="completed">
            <p className="title  text-[2rem] lg:text-[3rem] text-[#bb8866]">
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
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      className="w-full"
                      alt="temp"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      className="w-full"
                      alt="temp"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      className="w-full"
                      alt="temp"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        {activeTab === "ongoing" && (
          <div className="project-group" id="ongoing">
            <p className="title text-[2rem] lg:text-[3rem] text-[#bb8866]">
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
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      alt="temp"
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      alt="temp"
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      alt="temp"
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        {activeTab === "upcoming" && (
          <div className="project-group" id="upcoming">
            <p className="title  text-[2rem] lg:text-[3rem] text-[#bb8866]">
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
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      alt="temp"
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      alt="temp"
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="projects-item shadow-xl isolate bg-[#e1e1e1] flex flex-col-reverse md:flex-row items-center justify-between relative">
                  <div className="content text-center p-8 mx-auto">
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
                    <a
                      href="/project-detail"
                      className="text-[#bb8866] underline uppercase"
                    >
                      View Details
                    </a>
                  </div>
                  <div className="image md:w-1/2 min-w-[14rem] shrink-0">
                    <Image
                      width={500}
                      height={500}
                      src="/image/parkway.jpeg"
                      alt="temp"
                      className="w-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
