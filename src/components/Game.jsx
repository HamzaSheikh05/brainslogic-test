import React from "react";
import League from "../assets/LeagueMode.png";
import Tournament from "../assets/Tournament.png";

export default function Game() {
  return (
    <section className="flex flex-col items-center bg-cover-img bg-cover">
      {/** Cyber Arena Container  1*/}
      <div className="flex h-[164px] w-[1280px] flex-col justify-center items-end">
        <h1 className="font-Eremitage font-semibold w-[582px] text-left text-[40px] leading-[48px] text-white">
          Cyber Arena Game modes
        </h1>
        <h4 className="font-Oyko font-normal text-2xl w-[582px] text-[#EAECF0] text-left">
          In the year 2154, a dystopian crypto-powered technology is in full
          force. The human species is locked in a ruthless class system.
        </h4>
      </div>

      {/** Cyber Arena Container  2*/}
      <div className="flex gap-20 w-[1280px] h-[512px] justify-center items-center">
        <img src={League} alt="LeagueMode" className="h-[349px] w-[621px]" />
        <div className="flex flex-col items-start flex-grow gap-10 w-[544px] h-[360px]">
          <div className="flex flex-col items-start gap-5 h-[168px] w-[544px] box-border border-l-4 border-solid border-[#AEFF00] py-4 pr-0 pl-6">
            <h3 className="text-white font-Eremitage font-semibold text-2xl w-[520px] text-left">
              Story mode
            </h3>
            <p className="text-[#EAECF0] font-Oyko font-normal text-[20px] leading-6 text-left w-[520px]">
              Each character has a unique story, play-through experience, and
              gaming life path. Upgrade characters and assist them in realising
              their personal vendettas or liberation goals.
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 h-[152px] w-[544px] py-4 pr-0 pl-6 box-border border-l-4 border-solid border-[#F2F4F7]">
            <h3 className="text-white font-Eremitage font-semibold text-2xl w-[520px] text-left">
              League mode
            </h3>
            <h6 className="font-Oyko font-normal text-[20px] leading-6 text-[#EAECF0] w-[520px] text-left">
              Progress through the league divisions, climb up the ranking
              system, claim exclusive NFTs, tokens, and receive trial rewards at
              the end of each season.
            </h6>
          </div>
        </div>
      </div>

      {/** Cyber Arena Container  3*/}
      <div className="flex flex-col items-start justify-center gap-8 w-[1280px] h-[164px]">
        <h2 className="font-Eremitage font-semibold text-[40px] leading-[48px] text-white w-[582px] text-left">
          Cyber Arena Game modes
        </h2>
        <p className="font-Oyko font-normal text-[#EAECF0] text-2xl w-[582px] text-left">
          The Roman Colosseum in Cyber-Punk style, with thousands fighting to
          death against the cybernetically enhanced people.
        </p>
      </div>

      {/** Cyber Arena Container  4*/}
      <div className="flex w-[1280px] h-[512px] justify-center items-center gap-20">
        <div className="flex flex-col p-0 flex-grow gap-10 w-[544px] h-[328px]">
          <div className="flex flex-col justify-center items-start box-border py-4 pr-0 pl-6 gap-5 h-36 w-[544px] border-l-4 border-solid border-[#AEFF00]">
            <h3 className="font-Eremitage font-semibold text-2xl text-white w-[520px] h-[32px] text-left">
              Tournament mode
            </h3>
            <p className="font-Oyko font-normal text-[20px] leading-6 text-[#EAECF0] w-[520px] h-[72px] text-left">
              Use a tournament ticket and pick various tournament difficulties
              and sizes with up to 128 players. Pick the one that suits you and
              start earning rewards!
            </p>
          </div>

          <div className="flex flex-col items-start justify-center box-border py-4 pr-0 pl-6 gap-5 h-[144px] w-[544px] border-l-4 border-solid border-[#F2F4F7]">
            <h3 className="font-Eremitage font-semibold text-2xl text-white w-[520px] h-[32px] text-left">
              Versus mode
            </h3>
            <p className="font-Oyko font-normal text-[20px] leading-6 text-[#EAECF0] w-[520px] h-[72px] text-left">
              Create your own fight proposal where you set the rules, or accept
              another fighter’s proposal and start duking it out for $CAT
              tokens... Winner takes it all!
            </p>
          </div>
        </div>
        <img
          src={Tournament}
          alt="Tournament Dp"
          className="h-[349px] w-[621px]"
        />
      </div>
    </section>
  );
}
