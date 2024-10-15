import React from "react";
import { Title } from "../title";
import { TextField } from "@mui/material";
import { SectionWrapper } from "../section-wrapper";

export const RedevelopmentForm = () => {
  return (
    <SectionWrapper className="p-[3vw]">
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-3">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-title text-center">
          Let us help you
        </Title>
        <p className=" text-[1.4rem] lg:text-[2.6rem] mb-8 project-desc text-center leading-none">
          To Redevelop
        </p>
      </div>
      <form action="" className="container mx-auto mb-10 lg:px-[10rem]">
        <p>
          We follow a meticulous and transparent redevelopment process to ensure
          that the needs of all stakeholders are met:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="input">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Society Name"
              variant="outlined"
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Society Location"
              variant="outlined"
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Years Of Construction"
              variant="outlined"
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Number"
              variant="outlined"
            />
          </div>
          <div className="input">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="sm:col-span-2 text-right">
            <button
              type="submit"
              className="block max-w-[13rem] ml-auto w-full rounded-md bg-[#bb8866] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#7d4520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </form>
    </SectionWrapper>
  );
};
