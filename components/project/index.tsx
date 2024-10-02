"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GSAP } from "./gsap";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const projects = [
  {
    title: "Mount Casa",
    desc: "2 & 3 BHK luxurious residential homes",
    image: "/image/mount-casa.jpeg",
    logo: "/image/mount-casa-logo.png",
  },
  {
    title: "Fortuna Blue",
    desc: "2 & 3 BHK luxurious residential homes",
    image: "/image/fortuna-blue.jpeg",
    logo: "/image/fortuna-blue-logo.png",
  },
  {
    title: "Parkway Matunga",
    desc: "2 & 3 BHK luxurious residential homes",
    image: "/image/parkway.jpeg",
    logo: "/image/parkway-logo.png",
  },
];
export const Project = () => {
  return (
    <div className="my-10 p-[3vw] project">
      <GSAP />
      <h2 className="text-[2rem] lg:text-[3.125rem] text-[#00a8dd] project-title">
        Our Projects
      </h2>
      <h3 className="mb-4 text-[2.4rem] lg:text-[3.6rem] project-desc">
        Explore our innovative projects, crafted with precision and excellence
      </h3>
      <Swiper
        className="product-swiper"
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 }, // For phones
          1024: { slidesPerView: 3 }, // For desktops
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="product-item group grid">
              <div className=" col-start-1 row-start-1">
                <img
                  src={project.image}
                  alt="project"
                  className="aspect-[9/16] object-cover"
                />
              </div>
              <div className=" col-start-1 group-hover:opacity-0 transition-all duration-300   row-start-1 flex justify-end p-4 lg:p-8 text-white bg-gradient-to-t from-black to-transparent flex-col">
                <h3 className="text-[2rem] font-primary font-bold lg:text-[1.6vw]">
                  {project.title}
                </h3>
                <p className="text-[1.5rem] font-bold">{project.desc}</p>
              </div>
              <div className="group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl shadow-black opacity-0 scale-0 absolute inset-0 w-max h-max bg-black aspect-square flex items-center justify-center m-auto rounded-full p-4">
                <img src={project.logo} alt="logo" className="w-24 " />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
