import React from "react";
import Zinoleesky from "../assets/Images/zinoleesky.png";
import imgone from "../assets/Images/imgone.png";
import imgtwo from "../assets/Images/imgtwo.png";
import imgthree from "../assets/Images/imgthree.png";
import imgfour from "../assets/Images/imgfour.png";
import imgfive from "../assets/Images/imgfive.png";

import { BsFillPlayFill } from "react-icons/bs";

const Aside = () => {
  return (
    <div>
      <h1 class="text-[#111111] font-['Work_Sans'] font-bold text-xl my-6">
        Our Picks
      </h1>
      <div>
        <img src={Zinoleesky} alt="zinoleesky" class="w-[100%]" />
        <button class="bg-[#111111] text-white font-['Work_Sans'] font-normal text-xs px-[6px] py-[3px] my-4">
          FEATURED
        </button>
        <h4 class="mb-[8px] font-['Jost'] font-bold text-base">
          On “Call Of Duty,” Zinoleesky sticks to his guns, but is change
          inevitable?
        </h4>
        <span class="text-[ #808080] font-['Work_Sans'] font-normal text-[14px] mr-2">
          by
        </span>
        <span class="text-[#111111] font-['Work_Sans'] font-normal text-[14px] mr-4">
          Patrick Ezema
        </span>
        <span class="text-[#808080] font-['Work_Sans'] font-normal text-[16px] mr-2">
          December 27, 2022
        </span>
        <h4 class="font-['Work_Sans'] font-normal text-base text-[#333333] mt-2 mb-8">
          Zinoleesky's Call of duty sounds so similar to <br />
          what he's known for, a merging...
        </h4>
      </div>
      <div class="py-8 pr-16">
        <div class="flex gap-3">
          <BsFillPlayFill size={32} />
          <h4 class="text-[#111111] font-['Jost'] font-bold text-base mb-8">
            Free The Youth – The Ghanaian Fashion Brand Building a Community
            With a Purpose
          </h4>
        </div>
        <div class="flex gap-3">
          <BsFillPlayFill size={26} />
          <h4 class="text-[#111111] font-['Jost'] font-bold text-base mb-8">
            Nigeria’s Alté Is Going Mainstream, <br />
            In Its Own Way
          </h4>
        </div>
        <div class="flex gap-3">
          <BsFillPlayFill size={32} />
          <h4 class="text-[#111111] font-['Jost'] font-bold text-base mb-8">
            History was made – Fola Francis becomes the first trans model to
            walk Lagos Fashion Week
          </h4>
        </div>
        <div class="flex justify-center items-center mb-8">
          <button class="border-solid border-[1px] border-[#E0E0E0] px-16 py-2 rounded-sm text-[#212121] font-normal text-xs font-['Work_Sans']">
            LOAD MORE
          </button>
        </div>
        <div>
          <div class="flex justify-center items-center gap-6 my-8">
            <img src={imgone} alt="imgone" />
            <div>
              <h3 className="text-[#111111] font-['Jost'] font-medium text-sm mb-3">
                The Orchard in partnership with ‘MBA For Africa’ spotlights 8
                Afro-influenced future stars through its 2022 talent album.
              </h3>
              <p class="text-[#808080] font-['Work_Sans'] font-normal text-xs uppercase">
                November 22, 2022
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center gap-6 my-8">
            <img src={imgtwo} alt="imgtwo" />
            <div>
              <h3 className="text-[#111111] font-['Jost'] font-medium text-sm mb-3">
                Do All Kinks Matter?… Some of These Might Not
              </h3>
              <p class="text-[#808080] font-['Work_Sans'] font-normal text-xs uppercase">
                April 24, 2022
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center gap-6 my-8">
            <img src={imgthree} alt="imgthree" />
            <div>
              <h3 className="text-[#111111] font-['Jost'] font-medium text-sm mb-3">
                #MarijuanaTimes: What happens when you smoke your first joint?
              </h3>
              <p class="text-[#808080] font-['Work_Sans'] font-normal text-xs uppercase">
                April 24, 2022
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center gap-6 my-8">
            <img src={imgfour} alt="imgfour" />
            <div>
              <h3 className="text-[#111111] font-['Jost'] font-medium text-sm mb-3">
                The 10 Best Nigerian Albums of 2022
              </h3>
              <p class="text-[#808080] font-['Work_Sans'] font-normal text-xs uppercase">
                April 24, 2022
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center gap-6 my-8">
            <img src={imgfive} alt="imgfive" />
            <div>
              <h3 className="text-[#111111] font-['Jost'] font-medium text-sm mb-3">
                Following the “Post-19” Listening Event, Ibejii’s “Blown” is
                out. Listen here
              </h3>
              <p class="text-[#808080] font-['Work_Sans'] font-normal text-xs uppercase">
                April 24, 2022
              </p>
            </div>
          </div>
        </div>
        <h1 class="text-[#111111] font-['Work_Sans'] font-bold text-xl mb-6">
          Around the World
        </h1>
        <button class="w-full bg-[#FAFAFA] py-5 text-[#333333] font-['Work_Sans'] font-normal text-sm">
          No Content Available
        </button>
      </div>
    </div>
  );
};

export default Aside;
