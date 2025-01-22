import SealLeft from "../assets/seal_san-jose.png";
import SealRight from "../assets/seal_antique.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Actions/Login";
import { M } from "../lib";
import Signup from "./Actions/Signup";

// OOF!

export default function Home() {
  useEffect(() => {
    MInit();
  }, []);

  const MInit = async () => {
    await M.Modal.init(document.querySelectorAll(".login-dlg"));
  };

  return (
    <>
      <Signup />  
      <Login />

      <div className="row w-full">
        <div className="col s12 bg-green-500">
          <div className="col s12 grid grid-cols-3 justify-around p-3">
            <center>
              <img src={SealLeft} alt="seal_left" width={120} />
            </center>
            <div className="text-center">
              <h1 className="text-4xl">REPUBLIC OF THE PHILIPPINES</h1>
              <h2 className="text-4xl">PROVINCE OF ANTIQUE</h2>
              <h3 className="text-2xl">
                Municipality of San Jose de Buenavista
              </h3>
              <br />
              <h2>Barangay Magcalon</h2>
            </div>
            <center>
              <img src={SealRight} alt="seal_right" width={120} />
            </center>
          </div>

          <div className="col s12 row mt-12 p-5">
            <div className="col s12 m4"></div>
            <div className="col s12 m4 text-justify">
              <p>
                Magcalon is a barangay in the municipality of San Jose de
                Buenavista, in the province of Antique. Its population as
                determined by the 2020 Census was 1,270. This represented 1.95%
                of the total population of San Jose de Buenavista.
              </p>
            </div>
          </div>

          <div className="col s12 grid  justify-items-center g-2">
            <span className="text-white">
              Create and account to join, if your account exist just login.
            </span>
            <div className="grid g-1">
              <button
                className="btn bg-green-300 text-white flex g-1 waves-effect modal-trigger"
                data-target="signup"
              >
                <span className="material-icons">login</span>
                <span>SIGN UP</span>
              </button>

              <button
                className="btn bg-green-600 text-black flex g-1 waves-effect modal-trigger"
                data-target="login"
              >
                <span className="material-icons">login</span>
                <span>SIGN IN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
