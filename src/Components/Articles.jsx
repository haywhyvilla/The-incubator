import React, { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const [articleData, setArticleData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);
  const [showMorePostData, setShowMorePostData] = useState(3);

  const loadMore = () => {
    setShowMorePostData((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const result = await axios.get(
          "https://app.theincuba8or.com/api/recent-articles"
        );
        setArticleData(result.data.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchArticleData();
  }, []);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postResult = await axios.get(
          "https://app.theincuba8or.com/api/posts"
        );
        setPostData(postResult.data.data);
        console.log(postResult.data.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchPostData();
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  // function removeHtmlTags(paragraph) {
  //   let regex = /<[^>]+>/g;
  //   let cleanedParagraph = paragraph.replace(regex, "");
  //   return cleanedParagraph;
  // }

  function removeHtmlTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div>
      <h1 class="text-[#000000] font-bold text-4xl font-['Jost']">
        RECENT ARTICLES
      </h1>
      <div class="grid grid-cols-3">
        {articleData.map((item, index) => (
          <div key={index} class="my-9">
            <div class="px-2 sm:px-0">
              <div class="sm:w-[240px] h-[168px] relative">
                <img src={item.featured_image} alt="APIimage" class="h-full" />
                <button class="bg-[#111111] absolute bottom-[13px] left-[10px] text-white font-['Work_Sans'] font-normal text-xs px-[6px] py-[3px]">
                  {item.author}
                </button>
              </div>
              <h4 class="my-[8px] font-['Jost'] font-bold text-base">
                {item.title}
              </h4>
              <p class="text-[#808080] font-['Work_Sans'] font-normal text-xs">
                {item.published_at}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div class="sm:pr-2">
        {postData.slice(0, showMorePostData).map((item, index) => (
          <div key={index} class="sm:flex gap-6 ml-6 sm:ml-0 my-8">
            <div class="h-[250px] w-[250px]">
              <img src={item.featured_image} alt="APIimage" class="h-full" />
            </div>
            <div>
              <h1 class="text-[#111111] font-['Jost'] font-bold text-2xl mb-2">
                {item.title}
              </h1>
              <span class="text[#808080] font-['Work_Sans'] text-xs font-normal mr-1">
                by
              </span>
              <span class="text-[#111111] font-['Work_Sans'] text-xs font-normal mr-3">
                {item.author}
              </span>
              <span class="text-[#808080] font-['Work_Sans'] text-xs font-normal uppercase">
                {item.published_at}
              </span>
              <p class="text-[#333333] font-['Work_Sans'] text-base font-normal mt-4 w-[75%]">
                {removeHtmlTags(item.content.substring(0, 150))}
              </p>
            </div>
          </div>
        ))}

        <div class="flex justify-center items-center">
          {showMorePostData >= postData.length ? null : (
            <button
              class="border-solid border-[1px] border-[#E0E0E0] px-16 py-2 rounded-sm text-[#212121] font-normal text-xs font-['Work_Sans'] cursor-pointer hover:text-white hover:bg-black"
              onClick={loadMore}
            >
              LOAD MORE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
