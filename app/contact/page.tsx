import React from "react";
import { Hero } from "@/components/hero";
import { Contact } from "@/components/contact";
import { Address } from "@/components/address";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

export default function contact() {
  return (
    <div>
      <Hero img="/image/contact.jpeg" />
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-2 mx-auto px-6 py-20 gap-10">
          <Contact />
          <div className="mt-8">
            <p className="text-[1.8rem] leading-none font-semibold timeline-desc">
              Connect With Us
            </p>
            <p className="mb-2">
              <b>Address:</b> 2403 A Wing, Marathon Futurex, N.M. Joshi Marg,
              Lower Parel, Mumbai 400013
            </p>
            <p className="flex gap-2 items-center">
              <FaPhone /> <a href="tel:+9102269038383 ">022 69038383 </a>
            </p>
            <p className="flex gap-2 items-center">
              <FaEnvelope />
              <a href="mailto:info@nandivardhan.com">info@nandivardhan.com</a>
            </p>
            <p className="mt-8 text-[1.8rem] leading-none font-semibold timeline-desc">
              Follow Us on
            </p>
            <div className="flex  mt-6">
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
        </div>
      </div>
      <Address />
    </div>
  );
}
