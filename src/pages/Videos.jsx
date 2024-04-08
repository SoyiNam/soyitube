import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useDarkMode } from "../context/DarkModeContext";

export default function Videos() {
  // hook(useParams)을 통해 현재 URL의 Param을 가져온다
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const buttonList = [
    "ALL",
    "NEWS",
    "MUSIC",
    "LIVE",
    "BASEBALL",
    "BEAUTY",
    "FOOD",
    "ANIMAL",
    "TRAVEL",
  ];
  const { darkMode } = useDarkMode();

  const {
    isPending,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });
  // console.log("videos : ", videos);

  return (
    <div>
      <form className="flex gap-2 mb-4">
        {buttonList.map((button) => (
          <button
            className={`p-2 rounded ${
              darkMode ? "bg-white text-zinc-800" : "bg-zinc-900 text-white"
            }`}
          >
            {button}
          </button>
        ))}
      </form>
      {/* <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div> */}
      {isPending && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
