import React from "react";
import GSAP from "./gsap";
import arrowRight from "@/public/icon/arrow-right-blue.svg";
import { Title } from "../title";
import Image from "next/image";

export const Founder = () => {
  return (
    <div className="container p-[3vw]  mx-auto Founder">
      <GSAP />
      <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866]  text-center founder-title">
        Leadership
      </Title>
      <div className="founder-item my-14 mx-auto max-w-[60rem]">
        <div className="info md:flex items-center gap-4 lg:gap-[4rem] founder-img">
          <Image
            width={500}
            height={800}
            className="w-[20rem] shrink-0 max-w-full mb-4"
            src="/image/anil-mutha.png"
            alt=""
          />
          <div className="text">
            <h3 className="text-[20px] md:text-[50px] text-[#bb8866]  ">
              Mr. Anil Nagraj Mutha
            </h3>
            <p className="text-[20px] md:text-[25px] leading-none font-semibold">
              Chief Visionary and Co-Founder
            </p>
            <p className="mt-8 founder-desc">
              Anil Nagraj Mutha, with his remarkable foresight and
              entrepreneurial spirit, has been instrumental in the rise of
              Nandivardhan Group. His visionary approach focuses on creating
              extraordinary living spaces that push the boundaries of design and
              functionality. He oversees every aspect of the company&apos;s
              operations, ensuring that innovation remains at the core of every
              project. His leadership has not only led to numerous successful
              developments but also solidified Nandivardhan&apos;s reputation as
              a trusted and respected name in real estate.
            </p>
            <a
              href="/about"
              className="flex  items-center gap-2 text-[#85888a] font-semibold text-[1.2rem]  "
            >
              <Image
                src={arrowRight}
                alt="arrow"
                className="  w-12 h-12 arrow rotate-180"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
