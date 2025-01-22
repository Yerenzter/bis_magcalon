import axios from "axios";

export default async function AddFeed(e) {
  e.preventDefault();

  let data = {
    title: e.target.feedTitle.value,
    content: e.target.feedContent.value,
  };

  await axios.post("http://localhost:4435/feed/post", data);
}
