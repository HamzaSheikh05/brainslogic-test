import React from "react";
import { FiPlayCircle } from "react-icons/fi";
export default function Home() {
  return (
    <div className="flex h-[812px] bg-video-img bg-cover bg-no-repeat box-border items-end py-8">
      <div className="flex flex-col justify-center items-start px-8 gap-6 w-[1280px] h-[252px]">
        <h2 className="text-white text-left font-Eremitage font-semibold text-[40px] leading-[48px] w-[640px] h-24">
          World’s first interactive battle metaverse powered by Web3
        </h2>
        <h6 className="text-white w-[640px] h-12 font-Oyko font-normal text-[20px] leading-6 text-left">
          Embody your favourite crypto hero or a villain and fight it out for
          ultimate victory. Let the strongest win!
        </h6>
        <div className="flex flex-row gap-3 items-start">
          <button className="box-border flex flex-row justify-center items-center py-4 px-7 w-[188px] h-[60px] rounded-[32px] bg-[#000500] border-2 border-solid border-[#AEFF00] shadow-sm shadow-[#1018280D] text-[#AEFF00] gap-3 font-Oyko">
            <FiPlayCircle />
            VIEW DEMO
          </button>
          <button className="flex flex-row justify-center items-center py-7 px-4 gap-3 w-[188px] h-[60px] bg-[#AEFF00] font-normal font-Oyko text-lg text-black rounded-[32px] shadow-sm shadow-[#101828]">
            JOIN THE FIGHT
          </button>
        </div>
      </div>
    </div>
  );
}
