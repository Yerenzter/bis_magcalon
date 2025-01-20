import { useEffect, useState } from "react";
import { Loop, Tick } from "../../lib";
import axios from "axios";
import { Link } from "react-router-dom";
import { SetResidentId } from "../Profile";

export default function ManageResidents() {
  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  const [data, sendData] = useState({});

  const SearchResidents = async (keyword) => {
    let search = {
      id: keyword,
      firstname: keyword,
      middlename: keyword,
      lastname: keyword,
      occupation: keyword,
    };

    let res = await axios.post(
      "http://localhost:4435/residents/search",
      search
    );
    sendData(res.data);
  };

  const OrderById = async () => {
    let res = await axios.get("http://localhost:4435/residents/order/id");
    sendData(res.data);
  };

  const RecognizeFilteringMethod = () => {
    let search = document.querySelector("#searchResidents") || 0;

    if (search?.value !== "") return SearchResidents(search.value);

    return OrderById();
  };

  return (
    <div className="w-4/5 row p-5 h-max absolute right-0 z-20 top-12">
      <div className="col s12 row sticky top-16 z-20 bg-white">
        <div className="col s12">
          <span className="text-6xl text-green-700">Manage Residents</span>
        </div>
        <div className="divider my-3 col s12"></div>
      </div>

      <div className="col s12 flex justify-end gap-3 sticky top-20  z-50">
        <div className="col s9 m3 input-field outlined">
          <input
            id="searchResidents"
            name="searchresidents"
            placeholder="Search residents"
          />
          <i className="suffix text-green-700 material-icons">search</i>
        </div>
      </div>

      <div className="col s12 row z-0 relative">
        {(
          <Loop repeat={data.length}>
            {(index) => (
              <div key={index} className="col s12 m3 pop">
                <div className="card">
                  <div className="card-content">
                    <div className="card-header text-center">
                      <big className="text-6xl material-icons text-green-700">
                        person
                      </big>
                    </div>
                    <div className="card-body text-center">
                      <strong className="text-green-700 truncate">
                        <big>
                          {data[index].lastname},&nbsp;{data[index].firstname}
                          &nbsp;
                          {data[index].middlename[0]}.
                        </big>
                      </strong>
                      <br />
                      <small>{data[index].occupation}</small>
                    </div>

                    <div className="divider my-3"></div>

                    <div className="card-footer flex justify-center">
                      <Link
                        to={"/management/residents/profile/" + data[index].id}
                      >
                        <button
                          className="btn-flat"
                          onClick={() => SetResidentId(data[index].id)}
                        >
                          <span className="textgreen-700">VIEW PROFILE</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Loop>
        ) || <h1>Loading...</h1>}
      </div>
    </div>
  );
}
