import axios from "axios";
import { useEffect, useState } from "react";

// OOF!

export default function Login() {
  useEffect(() => {
    Authenticate();
  }, []);

  const [data, sendData] = useState({});

  const Authenticate = async () => {
    const res = await axios.get("http://localhost:4435/accounts/login");
    sendData(res.data);
  };

  const Authorize = (e) => {
    e.preventDefault();

    for (let r = 0; r < data.length; r++) {
      while (
        e.target.username.value === data[r].username &&
        e.target.password.value === data[r].passphrase
      ) {
        if (data[r].role === "System" || data[r].role === "Admin")
          return (window.location.href = "/dashboard");

        if (data[r].role === "Client")
          return (window.location.href = "/client");

        return (window.location.href = "/dashboard");
      }
    }

    return alert("Wrong login information or account does not exist.");
  };

  return (
    <div id="login" className="modal login-dlg">
      <div className="modal-content">
        <div className="modal-header">
          <big className="text-4xl text-green-700">Login</big>
          <div className="divider my-5"></div>
        </div>
        <div className="modal-body">
          <form
            action="/dashboard"
            onSubmit={Authorize}
            className="grid gap-2"
            method="post"
          >
            <div className="input-field outlined">
              <input
                type="text"
                id="username"
                name="username"
                placeholder=" "
              />
              <label htmlFor="username">Username</label>
            </div>

            <div className="input-field outlined">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
              />
              <label htmlFor="password">Password</label>
            </div>

            <button
              type="submit"
              className="btn bg-green-500 waves-effect grid text-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
