import React from "react";
import { Title } from "../title";
import TextField from "@mui/material/TextField";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
export const Contact = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center col-span-2 -order-1">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 news-title">
          Enquire Now
        </Title>
        <p className="text-[1.8rem] leading-none font-semibold timeline-desc">
          Connect With Us
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="https://www.instagram.com/nandivardhan__"
            target="_blank"
            className="w-12"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://www.facebook.com/nandivardhan.info"
            target="_blank"
            className="w-12"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://x.com/nandivardhan__"
            target="_blank"
            className="w-12"
          >
            <FaTwitter size={25} />
          </a>
        </div>
      </div>
      <form action="#" method="POST" className="mx-auto mt-10 max-w-xl w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
          <div className="sm:col-span-2">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="sm:col-span-2">
            <TextField
              id="outlined-basic"
              label="Company"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="sm:col-span-2">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="sm:col-span-2">
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="sm:col-span-2">
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#bb8866] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#7d4520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
    </>
  );
};
