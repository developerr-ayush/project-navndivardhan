import Image from "next/image";
import Link from "next/link";
import arrowRight from "@/public/icon/arrow-right-blue.svg";

import React from "react";
import { GSAP } from "./gsap";

const news = [
  {
    img: "/image/news-1.png",
    title: "Balancing Luxury with Affordability:  Is It Possible?",
  },
  {
    img: "/image/news-2.png",
    title: "Why Choose Nandivardhan as Your Next Society?",
  },
  {
    img: "/image/news-3.png",
    title: "Sustainability Trends in Real Estate",
  },
];
export const News = () => {
  return (
    <div className=" p-[3vw] news">
      <GSAP />
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <h2 className="text-[2rem] lg:text-[3.125rem] text-[#00a8dd] mb-2 news-title">
          Latest News
        </h2>
        <p className="text-[3.2rem] leading-none font-semibold news-desc">
          Explore our insightful and crafted contect with expertise and fresh
          perspectives
        </p>
      </div>
      <div className="grid container mx-auto gap-4 lg:grid-cols-3">
        {news.map((news, index) => (
          <div key={index} className="col-span-1 grid news-item">
            <div className="image row-start-1 col-start-1">
              <Image
                src={news.img}
                alt="news"
                width={1000}
                height={1000}
                className="block"
              />
            </div>
            <div className="content row-start-1 col-start-1 bg-gradient-to-t from-black to-transparent flex text-white items-end p-5 text-center">
              <h3 className="text-[2rem] lg:text-[1.6vw]">{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="footer container mt-8 mx-auto flex lg:justify-end">
        <Link
          href="/"
          className="flex uppercase items-center gap-2 text-[#85888a] text-[1.4rem] tracking-widest"
        >
          Read More
          <Image src={arrowRight} alt="arrow" className="  w-12 h-12  arrow" />
        </Link>
      </div>
    </div>
  );
};
