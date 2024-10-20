import React from "react";
import Image from "next/image";
import image from "@/public/image/about.jpg";
import { GSAP } from "./gsap";
import { Title } from "@/data/atom/title";
import { SectionWrapper } from "../section-wrapper";
export const AboutCompany = () => {
  return (
    <SectionWrapper className="grid lg:grid-cols-12 items-center about overflow-hidden">
      <GSAP />

      <div className="lg:col-span-6 p-[3vw] image">
        <Image
          src={image}
          alt="logo"
          className="w-full h-full object-cover"
          width={500}
          height={1000}
        />
      </div>
      <div className="lg:col-span-6  content">
        <Title className=" title ">About Company</Title>
        <p className="mb-4">
          Nandivardhan Group has been a pioneering force in Mumbai and
          Thane&apos;s real estate landscape, known for redefining urban living
          through its visionary projects. With a firm belief in &quot;Innovating
          a Quality Living Experience,&quot; the Group has consistently raised
          the bar in delivering residential and commercial spaces that combine
          luxury, convenience, and sustainability. <br />
          The journey of Nandivardhan began with a singular vision-transforming
          the skyline of Mumbai and Thane while providing unmatched living
          experiences. Driven by a passion for innovation and a customer-first
          approach, the Group has developed iconic properties that stand as
          landmarks of trust and excellence. Over the years, Nandivardhan has
          built a legacy of success by delivering projects that reflect
          thoughtful design, state-of-the-art amenities, and the highest
          standards of quality.
          <br />
          The Group&apos;s growth is underpinned by a leadership team that
          exemplifies strategic foresight, market understanding, and a deep
          commitment to the values of transparency and integrity. Helmed by Mr.
          Anil Nagraj Mutha, the Chief Visionary and Co-Founder, Nandivardhan
          Group continues to lead the way in creating spaces that not only
          fulfill the aspirations of modern urban living but also enhance the
          quality of life for its residents. Anil Nagraj Mutha&apos;s clear
          vision and hands-on approach have guided the company to great success,
          ensuring that every Nandivardhan project is a hallmark of premium
          craftsmanship and innovation. Together with Mr. Yash Ritesh Mutha,
          Chief Strategist: Sales, and Mr. Nagraj Talaji Mutha, Chairman, this
          leadership team continues to push the boundaries of real estate
          excellence, ensuring Nandivardhan remains a name synonymous with
          quality, trust, and forward-thinking development.
        </p>
      </div>
    </SectionWrapper>
  );
};
