import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

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
        <div className="grid gap-4 lg:gap-12 lg:grid-cols-3 my-4 lg:my-20">
          <div className="col-span-1 max-w-[20rem] text-white">
            <h3 className="underline text-[2rem] font-primary font-semibold underline-offset-[8px] mb-[3rem] decoration-white/50">
              Contact Details
            </h3>
            <p className="mb-2">
              Address: 2403 A Wing, Marathon Futurex, N.M. Joshi Marg, Lower
              Parel, Mumbai 400013
            </p>
            <p>
              Phone: <a href="tel:+9102269038383 ">022 69038383 </a>
            </p>
            <p>
              Email:
              <a href="mailto:info@nandivardhan.com">info@nandivardhan.com</a>
            </p>
            <p>
              Instagram:
              <a href="https://www.instagram.com/@nandivardhann__">
                @nandivardhann__
              </a>
            </p>
          </div>
          <div className="col-span-1 max-w-[20rem] text-white">
            <h3 className="underline text-[2rem] font-primary font-semibold underline-offset-[8px] mb-[3rem] decoration-white/50">
              Ongoing Projects
            </h3>
            <p>
              <a href="/">Mount Casa</a>
            </p>
            <p>
              <a href="/">Fortuna Blue</a>
            </p>
          </div>
          <div className="col-span-1 max-w-[20rem] text-white">
            <h3 className="underline text-[2rem] font-primary font-semibold underline-offset-[8px] mb-[3rem] decoration-white/50">
              Quick Links
            </h3>
            <p>
              <Link href="/faq">FAQ</Link>
            </p>
          </div>
        </div>
        <ul className="text-white list-none gap-2 flex">
          <li>
            <a
              href="/"
              className="flex justify-center items-center border border-white border-solid rounded-full  w-8 h-8"
            >
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex justify-center items-center border border-white border-solid rounded-full  w-8 h-8"
            >
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex justify-center items-center border border-white border-solid rounded-full  w-8 h-8"
            >
              <FaLinkedinIn size={20} />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex justify-center items-center border border-white border-solid rounded-full  w-8 h-8"
            >
              <FaYoutube size={20} />
            </a>
          </li>
        </ul>
        <p className="my-8 text-white">
          This Website/micro-sites are the sole property of Nandivardhan Group.
          The contents of this web-site/micro-site, including but not limited
          to, text, graphics, logos, software, trademarks, plans, drawings,
          amenities, specifications and other information etc., are the property
          of Nandivardhan Group and are protected by law. All the
          information/contents/text/images, including but not limited to the
          photography herein, is the exclusive property of Nandivardhan Group
          and should not be copied, reproduced, published, republished, posted,
          transmitted or distributed in any way without express, advance, and
          written consent.
        </p>
        <hr />
        <p className="text-white mt-6">© Copyright 2024 </p>
      </div>
    </footer>
  );
};
