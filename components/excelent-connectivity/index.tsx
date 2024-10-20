import React from "react";
import { Title } from "@/data/atom/title";
import { SectionWrapper } from "../section-wrapper";

export const ExcelentConnectivity = () => {
  return (
    <SectionWrapper>
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <div className="mx-auto  opacity-40  text-[#bb8866] mb-2 media-title font-bold">
          <Title className="block font-bold mb-0 text-[4vw]">
            The Heart of
          </Title>
          <Title className="block font-medium">Excellent Connectivity</Title>
        </div>
      </div>
      <Title className="text-center mt-8 mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 media-title">
        Location Highlights
      </Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
        <div className="">
          <h3 className="font-primary font-bold mb-4">OFFICES</h3>
          <ul>
            <li>One Indiabulls - 7 mins</li>
            <li>Peninsula Business Centre - 7 mins</li>
            <li>Ruby - 8 mins</li>
            <li>Urumi - 8 mins</li>
            <li>Peninsula cooperative Park - 9 mins</li>
            <li>Kamala Mills - 15 mins</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-primary font-bold mb-4">NEARBY</h3>
          <ul>
            <li>NM Joshi Marg - 9 mins (Walk)</li>
            <li>Worli Naka - 11 mins</li>
            <li>Dadar - 13 mins</li>
            <li>Mahalaxmi Racecourse - 14 mins</li>
            <li>Haji Ali - 18 mins</li>
            <li> Prabhadevi - 22 mins</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-primary font-bold mb-4">TRAIN</h3>
          <ul>
            <li>Lower Parel Station - 1 min</li>
            <li>Curry Road station - 2 min</li>
            <li>Prabhadevi Station - 4 mins</li>
            <li>Mahalaxmi Station - 4 mins</li>
            <li>Dadar Station - 7 mins</li>
            <li>Lower Parel Monorail - 7 mins</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-primary font-bold mb-4">HOTEL</h3>
          <ul>
            <li>St Regis - 10 mins</li>
            <li>Four Seasons - 11 mins</li>
            <li>ITC Hotels - 14 mins</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-primary font-bold mb-4">HOSPITAL</h3>
          <ul>
            <li>Tata Hospital - 12 mins</li>
            <li>Global Hospital - 15 mins</li>
            <li>Kem Hospital - 15 mins</li>
          </ul>
        </div>
        <div className="">
          <h3>MALL</h3>
          <ul>
            <li>High-Street Phoenix</li>
            <li>Palladium Mall - 10 mins (Walk)</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};
