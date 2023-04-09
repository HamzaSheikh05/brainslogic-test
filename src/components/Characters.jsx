import React, { useState } from "react";
import { items } from "../database/item";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
export default function Characters() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === items.length - 1 ? 0 : prevSlide + 1
    );
  };

  const onPrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? items.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="flex flex-col items-center bg-[#000500] justify-center">
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

      <div className="flex flex-col items-start justify-center gap-16 h-[600px] w-[1504px]">
        <div className="flex items-center justify-center gap-4">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={`character ${index}`}
              className={`w-[240px] h-[320px] ${
                currentSlide === index ? "border-4 border-blue-300" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/** Navigation Buttons */}
        <div className="flex items-start justify-between gap-8">
          <BsArrowLeftSquare
            className="text-[#AEFF00] w-14 h-14"
            onClick={onPrev}
          />
          <BsArrowRightSquare
            className="text-[#AEFF00] w-14 h-14"
            onClick={onNext}
          />
        </div>
      </div>
    </section>
  );
}
