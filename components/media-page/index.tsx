"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GSAP } from "./gsap";

// Sample media data with years
const mediaData = [
  {
    year: 2022,
    img: "/image/media-1.jpg",
    title: "Media title 1",
  },
  {
    year: 2023,
    img: "/image/media-2.jpg",
    title: "Media title 2",
  },
  {
    year: 2024,
    img: "/image/media-2.jpg",
    title: "Media title 2",
  },
];

export const MediaPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024); // Default year

  const years = [2022, 2023, 2024];

  const filteredMedia = mediaData.filter(
    (media) => media.year === selectedYear
  );

  return (
    <div className="p-[3vw] media overflow-hidden">
      <GSAP />
      <div className="mb-4 text-center">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`m-2  shadow-md px-8 py-4 rounded ${
              selectedYear === year
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="container mx-auto gap-4 grid md:grid-cols-2 lg:grid-cols-4">
        {filteredMedia.map((news, index) => (
          <div key={index} className="grid shadow-md p-4">
            <div className="image row-start-1 col-start-1">
              <Image
                src={news.img}
                alt={`news-${news.year}`}
                width={1000}
                height={1000}
                className="block"
              />
            </div>
            <div className="content text-black items-end p-5 pb-0 text-center">
              <h3 className="text-[2rem] lg:text-[1.6vw]">{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
