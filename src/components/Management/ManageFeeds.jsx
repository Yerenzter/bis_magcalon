import axios from "axios";
import { useEffect, useState } from "react";
import { Loop, Tick } from "../../lib";
import { ClearForm } from "../Actions/ClearForm";
import AddFeed from "../Actions/AddFeed";

export default function ManageFeeds() {
  useEffect(() => {
    Tick(fetchFeeds);
  }, []);

  const [data, sendData] = useState({});

  const fetchFeeds = async () => {
    let res = await axios.get("http://localhost:4435/feeds");
    await sendData(res.data);
  };

  return (
    <div className="w-4/5 row p-5 h-max absolute right-0 top-12">
      <div className="col s12 m3 grid g-2">
        <span className="text-6xl text-green-700">Post</span>

        <div className="divider my-5"></div>

        <form method="post" onSubmit={AddFeed} className="grid g-3">
          <div className="input-field outlined">
            <input
              type="text"
              id="feedTitle"
              className="register-form"
              name="feedTitle"
              placeholder=" "
              maxLength={512}
            />
            <label htmlFor="feedTitle">Create title</label>
          </div>

          <div className="input-field outlined">
            <textarea
              type="text"
              id="feedContent"
              className="register-form"
              name="feedTitle"
              placeholder=" "
              maxLength={1024}
            />
            <label htmlFor="feedContent">Create announcement</label>
          </div>

          <button
            type="submit"
            className="btn bg-green-500 text-white flex justify-center waves-effect"
            onClick={ClearForm}
          >
            Post
          </button>
        </form>
      </div>

      <div className="col s12 m9 row ">
        <div className="col s12">
          <span className="text-6xl text-green-700">Feeds</span>
        </div>

        <Loop repeat={data.length}>
          {(index) => (
            <div className="col s12">
              <div className="card">
                <div className="card-content">
                  <div className="card-header">
                    <span className="text-4xl">
                      <strong>{data[index].title}</strong>
                    </span>
                    <div className="divider my-5"></div>
                  </div>
                  <div className="card-body">
                    <p>{data[index].content}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Loop>
      </div>
    </div>
  );
}
