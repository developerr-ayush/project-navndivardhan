import React from "react";
import { FaArrowRight } from "react-icons/fa6";

let newsList = [
  {
    id: 1,
    title: "The Nandivardhan Difference- Redefining Real Estate Excellence",
    description:
      "In the bustling real estate market, Nandivardhan Developers stands out with its unwavering commitment to excellence, innovation, and community impact. Here’s...",
    link: "#",
    img: "blog-1.jpg",
  },
  {
    id: 2,
    title:
      " Architectural Innovations Discovering Nandivardhan’s Cutting-Edge Designs ",
    description:
      "In the dynamic realm of real estate, architectural trends are in constant flux, adapting to evolving lifestyles, technological advancements, and environmental...",
    link: "#",
    img: "blog-2.jpg",
  },
  {
    id: 3,
    title:
      " Bridging the Gap: Nandivardhan’s Vision for Inclusive Housing in Mumbai",
    description:
      " In the bustling metropolis of Mumbai, where soaring skyscrapers and luxury developments dominate the skyline, the need for inclusive housing remains...",
    link: "#",
    img: "blog-3.jpg",
  },
];
export const News = () => {
  return (
    <div className="px-8 py-8">
      <h3 className="text-[2.5rem] mb-4 text-[#84754E]">Latest News</h3>
      <div className="grid gap-8 md:grid-cols-3">
        {newsList.map((news) => (
          <div key={news.id}>
            <img src={`/image/${news.img}`} alt="" />
            <h4 className="mt-8 mb-4 text-[1.4rem] md:text-[1rem] uppercase font-semibold tracking-widest">
              {news.title}
            </h4>
            <p className="text-[1.4rem] mb-4">{news.description}</p>
            <a
              className="text-[1rem] flex items-center gap-2 text-[#84754E] uppercase tracking-widest"
              href={news.link}
            >
              Read More
              <FaArrowRight />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
