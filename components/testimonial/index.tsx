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

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechCorp",
    content:
      "This product has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours.",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Director, InnovateCo",
    content:
      "I can't imagine running our campaigns without this tool. It's been a game-changer for our team's productivity.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, StartupX",
    content:
      "The API is so well-designed, it made integration a breeze. Kudos to the development team!",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer, DesignHub",
    content:
      "As a designer, I appreciate the attention to detail in the UI. It's a joy to use and recommend to clients.",
  },
];

export default function TestimonialCarousel() {
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary mb-4 mx-auto" />
                <blockquote className="text-lg text-center mb-6">
                  "{testimonial.content}"
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
