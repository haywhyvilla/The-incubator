import React, { useState, useEffect } from "react";
import SideNavMobileVeiw from "./SideNavMobileVeiw";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const [currentState, setCurrentState] = useState(0);
  const [heroData, setHeroData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === heroData.length) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const result = await axios.get(
          "https://app.theincuba8or.com/api/hero-featured-posts"
        );
        setHeroData(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchHeroData();
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const heroClick = () => {
    {
      // open ? setOpen(!open) : null;

      open && setOpen(false);
    }
  };

  // console.log(heroData[0].featured_image);
  // bg - [url("././assets/Images/mobilehero.png")];
  // lg: bg - [url("././assets/Images/Hero-img.png")];

  // {
  //   data.featured_image ? (
  //     <img src={data.featured_image} alt="Featured" />
  //   ) : (
  //     <p>No featured image available</p>
  //   );
  // }

  const bgImageStyle = {
    backgroundImage: `url(${heroData[currentState]?.featured_image})`,
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  function removeHtmlTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div>
      <div
        class="h-screen w-screen bg-cover bg-no-repeat md:px-[140px] py-[35px] relative"
        style={bgImageStyle}
      >
        <div
          class="flex justify-between items-center mb-0 sm:mb-[250px] px-4"
          onClick={heroClick}
        >
          {open ? (
            <div class="sm:hidden">
              <ImCancelCircle color="#ffffff" size={30} onClick={handleClick} />
            </div>
          ) : (
            <div class="sm:hidden">
              <AiOutlineMenu color="#ffffff" size={30} onClick={handleClick} />
            </div>
          )}

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
        {open ? (
          <div>
            <SideNavMobileVeiw class="absolute" />

            <div
              class="w-[500px] mt-[350px] sm:mt-0 sm:ml-8 pl-6 pr-20 sm:px-0 absolute md:relative bottom-2"
              onClick={heroClick}
            >
              <div class="flex items-center gap-1">
                {heroData.map((imageSlide, currentState) => (
                  <div
                    class="w-[9px] h-[9px] bg-[#FFFFFF] border-solid border-[1px] border-[#FFFFFF] transform skew-y-12 cursor-pointer"
                    key={currentState}
                    onClick={() => goToNext(currentState)}
                  ></div>
                ))}
              </div>
              <h1 class="font-['Jost'] text-[#F5F5F5] font-medium sm:font-bold text-3xl sm:text-5xl my-4">
                {heroData[currentState]?.title.substring(0, 15)}
              </h1>
              {/* <p class="font-['Work_Sans'] text-[#F5F5F5] font-normal text-base my-3 hidden sm:hidden">
                {removeHtmlTags(
                  heroData[currentState]?.content.substring(0, 150)
                )}
                ...
              </p> */}
              <p class="font-['Work_Sans'] text-[#F5F5F5] font-normal text-base my-3 hidden sm:hidden">
                <div
                  dangerouslySetInnerHTML={{
                    __html: heroData[currentState]?.content.substring(0, 450),
                  }}
                ></div>
              </p>
              <span class="text-[#F5F5F5] font-['Work_Sans'] font-normal text-[14px] mr-2">
                by
              </span>
              <span class="text-[#202124] font-['Work_Sans'] font-normal text-[14px] mr-4">
                {heroData[currentState]?.author}
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
          </div>
        ) : (
          <div>
            <div class="w-[500px] mt-[300px] sm:ml-8 pl-6 pr-20 sm:px-0">
              <div class="flex items-center gap-1">
                {heroData.map((imageSlide, currentState) => (
                  <div
                    class="w-[9px] h-[9px] bg-[#FFFFFF] border-solid border-[1px] border-[#FFFFFF] transform skew-y-12 cursor-pointer"
                    key={currentState}
                    onClick={() => goToNext(currentState)}
                  ></div>
                ))}
              </div>
              <h1 class="font-['Jost'] text-[#F5F5F5] font-medium sm:font-bold text-3xl sm:text-5xl my-4">
                {heroData[currentState]?.title.substring(0, 15)}...
              </h1>
              {/* <p class="font-['Work_Sans'] text-[#F5F5F5] font-normal text-base my-3">
                {heroData[currentState]?.content.substring(0, 150)}...
              </p> */}
              <p class="font-['Work_Sans'] text-[#F5F5F5] font-normal text-base my-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: heroData[currentState]?.content.substring(0, 450),
                  }}
                ></div>
              </p>
              <span class="text-[#F5F5F5] font-['Work_Sans'] font-normal text-[14px] mr-2">
                by
              </span>
              <span class="text-[#202124] font-['Work_Sans'] font-normal text-[14px] mr-4">
                {heroData[currentState]?.author}
              </span>
              <span class="text-[#F5F5F5] font-['Work_Sans'] font-normal text-[16px] mr-2">
                {heroData[currentState]?.published_at}
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
          </div>
        )}
        <div class="h-[50px] w-[100%] bg-[rgba(32,33,36,0.5)] mt-[50px] justify-between items-center px-[104px] hidden md:flex">
          <Link to="/postpage">
            <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
              Stories
            </a>
          </Link>
          <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
            Special Projects
          </a>
          <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
            Gatherings
          </a>
          <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
            Trips
          </a>
          <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
            Shop
          </a>
          <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base">
            Playlists & Music
          </a>
          <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base hidden xl:block">
            Business & Entrepreneurship
          </a>
          <a class="text-[#F5F5F5] font-['Work_Sans'] font-semibold text-base hidden xl:block">
            Visuals +
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
