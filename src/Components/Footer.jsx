import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div class="bg-[#0B0B0B] text-white w-full mx-auto md:px-16">
      <div class="container mx-auto md:px-[150px] px-5 py-24 flex md:justify-between items-start flex-wrap gap-5">
        <div class="flex justify-center items-center">
          <h4 class="font-['Courier_Prime'] text-white mr-4 font-bold text-2xl">
            the
          </h4>
          <h4 class="font-['Courier_Prime'] text-[#707174] font-bold text-2xl">
            incubator
          </h4>
        </div>
        <div class="flex flex-col gap-[30px] sm:w-[15%] mt-6 md:mt-0">
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            About
          </a>
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            Magazine
          </a>
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            Stockists
          </a>
        </div>
        <div class="flex flex-col gap-[30px] sm:w-[15%] mt-6 md:mt-0">
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            Music
          </a>
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            Communities
          </a>
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            Best new music
          </a>
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            Featured
          </a>
          <a class="uppercase text-white font-light text-base font-['Work_Sans']">
            The Shuffle
          </a>
        </div>
        <div class="flex flex-col gap-[30px] sm:w-[15%] mt-6 md:mt-0">
          <a class="text-white font-light text-base font-['Work_Sans']">
            contact@theincubator.com
          </a>
          <h3 class="font-bold text-2xl font-['Jost'] mt-6">Subscribe</h3>
          <p class="font-['Work_Sans'] font-light text-base">
            Weekly updates on music, style, culture and much more.
          </p>
          <div class="hidden sm:flex justify-start items-center">
            <input class="h-[58.95px] bg-[#1E1E1E]" />
            <button class="flex justify-center items-center h-[58.95px] bg-[#1E1E1E] px-3 outline-0">
              Submit
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
