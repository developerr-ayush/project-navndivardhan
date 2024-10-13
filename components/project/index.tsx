"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GSAP } from "./gsap";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Title } from "../title";
import Image from "next/image";
import { SectionWrapper } from "../section-wrapper";

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
    <SectionWrapper className=" bg-[#eaecec] project overflow-hidden">
      <GSAP />
      <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-title text-center">
        Our Projects
      </Title>
      <p className=" text-[1.4rem] lg:text-[2.6rem] mb-8 project-desc text-center leading-none">
        Explore our innovative projects, crafted with precision and excellence
      </p>
      <div className=" mx-auto">
        <Swiper
          className="product-swiper  mx-auto"
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 }, // For phones
            1024: { slidesPerView: 3 }, // For desktops
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <div className="product-item group grid">
                <div className=" col-start-1 row-start-1">
                  <Image
                    width={500}
                    height={500}
                    src={project.image}
                    alt="project"
                    className="aspect-[9/16] w-full object-cover group-hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className=" col-start-1 group-hover:opacity-0 transition-all duration-300   row-start-1 flex justify-end p-4 lg:p-8 text-white bg-gradient-to-t from-black to-transparent flex-col">
                  <h3 className="text-[2rem] font-primary font-bold lg:text-[1.6vw]">
                    {project.title}
                  </h3>
                  <p className="text-[1.5rem] font-bold">{project.desc}</p>
                </div>
                <div className="group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl shadow-black opacity-0 scale-0 absolute inset-0 w-max h-max bg-black aspect-square flex items-center justify-center m-auto rounded-full p-4">
                  <Image
                    width={500}
                    height={500}
                    src={project.logo}
                    alt="logo"
                    className="w-24 "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
};
