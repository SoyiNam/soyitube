import axios from "axios";

export default class FakeYoutubeClient {
  // constructor() {}
  // JavaScript class의 특수한 method 중 하나
  // class가 인스턴스화될 때 즉시 실행되는 method
  async search({ params }) {
    return axios.get(
      `/videos/${params.relatedToVideoId ? "related" : "search"}.json`
    );
  }

  async videos() {
    return axios.get("/videos/popular.json");
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}

// async #searchByKeyword() {
//   return axios
//     .get(`/videos/search.json`)
//     .then((res) => res.data.items)
//     .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
// }

// async #mostPopular() {
//   return axios.get(`/videos/popular.json`).then((res) => res.data.items);
// }
