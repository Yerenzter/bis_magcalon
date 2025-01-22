import { useEffect } from "react";
import { M } from "../../lib";
import axios from "axios";

export default function Signup() {
  useEffect(() => {
    Minit();
  }, []);

  const Minit = async () => {
    await M.Modal.init(document.querySelectorAll(".signup-dlg"));
  };

  const Signup = async (e) => {
    e.preventDefault();
    
    const data = {
        username: e.target.createUsername.value,
        password: e.target.createPassword.value,
        role: "Client",
        creation: "000000"
    }

    await axios.post("http://localhost:4435/accounts/post", data);
  }

  return (
    <div id="signup" className="modal signup-dlg">
      <div className="modal-content">
        <div className="modal-content">
          <div className="modal-header">
            <big className="text-4xl text-green-700">Create account</big>
            <div className="divider my-5"></div>
          </div>
          <div className="modal-body">
            <form
              action="/dashboard"
              onSubmit={Signup}
              className="grid gap-2"
              method="post"
            >
              <div className="input-field outlined">
                <input
                  type="text"
                  id="createUsername"
                  name="createUsername"
                  placeholder=" "
                />
                <label htmlFor="createUsername">Create username</label>
              </div>

              <div className="input-field outlined">
                <input
                  type="text"
                  id="createPassword"
                  name="createPassword"
                  placeholder=" "
                />
                <label htmlFor="createPassword">Create password</label>
              </div>

              <button
                type="submit"
                className="btn bg-green-500 waves-effect grid text-center modal-close"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
