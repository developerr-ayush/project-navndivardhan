import React from "react";
import { SectionWrapper } from "../section-wrapper";
import { Title } from "@/data/atom/title";
import Image from "next/image";

export const Design = () => {
  return (
    <SectionWrapper>
      <div className="text-center">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 leader-title">
          Our Design Philisophy
        </Title>

        <p className="block -medium">
          At Nandivardhan Group, your needs and dreams drive our inspiration. We
          design spaces that prioritize comfort, safety, and elegance without
          compromise. Our exclusive VENTILIT* philosophy draws from
          nature&apos;s finest elements: air, height, and light. We believe that
          thoughtful planning outweighs mere visual appeal, which is why we
          focus on creating homes that align with the sun&apos;s path and the
          direction of the wind. Our generous floor-to-ceiling heights enhance
          the sense of space and sophistication in our apartments. With a
          steadfast commitment to high-quality raw materials and a practical
          design approach, we ensure maximum safety and minimal maintenance for
          our residents.
        </p>
        <Image
          src="/image/design-philisophy.jpg"
          alt="design philosophy"
          width="1000"
          height="300"
          className="h-auto max-w-[40rem] mx-auto"
        />
      </div>
    </SectionWrapper>
  );
};
