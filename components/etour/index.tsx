import React from "react";
import { Title } from "../title";
import { SectionWrapper } from "../section-wrapper";
import Image from "next/image";
import { Button } from "../ui/button";

export const Etour = () => {
  return (
    <SectionWrapper>
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 news-title">
          E-Tour
        </Title>
        <p className="text-[1.8rem] leading-none font-semibold news-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, corrupti?
        </p>
      </div>
      <div className="body">
        <div className="lg:flex gap-8 my-20 items-center">
          <div className="thumbnail shrink-0 w-[60%]">
            <Image
              className="w-100 aspect-video object-cover"
              src="/image/about.jpg"
              alt="thumbnail"
              width={1080}
              height={720}
            />
          </div>
          <div className="content">
            <Title className="mx-auto text-[1.8rem] lg:text-[2.4rem] text-[#bb8866] mb-2 news-title">
              Lorem ipsum dolor sit amet.
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              est? Totam cum eos molestias soluta neque perferendis magnam, nisi
              accusamus, laborum sed incidunt dolorem aliquam tempore earum quas
              asperiores veniam.
            </p>
            <div className="action flex gap-4 my-8">
              <Button className="flex-1 text-[1.2rem] py-6" variant="outline">
                View In 3D
              </Button>
              <Button className="flex-1 text-[1.2rem] py-6">Info</Button>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-row-reverse gap-8 my-20 items-center">
          <div className="thumbnail shrink-0 w-[60%]">
            <Image
              className="w-100 aspect-video object-cover"
              src="/image/about.jpg"
              alt="thumbnail"
              width={1080}
              height={720}
            />
          </div>
          <div className="content">
            <Title className="mx-auto text-[1.8rem] lg:text-[2.4rem] text-[#bb8866] mb-2 news-title">
              Lorem ipsum dolor sit amet.
            </Title>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              est? Totam cum eos molestias soluta neque perferendis magnam, nisi
              accusamus, laborum sed incidunt dolorem aliquam tempore earum quas
              asperiores veniam.
            </p>
            <div className="action flex gap-4 my-8">
              <Button className="flex-1 text-[1.2rem] py-6" variant="outline">
                View In 3D
              </Button>
              <Button className="flex-1 text-[1.2rem] py-6">Info</Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
