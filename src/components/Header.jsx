import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitter, BsTelegram } from "react-icons/bs";
import { RiDiscordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-navigation">
      <nav className="flex box-border justify-center items-center gap-4 h-20 border-b-[1px] border-[#F2F4F7] border-solid">
        <ul className="flex gap-10 text-white font-Eremitage text-[16px] items-center leading-6 font-bold">
          <img src={Logo} alt="logo svg" className="h-8" />
          <li className="text-[#aeff00]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Manifesto</li>
          <li>$CAT token</li>
          <li>About</li>
          <li>Whitepaper</li>
          <li>Staking</li>
        </ul>
        <button className="text-[#E7FFB3] flex border-[#E7FFB3] border-[1px] rounded-xl p-1 text-[10px]">
          Coming Soon
        </button>
        <div className="flex gap-3 ml-20">
          <BsTwitter className="text-white h-5 w-6" />
          <RiDiscordFill className="text-white h-5 w-6" />
          <BsTelegram className="text-white h-5 w-6" />
        </div>
      </nav>
    </header>
  );
}
