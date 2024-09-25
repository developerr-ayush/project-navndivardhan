import gsap from "gsap";
import React, { useEffect } from "react";

export const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    gsap.to(loader, {
      autoAlpha: 0,
      duration: 1,
      delay: 2,
      onComplete: () => {
        loader.style.display = "none";
      },
    });
  }),
    [];
  return (
    <div className="loader fixed inset-0 bg-white z-20 flex items-center justify-center">
      <img className="w-[40vw] max-w-[20rem]" src="/image/nv-logo.gif" alt="" />
    </div>
  );
};
