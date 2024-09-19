import React from "react";

export const Projects = () => {
  return (
    <div className="project-list grid gap-4 ">
      <div className="project-item relative h-[70vh] text-white flex items-center justify-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/manasarovar.jpg"
          alt=""
        />
        <h3>Manasarovar</h3>
        <div className="hover summary">
          <p>
            An elegant and Luxurious 31 storey tower, featuring high-quality 4
            &amp; 5 bedroom suites that will benefit from extraordinary views
            across the city center with a wide range of state of art amenities
            perfect for luxury city-centre living and ready to move in.
          </p>
          <a href="/location" class="small-caps-link white">
            Discover more
          </a>
        </div>
      </div>
      <div className="project-item relative h-[70vh] text-white flex items-center justify-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/manasarovar.jpg"
          alt=""
        />
        <h3>Parkway</h3>
        <div class="hover summary">
          <p>
            Since the time you walked to school, picnicked at your favourite
            park, and played your heart out on the streets, Matunga’s dynamism
            and development have witnessed a growth.
          </p>
          <a href="/location" class="small-caps-link white">
            Discover more
          </a>
        </div>
      </div>
      <div className="project-item relative h-[70vh] text-white flex items-center justify-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/manasarovar.jpg"
          alt=""
        />
        <h3>Nandivardhan Group</h3>
        <div class="hover summary">
          <p>
            The Nandivardhan Group has been the architect of numerous luxury
            projects in Mumbai and has made a name for itself by always standing
            firm to its commitment of delivering nothing but the best.
          </p>
          <a href="/location" class="small-caps-link white">
            Discover more
          </a>
        </div>
      </div>
      <div className="project-item relative h-[70vh] text-white flex items-center justify-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/manasarovar.jpg"
          alt=""
        />
        <h3>Fortuna</h3>
        <div class="hover summary">
          <p>
            Some aspire for a central location, some desire comfort living.
            Fortuna Blue is a unique blend of connectivity and exclusivity, that
            welcomes you to experience the perks of a good life, in your own
            thoughtfully-designed homes with ultra-modern features.
          </p>
          <a href="/location" class="small-caps-link white">
            Discover more
          </a>
        </div>
      </div>
      <div className="project-item relative h-[70vh] text-white flex items-center justify-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-[1]"
          src="/public/image/manasarovar.jpg"
          alt=""
        />
        <h3>Mount Casa</h3>
        <div class="hover summary">
          <p>
            This iconic tower boasts 22 storey, with an urban experience of life
            planned arround you, grand 1 & 2 bhks apartments & large 3 bhks with
            sun decks & natural light at mount casa come and unwind in the
            privacy of your own homes
          </p>
          <a href="/location" class="small-caps-link white">
            Discover more
          </a>
        </div>
      </div>
    </div>
  );
};
