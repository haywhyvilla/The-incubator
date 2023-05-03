import React from "react";

const SideNavMobileVeiw = () => {
  return (
    <div class="md:hidden absolute h-screen top-20 z-10">
      <div
        class="mt-8 w-[275px] h-[65%] py-9 px-9 absolute bg-[rgba(32,33,36,0.5)]"
        id="bg"
      >
        <div>
          <ul class="my-10">
            <li class="text-[#F5F5F5] font-medium text-sm mb-9">
              News & Developments
            </li>
            <li class="text-[#F5F5F5] font-medium text-sm mb-9">Pop Culture</li>
            <li class="text-white font-medium text-sm mb-9">
              Music & Playlists
            </li>
            <li class="text-[#F5F5F5] font-medium text-sm mb-9">Technology</li>
            <li class="text-[#F5F5F5] font-medium text-sm mb-9">Fashion</li>
            <li class="text-[#F5F5F5] font-medium text-sm mb-9">Sex</li>
            <li class="text-[#F5F5F5] font-medium text-sm mb-9">
              Business & Entrepreneurship
            </li>
            <li class="text-[#F5F5F5] font-medium text-sm mb-9">Visuals +</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavMobileVeiw;
