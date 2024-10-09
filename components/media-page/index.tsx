import Image from "next/image";

import React from "react";
import { GSAP } from "./gsap";

const media = [
  {
    img: "/image/news-1.png",
    title: "Media title 1",
  },
  {
    img: "/image/news-2.png",
    title: "Media title 2",
  },
  {
    img: "/image/news-3.png",
    title: "Media title 3",
  },
  {
    img: "/image/news-1.png",
    title: "Media title 1",
  },
  {
    img: "/image/news-2.png",
    title: "Media title 2",
  },
  {
    img: "/image/news-3.png",
    title: "Media title 3",
  },
  {
    img: "/image/news-1.png",
    title: "Media title 1",
  },
  {
    img: "/image/news-2.png",
    title: "Media title 2",
  },
  {
    img: "/image/news-3.png",
    title: "Media title 3",
  },
  {
    img: "/image/news-1.png",
    title: "Media title 1",
  },
  {
    img: "/image/news-2.png",
    title: "Media title 2",
  },
  {
    img: "/image/news-3.png",
    title: "Media title 3",
  },
];
export const MediaPage = () => {
  return (
    <div className=" p-[3vw] media overflow-hidden">
      <GSAP />
      <div className=" container mx-auto gap-4 grid md:grid-cols-2 lg:grid-cols-3">
        {media.map((news, index) => (
          <div key={index} className="grid ">
            <div className="image row-start-1 col-start-1">
              <Image
                src={news.img}
                alt="news"
                width={1000}
                height={1000}
                className="block"
              />
            </div>
            <div className="content  text-black items-end p-5 text-center">
              <h3 className="text-[2rem] lg:text-[1.6vw]">{news.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
