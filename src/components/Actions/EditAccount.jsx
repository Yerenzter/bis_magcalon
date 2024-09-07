import { M } from "@materializecss/materialize";
import axios from "axios";
import { useEffect } from "react";
import { Message } from "../../lib";

let id = 0;
let username = "";
let password = "";

async function ModifyAccount(e) {
  e.preventDefault();

  let data = {
    username: e.target.username.value,
    passphrase: e.target.password.value,
    id: id,
  };

  if (data) Message("Successfully updated!");

  return await axios.put("http://localhost:4435/accounts/edit", data);
}

export function SetEditInfo(idXYZ, usernameXYZ, passwordXYZ) {
  id = idXYZ;
  username = usernameXYZ;
  password = passwordXYZ;

  SpyInput();
}

function SpyInput() {
  let a = document.querySelector("#editUsername");
  let b = document.querySelector("#editPassword");

  a.value = username;
  b.value = password;
}

export function EditAccount() {
  return (
    <div id="editAccDlg" className="modal">
      <div className="modal-content">
        <form onSubmit={ModifyAccount}>
          <div className="modal-body">
            <big className="text-4xl text-green-700">Edit account</big>

            <div className="divider my-5"></div>

            <div className="row">
              <div className="col s12 m6 input-field outlined">
                <input
                  id="editUsername"
                  name="username"
                  placeholder="Username"
                  required
                />
                <label htmlFor="editUsername">
                  <span className="text-green-700">Username*</span>
                </label>
              </div>

              <div className="col s12 m6 input-field outlined">
                <input
                  id="editPassword"
                  name="password"
                  placeholder="Password"
                  required
                />
                <label htmlFor="editPassword">
                  <span className="text-green-700">Password*</span>
                </label>
              </div>
            </div>
          </div>

          <div className="divider my-5"></div>

          <div className="modal-footer">
            <button className="btn-flat" type="button">
              <span className="text-green-700 modal-close">Cancel</span>
            </button>

            <button className="btn-flat" type="submit">
              <span className="text-green-700 modal-close">Done</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default { SetEditInfo, EditAccount };
