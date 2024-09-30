import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black px-[3vw] py-8">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center">
          <Image
            src="/image/nandivardhan-logo.png"
            alt="logo"
            className="w-[15rem] md:w-[20rem] max-w-full shrink-0"
            width={400}
            height={185}
          />
          <hr className="w-full" />
        </div>
      </div>
    </footer>
  );
};
