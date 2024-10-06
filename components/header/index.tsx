"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { GSAP } from "./gsap";
// import Link from "next/link";
gsap.registerPlugin(useGSAP);

interface menuList {
  id: number;
  name: string;
  link: string;
  submenu?: menuList[];
}
interface HeaderProps {
  menuList: menuList[];
}
interface SubMenuProps {
  item: menuList;
}
export const Header = ({ menuList }: HeaderProps) => {
  const { contextSafe } = useGSAP();
  const [menuOpen, setmenuOpen] = useState(false);
  const container = useRef(null);
  const handleHamburger = contextSafe(() => {
    setmenuOpen(!menuOpen);
    if (menuOpen) return;
    gsap.from(".list-item ", {
      duration: 0.5,
      opacity: 0,
      y: 100,
      stagger: 0.2,
    });
  });
  return (
    <>
      <header className=" header px-4  flex justify-between items-center fixed w-full z-20 bg-gradient-to-b from-black/50">
        <GSAP />
        <a href="/" className="flex w-28 md:w-40 lg:w-48 ">
          <Image
            src="/image/nandivardhan-logo.png"
            alt="logo"
            className="w-full"
            width={100}
            height={200}
          />
        </a>
        <button
          onClick={handleHamburger}
          className="hamburger w-8 h-8 flex flex-col justify-center gap-2"
        >
          <span className="w-full h-1 bg-white  "></span>
          <span className="w-full h-1 bg-white  "></span>
          <span className="w-full h-1 bg-white  "></span>
        </button>
      </header>
      <div
        ref={container}
        className={`hamburder-menu px-4 flex-col flex  z-[21]
      fixed top-0 left-0 w-full h-full  bg-white text-black max-w-[40rem] ${
        menuOpen ? " active translate-x-0" : "-translate-x-full"
      } transition-all duration-500`}
      >
        <button
          className="w-8 h-8 fixed top-10 left-4 lg:hidden shrink-0"
          onClick={handleHamburger}
        >
          <span className="block w-full h-1 bg-black mb-4 rotate-45 translate-y-[0.7rem]"></span>
          <span className="block w-full h-1 bg-black mb-4 -rotate-45 -translate-y-2"></span>
        </button>
        <button
          onClick={handleHamburger}
          className="hidden shrink-0 mt-7 ml-4 lg:flex flex-col justify-center items-center gap-2 text-[1rem] w-20 h-20 border rounded-full text-black border-black border-solid"
        >
          Close
        </button>
        <ul className="pt-10 pl-10 max-h-full overflow-y-auto hide-scrollbar ">
          {menuList.map((item) => (
            <li key={item.id} className="list-item">
              <a
                href={item.link}
                className="flex items-center gap-3 text-[1.8rem] my-4"
                onClick={handleHamburger}
              >
                {item.name}
              </a>
              {item.submenu && <SubMenu item={item} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const SubMenu = ({ item }: SubMenuProps) => {
  return (
    <ul className="pl-8">
      {item?.submenu?.map((subItem) => (
        <li key={subItem.id}>
          <a
            href={subItem.link}
            className="flex items-center gap-3   before:bg-black text-[1.2rem] my-4"
          >
            {subItem.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
