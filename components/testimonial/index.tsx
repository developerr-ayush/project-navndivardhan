"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface testmonial {
  name: string;
  role?: string;
  content: string;
}
interface testmonialProps {
  testimonial: testmonial[];
}
export default function TestimonialCarousel({ testimonial }: testmonialProps) {
  return (
    <div className="w-full  mx-auto pt-12">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        // centeredSlides={true}
        navigation
        breakpoints={{
          768: { slidesPerView: 1.75 }, // For phones
          1024: { slidesPerView: 3.3 }, // For desktops
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="testimonial-swiper"
      >
        {testimonial.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary mb-4 mx-auto" />
                <blockquote className="text-lg text-center mb-6">
                  {testimonial.content}
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
