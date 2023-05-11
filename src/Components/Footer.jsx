import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div class="bg-[#0B0B0B] text-white w-full mx-auto md:px-16">
      <div class="container mx-auto md:px-[150px] px-5 py-12">
        <div class="flex justify-center items-center">
          <h4 class="font-['Courier_Prime'] text-white mr-4 font-bold text-2xl">
            the
          </h4>
          <h4 class="font-['Courier_Prime'] text-[#707174] font-bold text-2xl">
            incubator
          </h4>
        </div>
        <div class="flex justify-center items-center gap-3 sm:gap-[30px] mt-6">
          <a class="uppercase text-white font-light text-xs sm:text-base font-['Work_Sans']">
            Stories
          </a>
          <a class="uppercase text-white font-light text-xs sm:text-base font-['Work_Sans']">
            Projects
          </a>
          <a class="uppercase text-white font-light text-xs sm:text-base font-['Work_Sans']">
            Gatherings
          </a>
          <a class="uppercase text-white font-light text-xs sm:text-base font-['Work_Sans']">
            Trips
          </a>
          <a class="uppercase text-white font-light text-xs sm:text-base font-['Work_Sans']">
            Shop
          </a>
          <a class="uppercase text-white font-light text-xs sm:text-base font-['Work_Sans']">
            Playlists
          </a>
        </div>

        <div class="flex justify-center items-center flex-col gap-[30px] mt-6 md:mt-0">
          <a class="text-white font-light text-base font-['Work_Sans']">
            © 2023 The Incubator. All Rights Reserved.
          </a>
          <h3 class="font-bold text-2xl font-['Jost'] mt-6">Subscribe</h3>

          <div class="flex justify-start items-center">
            <input class="h-8 sm:h-[58.95px] bg-[#1E1E1E] outline-none" />
            <button class="flex justify-center items-center h-8 sm:h-[58.95px] bg-[#1E1E1E] px-3 outline-0">
              Submit
              <BsArrowRight />
            </button>
          </div>
          <p class="font-['Work_Sans'] font-light text-xs xl:px-60 text-center">
            Use of this site constitutes the acceptance of our user agreement
            and privacy policy. The materials on this site may not be
            reproduced, distributed, transmitted, cached or otherwise used,
            except with prior written permission of The Incubator.
          </p>

          <div class="flex justify-between items-center gap-8">
            <a
              class="bg-[rgba(32,33,36,0.5)] p-2 rounded-full"
              href="https://twitter.com/theincubatorhq"
            >
              <AiOutlineTwitter size={20} />
            </a>
            <a
              class="bg-[rgba(32,33,36,0.5)] p-2 rounded-full"
              href="https://www.instagram.com/theincubatorhq/"
            >
              <AiOutlineInstagram size={20} />
            </a>
            <a
              class="bg-[rgba(32,33,36,0.5)] p-2 rounded-full"
              href="mailto:weare@theincuba8or.com"
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
