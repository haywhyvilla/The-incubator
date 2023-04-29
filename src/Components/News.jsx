import React from "react";
import img1 from "../assets/Images/IMG1.jpg.png";
import img2 from "../assets/Images/IMG2.jpg.png";
import img3 from "../assets/Images/IMG3.jpg.png";

const News = () => {
  return (
    <div class="w-screen h-[145px] grid grid-cols-3 gap-10 md:px-[150px] py-9">
      <div class="flex justify-center items-center gap-4">
        <img src={img1} alt="img1" />
        <div>
          <h4 class="text-[#111111] font-normal text-base font-['Libre_Baskerville'] mb-2">
            Welcome to ‘Generation Hustle’
          </h4>
          <p class="text-[#808080] font-normal text-xs">SEPTEMBER 22, 2017</p>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4">
        <img src={img2} alt="img2" />
        <div>
          <h4 class="text-[#111111] font-normal text-base font-['Libre_Baskerville'] mb-2">
            South African novelist Zukiswa Wanner Wins the 2020 Goethe Medal
          </h4>
          <p class="text-[#808080] font-normal text-xs">MAY 6, 2020</p>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4">
        <img src={img3} alt="img3" />
        <div>
          <h4 class="text-[#111111] font-normal text-base font-['Libre_Baskerville'] mb-2">
            The Kenyan nonprofit organization Shofco wins Hilton Humanitarian
            Prize 2018
          </h4>
          <p class="text-[#808080] font-normal text-xs">AUGUST 30, 2018</p>
        </div>
      </div>
    </div>
  );
};

export default News;
