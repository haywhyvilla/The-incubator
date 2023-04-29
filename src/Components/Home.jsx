import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  return (
    <div class="h-screen w-screen bg-[url('././assets/Images/mobilehero.png')] sm:bg-[url('././assets/Images/Hero-img.png')] bg-cover sm:px-[140px] py-[35px]">
      <div class="flex justify-between items-center mb-[350px] sm:mb-[250px] px-4">
        <div class="sm:hidden">
          <AiOutlineMenu color="#ffffff" size={30} />
        </div>
        <div class="flex justify-center items-center">
          <h4 class="font-['Courier_Prime'] text-white mr-4 font-bold text-2xl">
            the
          </h4>
          <h4 class="font-['Courier_Prime'] text-[#202124] font-bold text-2xl">
            incubator
          </h4>
        </div>
        <div class="sm:hidden">
          <AiOutlineSearch color="#ffffff" size={30} />
        </div>
        <input
          placeholder="Search..."
          class="hidden sm:block h-[40px] w-[280px] font-['Work_Sans'] bg-inherit border-solid border-[1px] border-[#E0E0E0] px-3 placeholder-[#F5F5F5] outline-none text-[#F5F5F5] shadow-[0px_2px_2px_rgba(0,0,0,0.05)]"
        />
      </div>

      <div class="w-[500px] sm:ml-8 pl-6 pr-20 sm:px-0">
        <div class="flex items-center gap-1">
          <div class="w-[9px] h-[9px] bg-[#FFFFFF] border-solid border-[1px] border-[#FFFFFF] transform skew-y-12"></div>
          <div class="w-[9px] h-[9px] border-solid border-[1px] border-[#FFFFFF] transform skew-y-12"></div>
          <div class="w-[9px] h-[9px] border-solid border-[1px] border-[#FFFFFF] transform skew-y-12"></div>
          <div class="w-[9px] h-[9px] border-solid border-[1px] border-[#FFFFFF] transform skew-y-12"></div>
        </div>
        <h1 class="font-['Jost'] text-[#F5F5F5] font-medium sm:font-bold text-3xl sm:text-5xl my-4">
          REMA: STILL DIVINE
        </h1>
        <p class="font-['Work_Sans'] text-[#F5F5F5] font-normal text-base my-3">
          As someone who values loyalty above all else, he will not let himself
          get distracted by anything other than the job at hand. Well, right
          now, all eyes are Still on Divine. And...
        </p>
        <span class="text-[#F5F5F5] font-['Work_Sans'] font-normal text-[14px] mr-2">
          by
        </span>
        <span class="text-[#202124] font-['Work_Sans'] font-normal text-[14px] mr-4">
          Williams Smith
        </span>
        <span class="text-[#F5F5F5] font-['Work_Sans'] font-normal text-[16px] mr-2">
          December 27, 2022
        </span>
        <span class=" bg-[#111111] text-white font-['Work_Sans'] font-normal text-[14px] py-[3px] px-[6px]">
          FEATURED
        </span>
        <div class="my-5">
          <button class="bg-[#111111] h-[36px] py-[6px] px-[16px] text-[#FFFFFF] text-sm font-normal font-['Work_Sans']">
            READ MORE
          </button>
        </div>
      </div>
      <div class="h-[50px] w-[100%] bg-[rgba(32,33,36,0.5)] mt-[100px] justify-between items-center px-[104px] hidden sm:flex">
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          News & Developments
        </a>
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          Pop Culture
        </a>
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          Music & Playlists
        </a>
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          Technology
        </a>
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          Fashion
        </a>
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          Sex
        </a>
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          Business & Entrepreneurship
        </a>
        <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
          Visuals +
        </a>
      </div>
    </div>
  );
};

export default Home;
