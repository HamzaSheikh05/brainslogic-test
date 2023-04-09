import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import DaoLogo from "../assets/DaoLogo.png";
import DogeChain from "../assets/Dogechain.png";
import GameFi from "../assets/Gamefi.png";
import LDA from "../assets/LDA.png";
export default function Home() {
  return (
    <>
      <section className="flex h-[812px] bg-video-img bg-cover bg-no-repeat box-border items-end pb-36">
        <div className="flex flex-col justify-center items-start px-8 gap-6 h-[252px]">
          <h2 className="text-white text-left font-Eremitage font-semibold text-[40px] leading-[48px] w-[640px] h-24">
            World’s first interactive battle metaverse powered by Web3
          </h2>
          <h6 className="text-white w-[640px] h-12 font-Oyko font-normal text-[20px] leading-6 text-left">
            Embody your favourite crypto hero or a villain and fight it out for
            ultimate victory. Let the strongest win!
          </h6>
          <div className="flex flex-row gap-3 items-start w-[385px] h-16">
            <button className="box-border flex flex-row justify-center items-center py-4 px-7 w-[188px] h-[60px] rounded-[32px] bg-[#000500] border-2 border-solid border-[#AEFF00] shadow-sm shadow-[#1018280D] text-[#AEFF00] gap-3 font-Oyko">
              <FiPlayCircle />
              VIEW DEMO
            </button>
            <button className="flex flex-row justify-center items-center py-7 px-4 gap-3 w-[188px] h-[60px] bg-[#AEFF00] font-normal font-Oyko text-lg text-black rounded-[32px] shadow-sm shadow-[#101828]">
              JOIN THE FIGHT
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-row justify-center items-center py-12 bg-navigation h-[216px]">
        <div className="flex flex-col py-0 px-8 gap-8 h-[120px]">
          <h4 className="font-Oyko font-normal text-2xl text-[#EAECF0] text-center h-8">
            Cyber Arena is powered by Imperium Games and supported by:
          </h4>
          <div className="flex flex-row justify-between items-center gap-12 h-14">
            <img src={DaoLogo} alt="DAO" className="w-[254px] h-14" />
            <img src={DogeChain} alt="DogeChain" className="W-[254px] h-14" />
            <img src={GameFi} alt="GameFi" className="w-[254px] h-14" />
            <img src={LDA} alt="LDA" className="w-[254px] h-14" />
          </div>
        </div>
      </section>

      <section className="flex bg-cover-img justify-center">
        <div className="flex h-[164px] w-[1280px] flex-col items-end justify-center">
          <h1 className="font-Eremitage font-semibold w-[582px] text-left text-[40px] leading-[48px] text-white">
            Cyber Arena Game modes
          </h1>
          <h4 className="font-Oyko font-normal text-2xl w-[582px] text-[#EAECF0] text-left">
            In the year 2154, a dystopian crypto-powered technology is in full
            force. The human species is locked in a ruthless class system.
          </h4>
        </div>

        <div className="flex"></div>

        <div className="flex"></div>
        <div className="flex"></div>
      </section>
    </>
  );
}
