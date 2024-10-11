import React from "react";
import { Title } from "../title";
import { TextField } from "@mui/material";
import { SectionWrapper } from "../section-wrapper";

export const RedevelopmentForm = () => {
  return (
    <SectionWrapper className="p-[3vw]">
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 media-title">
          Register Your Enquire
        </Title>
      </div>
      <form action="" className="container mx-auto mb-10 lg:px-[10rem]">
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
        </div>
      </form>
    </SectionWrapper>
  );
};
