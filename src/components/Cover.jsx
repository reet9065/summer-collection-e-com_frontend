import React from "react";
import CoverImage from "../assets/cover.jpg";

const btns = [
  {
    value: "Shop Collections",
    scrollTo: "#",
    bg: true,
  },
  {
    value: "New Arrivels",
    scrollTo: "#",
    bg: false,
  },
];

function Cover() {
  return (
    <div
      className="w-full h-svh bg-cover bg-center flex justify-center items-center text-center flex-col"
       style={{ backgroundImage: `url(${CoverImage})` }}
    >
      <h1 className="text-white sm:text-8xl text-4xl font-bold">Summer Collection 2025</h1>
      <p className="sm:text-3xl text-xl text-white mt-4 w-[70%]">Dive into summer with our vibrant collection of beachwear, sundresses, and accessories. Feel the warmth, embrace the style.</p>
      <div id="butns" className="flex justify-center items-center gap-6 mt-8">
        {btns.map((btn) => (
          <button className={`hover:scale-110 duration-300 ease-in-out cursor-pointer rounded-xl p-3 px-5 ${btn.bg?'bg-black text-white' : 'text-black'} font-bold border-2 border-black`}>{btn.value}</button>
        ))}
      </div>
    </div>
  );
}

export default Cover;
