import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import { useLocation } from "react-router-dom";

export default function VideosDetail() {
  const {
    state: { video },
  } = useLocation();
  console.log("video: ", video);
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameborder="0"
          title="video.id"
        />
        <div className="p-8">
          <h2 className="text-xl font-bold ">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap bg-zinc-800 p-2 rounded leading-7">
            {description}
          </pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
