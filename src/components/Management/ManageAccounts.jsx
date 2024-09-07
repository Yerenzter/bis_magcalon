import { Suspense, useEffect, useState } from "react";
import { Loading, Loop, Tick } from "../../lib";
import axios from "axios";
import { M } from "@materializecss/materialize";
import { EditAccount, SetEditInfo } from "../Actions/EditAccount";
import { DeleteAccount, SetUserInfo } from "../Actions/DeleteAccount";

export default function ManageAccounts() {
  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  useEffect(() => {
    MInit();
  }, []);

  const [data, sendData] = useState({});

  const MInit = async () => {
    await M.Modal.init(document.querySelectorAll(".modal"));
  };

  const SearchAccounts = async (keyword) => {
    let search = {
      id: keyword,
      username: keyword,
    };

    let res = await axios.post("http://localhost:4435/accounts/search", search);
    await sendData(res.data);
  };

  const OrderById = async () => {
    let res = await axios.get("http://localhost:4435/accounts/order/id");
    await sendData(res.data);
  };

  const RecognizeFilteringMethod = (e) => {
    let search = document.querySelector("#searchAccounts") || 0;
    if (search?.value !== "") return SearchAccounts(search.value);

    return OrderById();
  };

  return (
    <>
      <EditAccount />
      <DeleteAccount />

      <div className="w-4/5 row p-5 h-max absolute right-0">
        <div className="col s12">
          <span className="text-6xl text-green-700">Manage Accounts</span>
        </div>

        <div className="divider my-3 col s12"></div>

        <div className="col s12 flex justify-end gap-3">
          <div className="col s9 m3 input-field outlined">
            <input
              id="searchAccounts"
              name="searchaccounts"
              placeholder="Search accounts"
            />
            <i className="suffix material-icons text-green-700">search</i>
          </div>
        </div>

        <div className="col s12">
          <table className="striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
                <th>Date joined</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <Suspense fallback={<Loading />}>
                {data ? (
                  <Loop repeat={data.length}>
                    {(index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data[index].username}</td>
                        <td>{data[index].passphrase}</td>
                        <td>{data[index].role}</td>
                        <td>{data[index].creation} </td>
                        <td>
                          <div className="gap-3 flex text-white">
                            <button
                              className="btn bg-green-500 waves-effect waves-light modal-trigger"
                              data-target="editAccDlg"
                              onClick={() =>
                                SetEditInfo(
                                  data[index].id,
                                  data[index].username,
                                  data[index].passphrase
                                )
                              }
                            >
                              <i className="material-icons">edit</i>
                            </button>

                            <button
                              className="btn bg-red-500 waves-effect waves-light modal-trigger"
                              data-target="deleteAccDlg"
                              onClick={() =>
                                SetUserInfo(
                                  data[index].id,
                                  data[index].username
                                )
                              }
                            >
                              <i className="material-icons">delete</i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Loop>
                ) : (
                  <p>Loading...</p>
                )}
              </Suspense>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
