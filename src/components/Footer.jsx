import React from "react";

export const Footer = () => {
  return (
    <footer className="p-10 bg-black text-[#84754e]">
      <ul>
        <li className="mb-10">
          <p className="text-[1.2rem]">Visit</p>
          <a className="text-[1.4rem] font-medium" href="">
            2403 A Wing, Marathon Futurex N M Joshi Marg, Lower Parel, Mumbai,
            Maharashtra 400013
          </a>
        </li>
        <li className="mb-2">
          <p className="text-[1.2rem]">Call:</p>
          <a className="text-[1.4rem] font-medium" href="tel:02269038383">
            022 690 383 83
          </a>
        </li>
        <li className="mb-2">
          <p className="text-[1.2rem]">Email: </p>
          <a
            className="text-[1.4rem] font-medium"
            href="mailto:Info@nandivardhan.com"
          >
            Info@nandivardhan.com
          </a>
        </li>
        <li className="mb-2">
          <p className="text-[1.2rem]">Instagram: </p>
          <a
            className="text-[1.4rem] font-medium"
            target="_blank"
            href="https://www.instagram.com/nandivardhan__/"
          >
            @nandivardhan__
          </a>
        </li>
      </ul>
      <div className="copyright mt-10 text-[1.4rem] ">© 2024 Nandivardhan</div>
    </footer>
  );
};
