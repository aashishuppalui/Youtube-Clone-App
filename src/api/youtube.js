import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  // "http://www.googleapis.com/youtube/v3/search?key=AIzaSyC6IlcuWK86QPGh3NpyJK2WrmSmVLzkWqw ",
  //   params: {
  //     part: "snippet",
  //     maxResults: 5,
  //     key: "[AIzaSyB8RgjD5uFILY1v3M2rq-u2-QgoaTwlDk4]",
  //   },
});
