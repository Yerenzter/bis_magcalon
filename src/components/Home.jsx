import SealLeft from "../assets/seal_san-jose.png";
import SealRight from "../assets/seal_antique.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    Authenticate();
  }, []);

  useEffect(() => {
    MInit()
  }, [])

  const Authenticate = async () => {
    const res = await axios.get("http://localhost:4435/accounts/login");
    sendData(res.data);
  };

  const MInit = async() => {}


  const [data, sendData] = useState({});

  
  const Authorize = (e) => {
    e.preventDefault();

    for (let r = 0; r < data.length; r++) {
      while (
        e.target.username.value === data[r].username &&
        e.target.password.value === data[r].passphrase
      ) {
        if (
          data[r].role === "System" ||
          data[r].role === "Admin"
        )
          return (window.location.href = "/dashboard");

        return (window.location.href = "/dashboard");
      }
    }

    return alert("Wrong login information or account does not exist.");
  };

  return (
    <div className="row bg-white">
      <div className="col s12 m9 h-screen bg-green-500 p-5 grid justify-items-center items-start">
        <h1 className="text-6xl text-center">
          <strong>BRGY. MAGCALON INFORMATION SYSTEM</strong>
        </h1>
        <h2 className="text-2xl">
          Brgy. Magcalon, San Jose de Buenavista , Antique 5700, Philippines
        </h2>

        <p className="text-3xl text-center">
          Manage and tracks your residents&apos;s information with ease. Making
          easier, convenient, more secure and reliable.
        </p>

        <p className="text-3xl text-center">
          Please login first using your account given by your system
          administrator to grant access the system.
        </p>

        <div className="flex w-full justify-around">
          <div>
            <img
              src={SealLeft}
              alt="san jose official seal"
              width={120}
              height={120}
            />
          </div>
          <div>
            <img
              src={SealRight}
              alt="antique official seal"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>

      <div className="col s12 m3 h-screen bg-white px-5 grid items-center">
        <form onSubmit={Authorize}>
          <div className="input-field outlined mb-3">
            <input id="username" placeholder=" " />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-field outlined">
            <input id="password" type="password" placeholder=" " />
            <label htmlFor="password">Password</label>
          </div>

          <div className="divider my-5"></div>

          <button
            className="btn waves-effect bg-green-500 w-full flex justify-center"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
