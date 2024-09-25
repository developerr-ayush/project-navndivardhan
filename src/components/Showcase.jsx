import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

export const Showcase = () => {
  useGSAP(() => {
    gsap.from(".scrolldown", { y: 20, duration: 1, repeat: -1, yoyo: true });
    gsap.from(".showcase-revel", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
      y: 30,
      delay: 2,
    });
  });
  return (
    <div className="bg-black relative isolate text-white min-h-dvh text-center py-32 flex-col flex justify-center">
      <img
        src="/image/nandivardhan-logo.png"
        className="showcase-revel block w-[70%] max-w-[30rem] mx-auto"
        alt="nandivardhan"
      />
      <h2 className="showcase-heading flex flex-col mt-10 text-[7vw] lg:text-[5vw]">
        <span className="showcase-revel">Crafting India's Finest</span>
        <span className="showcase-revel"> Real Estate Experiences</span>
      </h2>
      <div className="overlay bg-black/40 absolute -z-[1] inset-0"></div>
      <video
        src="/video/banner-video.webm"
        className="absolute inset-0 -z-[2] w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
      ></video>
      <button
        onClick={() => window.scrollTo(0, window.innerHeight)}
        className="scrolldown w-max absolute bottom-24 inset-x-0 mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="25.612"
          height="29.291"
          viewBox="0 0 25.612 29.291"
        >
          <defs>
            <clipPath id="clip-path">
              <path
                id="Path_3"
                data-name="Path 3"
                d="M0-22.873H25.612V-52.164H0Z"
                transform="translate(0 52.164)"
                fill="#fff"
              />
            </clipPath>
          </defs>
          <g id="Group_4" data-name="Group 4" transform="translate(0 52.164)">
            <g
              id="Group_3"
              data-name="Group 3"
              transform="translate(0 -52.164)"
              clipPath="url(#clip-path)"
            >
              <g id="Group_1" data-name="Group 1" transform="translate(0 0)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M-10.055-13.481A68.439,68.439,0,0,1,2.68-30.461v-.283A66.692,66.692,0,0,0-10.126-21.9a66.692,66.692,0,0,0-12.806-8.844v.283A68.439,68.439,0,0,1-10.2-13.481Z"
                  transform="translate(22.932 30.744)"
                  fill="#fff"
                />
              </g>
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(0 12.028)"
              >
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M-10.055-13.481A68.439,68.439,0,0,1,2.68-30.461v-.283A66.692,66.692,0,0,0-10.126-21.9a66.692,66.692,0,0,0-12.806-8.844v.283A68.439,68.439,0,0,1-10.2-13.481Z"
                  transform="translate(22.932 30.744)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};
