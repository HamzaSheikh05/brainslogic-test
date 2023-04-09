import React from "react";
import Hero from "../components/Hero";
import Backers from "../components/Backers";
import Game from "../components/Game";
import Characters from "../components/Characters";

export default function Home() {
  return (
    <>
      <Hero />
      <Backers />
      <Game />
      <Characters />
    </>
  );
}
