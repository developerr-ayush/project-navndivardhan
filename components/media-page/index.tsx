"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GSAP } from "./gsap";

// Sample media data with years
const mediaData = [
  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=1",
    title: "2021 Media title 1",
  },
  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=2",
    title: "2021 Media title 2",
  },
  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=3",
    title: "2021 Media title 3",
  },
  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=4",
    title: "2021 Media title 4",
  },
  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=5",
    title: "2021 Media title 5",
  },

  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=6",
    title: "2022 Media title 1",
  },
  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=7",
    title: "2022 Media title 2",
  },
  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=8",
    title: "2022 Media title 3",
  },
  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=9",
    title: "2022 Media title 4",
  },
  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=10",
    title: "2022 Media title 5",
  },

  {
    year: 2023,
    img: "https://picsum.photos/1000/1002?random=11",
    title: "2023 Media title 1",
  },
  {
    year: 2023,
    img: "https://picsum.photos/1000/1002?random=12",
    title: "2023 Media title 2",
  },
  {
    year: 2023,
    img: "https://picsum.photos/1000/1002?random=13",
    title: "2023 Media title 3",
  },
  {
    year: 2023,
    img: "https://picsum.photos/1000/1002?random=14",
    title: "2023 Media title 4",
  },
  {
    year: 2023,
    img: "https://picsum.photos/1000/1002?random=15",
    title: "2023 Media title 5",
  },

  {
    year: 2024,
    img: "https://picsum.photos/1000/1003?random=16",
    title: "2024 Media title 1",
  },
  {
    year: 2024,
    img: "https://picsum.photos/1000/1003?random=17",
    title: "2024 Media title 2",
  },
  {
    year: 2024,
    img: "https://picsum.photos/1000/1003?random=18",
    title: "2024 Media title 3",
  },
  {
    year: 2024,
    img: "https://picsum.photos/1000/1003?random=19",
    title: "2024 Media title 4",
  },
  {
    year: 2024,
    img: "https://picsum.photos/1000/1003?random=20",
    title: "2024 Media title 5",
  },

  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=21",
    title: "2021 Media title 6",
  },
  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=22",
    title: "2022 Media title 6",
  },
  {
    year: 2023,
    img: "https://picsum.photos/1000/1002?random=23",
    title: "2023 Media title 6",
  },
  {
    year: 2024,
    img: "https://picsum.photos/1000/1003?random=24",
    title: "2024 Media title 6",
  },

  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=25",
    title: "2021 Media title 7",
  },
  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=26",
    title: "2022 Media title 7",
  },
  {
    year: 2023,
    img: "https://picsum.photos/1000/1002?random=27",
    title: "2023 Media title 7",
  },
  {
    year: 2024,
    img: "https://picsum.photos/1000/1003?random=28",
    title: "2024 Media title 7",
  },

  {
    year: 2021,
    img: "https://picsum.photos/1000/1000?random=29",
    title: "2021 Media title 8",
  },
  {
    year: 2022,
    img: "https://picsum.photos/1000/1001?random=30",
    title: "2022 Media title 8",
  },
];

export const MediaPage = () => {
  const [selectedYear, setSelectedYear] = useState(2024); // Default year

  const years = [2021, 2022, 2023, 2024];

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
            className={`m-2 p-2 border-2 border-black rounded ${
              selectedYear === year
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="container mx-auto gap-4 grid md:grid-cols-2 lg:grid-cols-3">
        {filteredMedia.map((news, index) => (
          <div key={index} className="grid">
            <div className="image row-start-1 col-start-1">
              <Image
                src={news.img}
                alt={`news-${news.year}`}
                width={1000}
                height={1000}
                className="block"
              />
            </div>
            <div className="content text-black items-end p-5 text-center">
              <h3 className="text-[2rem] lg:text-[1.6vw]">{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
