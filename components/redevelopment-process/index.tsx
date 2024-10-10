import React from "react";
import { Title } from "../title";
import { AiOutlineGift } from "react-icons/ai";
export const RedevelopmentProcess = () => {
  return (
    <div>
      <div className="head  max-w-[70rem] mx-auto  lg:text-center mb-8 lg:mb-16">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 media-title">
          Process
        </Title>
      </div>
      <div className="grid container mx-auto px-8 lg:grid-cols-8 gap-4 mb-10">
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>{" "}
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>{" "}
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>{" "}
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>{" "}
        <div className="item grid place-content-center aspect-square p-4 border border-solid border-black my-4">
          <AiOutlineGift size={50} />
          <p className="text-xl font-bold mt-2">Step 1</p>
        </div>
      </div>
    </div>
  );
};
