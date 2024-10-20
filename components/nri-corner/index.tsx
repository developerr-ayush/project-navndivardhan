import React from "react";
import { Title } from "@/data/atom/title";
import { SectionWrapper } from "../section-wrapper";
import Image from "next/image";

export const NRICorner = () => {
  return (
    <SectionWrapper className="bg-[#e8e7e7]">
      <div className="head text-center">
        <Title className="mx-auto text-[2rem] xl:text-[3.125rem] text-[#bb8866] mb-2 leader-title">
          NRI Corner
        </Title>
        <p className="text-[1.8rem] leading-none font-semibold leader-desc">
          NRI Benefits & Support
        </p>
      </div>
      <div className="body container mx-auto mt-8">
        <p className="max-w-6xl mx-auto text-center mt-12">
          We follow a meticulous and traaAt Nandivardhan Group, we understand
          the aspirations of NRIs looking to invest in India&apos;s booming real
          estate market. Mumbai, known for its unparalleled growth potential,
          offers a lucrative opportunity for NRIs to secure high returns on
          investment while owning a piece of the city&apos;s vibrant
          landscape.nsparent redevelopment process to ensure that the needs of
          all stakeholders are met:
        </p>
        <div className=" mx-auto px-4 py-8 xl:flex mt-32">
          <div className="flex flex-col xl:flex-row  ">
            <div className="xl:w-1/2 space-y-8 mb-8 xl:mb-0">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#bb8866] mb-2">
                  Hassle-Free Purchase Process
                </h2>
                <p className="text-gray-700">
                  We provide seamless end-to-end assistance, from documentation
                  to legal procedures
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#bb8866] mb-2">
                  Exclusive Financial Guidance
                </h2>
                <p className="text-gray-700">
                  Expert advice on home loans, taxation, and repatriation of
                  funds.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#bb8866] mb-2">
                  Property Management
                </h2>
                <p className="text-gray-700">
                  We offer property management services to handle rentals and
                  maintenance while you&apos;re abroad
                </p>
              </section>
            </div>

            <div className="xl:w-1/3 flex justify-center self-center xl:scale-[1.8] mx-auto">
              <Image
                src="/image/nri-person.png"
                alt="Happy family"
                width={500}
                height={400}
                className="rounded-lg "
              />
            </div>
          </div>

          <div className="mt-12 xl:pl-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#bb8866] mb-4">
              Legal Guidelines for NRI Investment
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                NRIs can buy residential and commercial properties in India
                without special permissions.
              </li>
              <li>
                Repatriation of sale proceeds is allowed under certain
                conditions.
              </li>
              <li>Taxation and other financial norms simplified</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
