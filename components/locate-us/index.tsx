import React from "react";
import { Title } from "../title";
import Image from "next/image";
import { Button } from "../ui/button";

export const LocateUs = () => {
  return (
    <div className="relative lg:flex flex-row-reverse">
      <div className="head shrink-0 w-full p-[3vw]  lg:max-w-[50rem] ml-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[4.5rem] opacity-40 text-[#bb8866] mb-2 media-title font-bold">
          Locate <span className="font-medium">Us</span>
        </Title>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14570743404!2d72.716378703351!3d19.08217751744989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728924563796!5m2!1sen!2sin"
          width="100%"
          height="500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-square"
        ></iframe>
      </div>
      <div className="body flex flex-col gap-8 p-4 justify-center items-center flex-1">
        <Button variant={"default"} size={"2xl"}>
          Enquire Now
        </Button>
        <Button variant={"default"} size={"2xl"}>
          Download Brochure
        </Button>
      </div>
      <Image
        src="/image/project-building.png"
        alt="bg-oattern"
        width={1920}
        height={1080}
        className="w-full h-auto absolute bottom-0 left-0 -z-10"
      />
    </div>
  );
};
