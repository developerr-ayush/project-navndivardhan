import React from "react";
import { Title } from "@/data/atom/title";
import { JobListing } from "./job-listing";

export const Openings = () => {
  return (
    <div>
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-3">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-title text-center">
          Current Openings
        </Title>
        <p className=" text-[1.4rem] lg:text-[2.6rem] mb-8 project-desc text-center leading-none">
          Recognizing your excellence and apply for the position you want to
        </p>
        <JobListing />
      </div>
    </div>
  );
};
