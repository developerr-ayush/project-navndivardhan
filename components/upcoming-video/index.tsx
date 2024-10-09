import React from "react";

export const UpcomingVideo = () => {
  return (
    <div className="w-full">
      <iframe
        width="100%"
        className="aspect-video"
        src="https://www.youtube.com/embed/oNB5rzAbAZo?si=CCMfbXe6o-8wAWPY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
