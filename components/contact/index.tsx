import React from "react";
import { Title } from "../title";
import TextField from "@mui/material/TextField";
import BasicSelect from "../select-dropdown";
const residency = [
  {
    id: 1,
    name: "1 Bed",
  },
  {
    id: 2,
    name: "2 Bed",
  },
  {
    id: 3,
    name: "3 Bed",
  },
  {
    id: 4,
    name: "4 - 5 Bed",
  },
];
const priceRange = [
  {
    id: 1,
    name: "75L - 1CR",
  },
  {
    id: 2,
    name: "1CR - 2CR",
  },
  {
    id: 3,
    name: "2CR - 2.5CR",
  },
  {
    id: 4,
    name: "2.5CR - 5CR",
  },
];
const howHeard = [
  {
    id: 1,
    name: "Agents",
  },
  {
    id: 2,
    name: "Advert",
  },
  {
    id: 3,
    name: "Hoarding",
  },
  {
    id: 4,
    name: "Word of mouth",
  },
  {
    id: 5,
    name: "Press Article",
  },
  {
    id: 5,
    name: "Search Engine",
  },
];
export const Contact = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl text-center col-span-2 -order-1">
        <Title className="mx-auto text-[2rem] lg:text-[3.125rem] text-[#bb8866] mb-2 news-title">
          Enquire Now
        </Title>
      </div>
      <form action="#" method="POST" className="mx-auto mt-10 max-w-xl w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
          <div className="sm:col-span-2">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="sm:col-span-1">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="sm:col-span-1">
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
              label="Phone number"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="sm:col-span-2">
            <BasicSelect itemList={residency} label="Residency type" />
          </div>
          <div className="sm:col-span-2">
            <BasicSelect itemList={priceRange} label="Price Range" />
          </div>
          <div className="sm:col-span-2">
            <BasicSelect
              itemList={howHeard}
              label="How did you hear about us?"
            />
          </div>
          <div className="sm:col-span-2">
            <p>
              By submitting form I confirm that by submitting this form my
              personal data may be collected in accordance with our Privacy
              Policy. and your details will be shared with our appointed agents.
            </p>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#bb8866] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#7d4520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
