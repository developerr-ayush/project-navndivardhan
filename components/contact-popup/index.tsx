"use client";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { Contact } from "../contact";

export const ContactUs = () => {
  const [modelOpen, setmodelOpen] = useState(false);
  const handleModel = () => {
    setmodelOpen(!modelOpen);
  };
  return (
    <div>
      <button
        className="fixed right-0 top-1/2 uppercase bg-[#bb8866] text-white py-4 z-[100] w-10 vertical-text rounded-l-lg"
        onClick={handleModel}
      >
        enquire now
      </button>
      {modelOpen && (
        <div className="fixed inset-0 flex justify-center overflow-y-auto p-4 z-[101] bg-black/60 backdrop-blur-md">
          <div className="isolate m-auto bg-white px-6 py-8 lg:px-8  w-full shrink-0 h-max max-w-[40rem] rounded-md">
            <button
              className="ml-auto flex items-center justify-center w-10 h-10 "
              onClick={handleModel}
            >
              <FaX color="black" />
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};
