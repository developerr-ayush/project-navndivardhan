import React from "react";
import { Title } from "../title";
import { TextField } from "@mui/material";
import { SectionWrapper } from "../section-wrapper";
import { Button } from "../ui/button";

export const GrowWithUs = () => {
  return (
    <SectionWrapper className="p-[3vw]">
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-3">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] project-title text-center">
          Grow With Us
        </Title>
        <p className=" text-[1.4rem] lg:text-[2.6rem] mb-8 project-desc text-center leading-none">
          Submit your details below
        </p>
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
          <div className="sm:col-span-2 text-center">
            <Button type="submit" size={"xl"}>
              Let&apos;s talk
            </Button>
          </div>
        </div>
      </form>
    </SectionWrapper>
  );
};
