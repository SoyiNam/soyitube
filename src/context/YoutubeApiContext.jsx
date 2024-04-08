import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";
// import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();
// createContext() 함수를 사용하여 YouTube API와 관련된 컨텍스트를 생성

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
// YoutubeApiProvider 함수는 children 프로퍼티를 받아 YouTube API 컨텍스트를 제공하는 React 컴포넌트를 반환합니다.

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
// useYoutubeApi 함수는 useContext() 훅을 사용하여 YouTube API 컨텍스트 값을 가져옵니다. 이 함수를 사용하면 React 컴포넌트 내에서 YouTube API에 쉽게 액세스할 수 있습니다.
