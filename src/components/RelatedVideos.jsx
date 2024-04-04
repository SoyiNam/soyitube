import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isPending,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["related", id],
    queryFn: () => youtube.relatedVideos(id),
  });

  return (
    <div>
      {/* {id} */}
      {isPending && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </div>
  );
}
