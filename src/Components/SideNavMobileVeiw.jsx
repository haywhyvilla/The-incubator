import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const SideNavMobileVeiw = () => {
  const [expandStories, setExpandStories] = useState(false);

  const handleExpandClick = () => {
    setExpandStories(!expandStories);
  };

  return (
    <div class="md:hidden absolute h-screen top-20 z-10">
      <div
        class="mt-8 w-[275px] h-[65%] py-2 px-9 absolute bg-[rgba(32,33,36,0.5)]"
        id="bg"
      >
        <div class="flex justify-start items-center">
          <h4 class="font-['Courier_Prime'] text-white mr-2 font-bold text-lg">
            the
          </h4>
          <h4 class="font-['Courier_Prime'] text-[#202124] font-bold text-lg">
            incubator
          </h4>
        </div>
        <div>
          <ul class="my-10">
            <li
              class="text-[#F5F5F5] font-medium text-base mb-9 font-['Jost'] flex"
              onClick={handleExpandClick}
            >
              Stories
              {expandStories ? (
                <BsChevronUp size={24} class="ml-2" />
              ) : (
                <BsChevronDown size={24} class="ml-2" />
              )}
            </li>
            <div class={expandStories ? "mt-[-20px]" : "hidden"}>
              <ul class="ml-4">
                <Link to="/postpage">
                  <li class="text-[#F5F5F5] font-medium text-xs mb-2 font-['Jost']">
                    Community Stories
                  </li>
                </Link>
                <li class="text-[#F5F5F5] font-medium text-xs mb-2 font-['Jost']">
                  Individual Stories
                </li>
                <li class="text-[#F5F5F5] font-medium text-xs mb-2 font-['Jost']">
                  Original Incubator Stories
                </li>
              </ul>
            </div>
            <li class="text-white font-medium text-base mb-9 font-['Jost']">
              Special Projects
            </li>
            <li class="text-[#F5F5F5] font-medium text-base mb-9 font-['Jost']">
              Gatherings
            </li>
            <li class="text-[#F5F5F5] font-medium text-base mb-9 font-['Jost']">
              Trips
            </li>
            <li class="text-[#F5F5F5] font-medium text-base mb-9 font-['Jost']">
              Shop
            </li>
            <li class="text-[#F5F5F5] font-medium text-base mb-9 font-['Jost']">
              Playlists & Music
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavMobileVeiw;
