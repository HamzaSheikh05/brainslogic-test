import React from "react";
import DaoLogo from "../assets/DaoLogo.png";
import DogeChain from "../assets/Dogechain.png";
import GameFi from "../assets/Gamefi.png";
import LDA from "../assets/LDA.png";
export default function Backers() {
  return (
    <section className="flex flex-row justify-center items-center py-12 bg-navigation h-[216px]">
      <div className="flex flex-col py-0 px-8 gap-8 h-[120px]">
        <h4 className="font-Oyko font-normal text-2xl text-[#EAECF0] text-center h-8">
          Cyber Arena is powered by Imperium Games and supported by:
        </h4>
        <div className="flex flex-row justify-between items-center gap-40 h-14">
          <img src={DaoLogo} alt="DAO" className="w-[254px] h-14" />
          <img src={DogeChain} alt="DogeChain" className="W-[254px] h-14" />
          <img src={GameFi} alt="GameFi" className="w-[254px] h-14" />
          <img src={LDA} alt="LDA" className="w-[254px] h-14" />
        </div>
      </div>
    </section>
  );
}
