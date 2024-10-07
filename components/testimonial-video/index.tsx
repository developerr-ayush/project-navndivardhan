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
    <div className="w-full container mx-auto px-4 py-12">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides={true}
        navigation
        breakpoints={{
          768: { slidesPerView: 1.75 }, // For phones
          1024: { slidesPerView: 3.3 }, // For desktops
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="testimonial-swiper"
      >
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video-vertical.mp4"
            controls
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video-vertical.mp4"
            controls
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video-vertical.mp4"
            controls
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="w-full h-full object-cover"
            src="/video/Luxry-video-vertical.mp4"
            controls
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
