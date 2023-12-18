'use client'
import { useRouter } from "next/navigation";
import React from "react";

export const SliderFlipPage = ({ button, video }) => {
  const handleVideoClick = (event) => {
    event.stopPropagation();
  };
  const { push } = useRouter();

  return (
    <div className="m-4 flex justify-around items-center flex-col  max-h-5/6">
      <video
      onClick={handleVideoClick}
        src={video}
        autoPlay
        controls
        muted
        playsInline
        loop
        className="max-h-2/6 bg-black"
      />
      <button
        class="animated-button mt-5"
        onClick={() => push("https://wa.link/p4nz3l")}
      >
        <svg
          viewBox="0 0 24 24"
          class="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span class="text">{button}</span>
        <span class="circle"></span>
        <svg
          viewBox="0 0 24 24"
          class="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </div>
  );
};
