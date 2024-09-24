import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export const Projects = () => {
  return (
    <div className="project-list grid gap-4 md:grid-cols-2 lg:grid-cols-12 ">
      <div className="group project-item md:col-span-8 relative h-[70vh] text-white flex items-center justify-center overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/manasarovar.jpg"
          alt=""
        />
        <div className="overlay absolute inset-0 bg-black/50 -z-[1]"></div>
        <h3 className="text-[10vw] md:text-[3vw] group-hover:opacity-0 transition-all">
          Manasarovar
        </h3>
        <div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all hover summary absolute inset-0  flex flex-col justify-end p-5 translate-y-20 opacity-0 lg:p-[3rem]">
          <p className="text-[1.4rem] mb-4 lg:text-[2rem]">
            An elegant and Luxurious 31 storey tower, featuring high-quality 4
            &amp; 5 bedroom suites that will benefit from extraordinary views
            across the city center with a wide range of state of art amenities
            perfect for luxury city-centre living and ready to move in.
          </p>
          <a
            href="/location"
            className="small-caps-link white text-[1.2rem] tracking-widest uppercase flex gap-2 items-center lg:text-[1.4rem]"
          >
            Discover more
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="group project-item md:col-span-4 relative h-[70vh] text-white flex items-center justify-center overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/parkway.jpg"
          alt=""
        />
        <div className="overlay absolute inset-0 bg-black/50 -z-[1]"></div>
        <h3 className="text-[10vw] md:text-[3vw] group-hover:opacity-0 transition-all">
          Parkway
        </h3>
        <div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all hover summary absolute inset-0  flex flex-col justify-end p-5 translate-y-20 opacity-0 lg:p-[3rem]">
          <p className="text-[1.4rem] mb-4 lg:text-[2rem]">
            Since the time you walked to school, picnicked at your favourite
            park, and played your heart out on the streets, Matunga’s dynamism
            and development have witnessed a growth.
          </p>
          <a
            href="/location"
            className="small-caps-link white text-[1.2rem] tracking-widest uppercase flex gap-2 items-center lg:text-[1.4rem]"
          >
            Discover more
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="group project-item md:col-span-12 relative h-[70vh] text-white flex items-center justify-center overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/reception.jpg"
          alt=""
        />
        <div className="overlay absolute inset-0 bg-black/50 -z-[1]"></div>
        <h3 className="text-[10vw] md:text-[3vw] group-hover:opacity-0 transition-all">
          Nandivardhan Group
        </h3>
        <div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all hover summary absolute inset-0  flex flex-col justify-end p-5 translate-y-20 opacity-0 lg:p-[3rem]">
          <p className="text-[1.4rem] mb-4 lg:text-[2rem]">
            The Nandivardhan Group has been the architect of numerous luxury
            projects in Mumbai and has made a name for itself by always standing
            firm to its commitment of delivering nothing but the best.
          </p>
          <a
            href="/location"
            className="small-caps-link white text-[1.2rem] tracking-widest uppercase flex gap-2 items-center lg:text-[1.4rem]"
          >
            Discover more
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="group project-item md:col-span-6 relative h-[70vh] text-white flex items-center justify-center overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/fortuna.jpg"
          alt=""
        />
        <div className="overlay absolute inset-0 bg-black/50 -z-[1]"></div>
        <h3 className="text-[10vw] md:text-[3vw] group-hover:opacity-0 transition-all">
          Fortuna
        </h3>
        <div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all hover summary absolute inset-0  flex flex-col justify-end p-5 translate-y-20 opacity-0 lg:p-[3rem]">
          <p className="text-[1.4rem] mb-4 lg:text-[2rem]">
            Some aspire for a central location, some desire comfort living.
            Fortuna Blue is a unique blend of connectivity and exclusivity, that
            welcomes you to experience the perks of a good life, in your own
            thoughtfully-designed homes with ultra-modern features.
          </p>
          <a
            href="/location"
            className="small-caps-link white text-[1.2rem] tracking-widest uppercase flex gap-2 items-center lg:text-[1.4rem]"
          >
            Discover more
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="group project-item md:col-span-6 relative h-[70vh] text-white flex items-center justify-center overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/mountcasa.jpg"
          alt=""
        />
        <div className="overlay absolute inset-0 bg-black/50 -z-[1]"></div>
        <h3 className="text-[10vw] md:text-[3vw] group-hover:opacity-0 transition-all">
          Mount Casa
        </h3>
        <div className="group-hover:opacity-100 group-hover:translate-y-0 transition-all hover summary absolute inset-0  flex flex-col justify-end p-5 translate-y-20 opacity-0 lg:p-[3rem]">
          <p className="text-[1.4rem] mb-4 lg:text-[2rem]">
            This iconic tower boasts 22 storey, with an urban experience of life
            planned arround you, grand 1 & 2 bhks apartments & large 3 bhks with
            sun decks & natural light at mount casa come and unwind in the
            privacy of your own homes
          </p>
          <a
            href="/location"
            className="small-caps-link white text-[1.2rem] tracking-widest uppercase flex gap-2 items-center lg:text-[1.4rem]"
          >
            Discover more
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};
