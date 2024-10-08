import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const list = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/",
  },
  {
    id: 3,
    name: "Design",
    link: "/",
  },
  {
    id: 4,
    name: "Projects",
    link: "/",
    submenu: [
      {
        id: 1,
        name: "Residential",
        link: "/",
      },
      {
        id: 2,
        name: "Commercial & Retail",
        link: "/",
      },
      {
        id: 3,
        name: "Upcoming Projects",
        link: "/",
      },
      {
        id: 4,
        name: "Ongoing Projects",
        link: "/",
      },
      {
        id: 5,
        name: "Completed Projects",
        link: "/",
      },
    ],
  },
  {
    id: 10,
    name: "Re-Development",
    link: "/",
  },
  {
    id: 5,
    name: "NRI Corner",
    link: "/",
  },
  {
    id: 6,
    name: "HR Corner",
    link: "/",
  },
  {
    id: 7,
    name: "Media",
    link: "/",
  },
  {
    id: 8,
    name: "Blogs",
    link: "/",
  },
  {
    id: 9,
    name: "Contact US",
    link: "/",
  },
];
export const Header = () => {
  const { contextSafe } = useGSAP();
  const [menuOpen, setmenuOpen] = useState(false);
  let container = useRef(null);
  let handleHamburger = contextSafe(() => {
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
    <header className="bg-gradient-to-b z-20 from-black/80 to-transparent  px-4 py-7 flex justify-between items-center fixed w-full">
      <button
        onClick={handleHamburger}
        className="hamburger w-8 h-8 flex flex-col justify-center gap-2 lg:hidden"
      >
        <span className="w-full h-1 bg-white "></span>
        <span className="w-full h-1 bg-white "></span>
        <span className="w-full h-1 bg-white "></span>
      </button>

      <button
        onClick={handleHamburger}
        className="hidden lg:flex flex-col justify-center items-center gap-2 text-[1rem] w-20 h-20 border rounded-full text-white border-white border-solid"
      >
        Menu
      </button>

      <div
        ref={container}
        className={`hamburder-menu px-4 
      fixed top-0 left-0 w-full h-full  bg-white text-black max-w-[40rem] ${
        menuOpen ? " active translate-x-0" : "-translate-x-full"
      } transition-all duration-500`}
      >
        <button
          className="w-8 h-8 fixed top-10 left-4 lg:hidden"
          onClick={handleHamburger}
        >
          <span className="block w-full h-1 bg-black mb-4 rotate-45 translate-y-[0.7rem]"></span>
          <span className="block w-full h-1 bg-black mb-4 -rotate-45 -translate-y-2"></span>
        </button>
        <button
          onClick={handleHamburger}
          className="hidden mt-7 ml-4 lg:flex flex-col justify-center items-center gap-2 text-[1rem] w-20 h-20 border rounded-full text-black border-black border-solid"
        >
          Close
        </button>
        <ul className="pt-20 pl-10 max-h-full overflow-y-auto hide-scrollbar">
          {list.map((item) => (
            <li key={item.id} className="list-item">
              <a
                href={item.link}
                className="flex items-center gap-3 before:content=[''] before:w-6 before:h-1 before:bg-black text-[1.8rem] my-4"
              >
                {item.name}
              </a>
              {item.submenu && <SubMenu item={item} />}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="tel:+910000000000"
        className="flex w-16 h-16 shrink-0 border border-solid border-white rounded-full text-sm justify-center items-center text-white"
      >
        Enquire
      </a>
    </header>
  );
};
const SubMenu = ({ item }) => {
  return (
    <ul className="pl-8">
      {item.submenu.map((subItem) => (
        <li key={subItem.id}>
          <a
            href={subItem.link}
            className="flex items-center gap-3 before:content=[''] before:w-4 before:h-1 before:bg-black text-[1.2rem] my-4"
          >
            {subItem.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
