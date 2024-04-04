import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";

import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  // hook(useParams)을 통해 현재 URL의 Param을 가져온다
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  console.log("keyword : ", keyword);

  const {
    isPending,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => youtube.search(keyword),
  });
  console.log("videos : ", videos);

  return (
    <>
      <form className="flex gap-2 mb-4">
        <button className="bg-zinc-600 p-2 rounded">ALL</button>
        <button className="bg-zinc-600 p-2 rounded">NEWS</button>
        <button className="bg-zinc-600 p-2 rounded">MUSIC</button>
        <button className="bg-zinc-600 p-2 rounded">LIVE</button>
        <button className="bg-zinc-600 p-2 rounded">BASEBALL</button>
        <button className="bg-zinc-600 p-2 rounded">BEAUTY</button>
        <button className="bg-zinc-600 p-2 rounded">FOOD</button>
        <button className="bg-zinc-600 p-2 rounded">ANIMAL</button>
        <button className="bg-zinc-600 p-2 rounded">TRAVEL</button>
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
    </>
  );
}
