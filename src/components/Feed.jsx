import axios from "axios";
import { useEffect, useState } from "react";
import { Loop, Tick } from "../lib";

export default function Feed() {
  useEffect(() => {
    Tick(fetchFeeds);
  }, []);

  const [data, sendData] = useState({});

  const fetchFeeds = async () => {
    let res = await axios.get("http://localhost:4435/feeds");
    await sendData(res.data);
  };

  return (
    <div className="w-full row p-5 h-max absolute right-0 top-12">
      <div className="col s12">
        <span className="text-6xl text-green-700">Feeds</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 row">
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

      <div className="col s12 text-white flex justify-items-end gap-3 fixed bottom-0 right-0 my-5 me-5">
        <button
          type="submit"
          className="btn bg-green-500 waves-effect"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
