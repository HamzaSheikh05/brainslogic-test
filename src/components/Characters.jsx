import React from "react";

export default function Characters() {
  return (
    <section className="flex bg-navigation justify-center">
      <div className="flex flex-row justify-between items-start p-0 gap-8 w-[1504px] h-[100px]">
        <div className="flex flex-col items-start gap-5 w-[768px] h-[100px]">
          <h1 className="font-Eremitage font-semibold text-[40px] leading-[48px] text-white h-12 w-[768px] text-left">
            Real time multiplayer fighters
          </h1>
          <h4 className="font-Oyko font-normal text-2xl text-[#EAECF0] h-8 w-[768px] text-left">
            Join the fight and pick one of the top fighters in Cyber Arena.
          </h4>
        </div>
        <button className="flex justify-center items-center py-4 px-7 w-[185px] h-[60px] bg-[#AEFF00] text-black shadow-sm shadow-[#101828] rounded-[32px]">
          JOIN THE FIGHT
        </button>
      </div>

      <div className="flex flex-col items-start gap-16 h-[600px]"></div>
    </section>
  );
}
