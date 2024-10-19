"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialVideoCarousel() {
  return (
    <div className="w-full  py-12">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        navigation
        breakpoints={{
          768: { slidesPerView: 1.5 }, // For phones
          1024: { slidesPerView: 1.8 }, // For desktops
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="testimonial-swiper"
      >
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video.mp4"
            controls
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video.mp4"
            controls
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video.mp4"
            controls
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video.mp4"
            controls
            loop
            muted
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
