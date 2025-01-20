import { M } from "@materializecss/materialize";
import { useEffect } from "react";
import AddAccount from "../Actions/AddAccount";
import { ClearForm } from "../Actions/ClearForm";
import { Link } from "react-router-dom";

export default function RegisterAccount() {
  useEffect(() => {
    MInit();
  }, []);

  const MInit = async () => {
    await M.Dropdown.init(document.querySelectorAll(".select-acc-data"));
  };
  return (
    <div className="w-4/5 row p-5 h-max absolute right-0 top-12">
      <div className="col s12">
        <span className="text-6xl text-green-700">Register new account</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <form className="col s12 row" onSubmit={AddAccount}>
        <div className="col s12 m3 input-field outlined">
          <input
            id="addUsername"
            className="registerForm"
            name="username"
            placeholder="Username"
            required
            maxLength={64}
          />
          <label htmlFor="addUsername">
            <span className="text-green-700">Username*</span>
          </label>
        </div>

        <div className="col s12 m3 input-field outlined">
          <input
            id="addPassword"
            className="registerForm"
            name="password"
            placeholder="Password"
            required
            maxLength={64}
          />
          <label htmlFor="addPassword">
            <span className="text-green-700">Password*</span>
          </label>
        </div>

        <div className="col s12 m3 input-field outlined">
          <input
            id="addConfirmPassword"
            className="registerForm"
            name="confirmpassword"
            placeholder="Confirm password"
            required
            maxLength={64}
          />
          <label htmlFor="addConfirmPassword">
            <span className="text-green-700">Confirm password*</span>
          </label>
        </div>

        <div
          className="col s12 m3 input-field outlined dropdown-trigger select-acc-data"
          data-target="selectRole"
        >
          <input
            id="addRole"
            className="registerForm"
            name="role"
            placeholder="Role"
            readOnly
            required
            maxLength={64}
          />
          <label htmlFor="addRole">
            <span className="text-green-700">Role*</span>
          </label>

          <ul id="selectRole" className="dropdown-content">
            <li onClick={() => (addRole.value = "Admin")}>
              <a href="#">Admin</a>
            </li>
            <li onClick={() => (addRole.value = "Personnel")}>
              <a href="#">Personnel</a>
            </li>
          </ul>
        </div>

        <legend className="text-green-700 opacity-50 text-left col s12 p-0 m-0">
          <small>Label marked by (*) are required to fill.</small>
        </legend>

        <div className="col s12 text-white flex justify-items-end gap-3 fixed bottom-0 right-0 my-5 me-5">
          <Link onClick={() => history.back()}>
            <button
              type="button"
              className="btn bg-gray-500 waves-effect"
              onClick={ClearForm}
            >
              Cancel
            </button>
          </Link>
          <button
            type="button"
            className="btn bg-red-500 waves-effect"
            onClick={ClearForm}
          >
            Clear
          </button>
          <button type="submit" className="btn bg-green-500 waves-effect">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}
