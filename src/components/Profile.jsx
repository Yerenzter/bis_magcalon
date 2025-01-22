import { M } from "@materializecss/materialize";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loop, Message, Tick } from "../lib";
import AddResident from "./Actions/AddResident";

// COMMITED NA!

import { AddLink } from "./Registration/Actions/AddLink";
import { ClearForm } from "./Actions/ClearForm";
import axios from "axios";
import DeleteResident, { SetResidentIdToDelete } from "./Actions/DeleteResident";

let id = 0;

export function SetResidentId(idXYZ) {
  return (id = idXYZ);
}

export default function Profile({ ideal }) {
  useEffect(() => {
    MInit();
  }, []);

  useEffect(() => {
    SetResidentInfo();
  }, []);

  const [data, sendData] = useState({});

  const MInit = async () => {
    await M.Dropdown.init(document.querySelectorAll(".select-reg-data"));
    await M.Modal.init(document.querySelectorAll(".modal"));
  };

  const SetResidentInfo = async () => {
    let profile = {
      id: id || ideal,
    };
    let res = await axios.get(
      `http://localhost:4435/residents/profile/${id || ideal}`
    );
    sendData(res.data);
  };

  const CreateClearance = async()=> {
    for(let r=0; r < data.length; r++) {
      let info = {
        fullname: `${data[r].firstname} ${data[r].middlename} ${data[r].lastname}`,
        age: data[r].age,
        sex: data[r].sex
      }

      await axios.post("http://localhost:4435/document/create/clearance", info);
    }
  }

  const CreateIndigency = async()=> {
    for(let r=0; r < data.length; r++) {
      let info = {
        fullname: `${data[r].firstname} ${data[r].middlename} ${data[r].lastname}`
      }

      await axios.post("http://localhost:4435/document/create/indigency", info);
    }
  }

  for (let r = 0; r < data.length; r++) {
    editFirstname.value = data[r].firstname;
    editMiddlename.value = data[r].middlename;
    editLastname.value = data[r].lastname;
    editAge.value = data[r].age;
    editSex.value = data[r].sex;
    editMonth.value = Number(`${data[r].birthday[5]}${data[r].birthday[6]}`) + 1 >= 12 ? `0${Number(`${data[r].birthday[5]}${data[r].birthday[6]}`) - 11}` : Number(`${data[r].birthday[5]}${data[r].birthday[6]}`) + 1;
    editDay.value = Number(`${data[r].birthday[8]}${data[r].birthday[9]}`) + 1 >= 31 ? `0${Number(`${data[r].birthday[8]}${data[r].birthday[9]}`) - 30}` : Number(`${data[r].birthday[8]}${data[r].birthday[9]}`) + 1;
    editYear.value = Number(`${data[r].birthday[0]}${data[r].birthday[1]}${data[r].birthday[2]}${data[r].birthday[3]}`) + 1;
    editCivilStatus.value = data[r].civilstatus;
    editPurok.value = data[r].purok;
    editOccupation.value = data[r].occupation;
    editContactNumber.value = data[r].contactnumber;
  }

  return (
    <>
      <DeleteResident />

      <div className="w-4/5 row p-5 h-max absolute right-0 top-12">
        <div className="col s12">
          <span className="text-6xl text-green-700">Resident Profile</span>
        </div>

        <div className="divider my-3 col s12"></div>

        <div className="col s12 row">
          <div className="col s12 m3 grid justify-items-center h-max">
            <strong className="text-3xl text-center text-green-700 opacity-25">
              Upload avatar is not available at this moment.
            </strong>
          </div>

          <form className="col s12 m9">
            <div className="col s12 m9 row">
              <div className="col s12 m4 input-field">
                <input
                  id="editFirstname"
                  className="registerForm rfr profile"
                  name="firstname"
                  placeholder="Firstname"
                  required
                  maxLength={32}
                  readOnly
                />
                <label htmlFor="editFirstsname">
                  <span className="text-green-700">Firstname*</span>
                </label>
              </div>

              <div className="col s12 m4 input-field ">
                <input
                  id="editMiddlename"
                  className="registerForm rfr profile"
                  name="middlename"
                  placeholder="Middlename"
                  required
                  maxLength={32}
                  readOnly
                />
                <label htmlFor="editMiddlename">
                  <span className="text-green-700">Middlename*</span>
                </label>
              </div>

              <div className="col s12 m4 input-field ">
                <input
                  id="editLastname"
                  className="registerForm rfr profile"
                  name="lastname"
                  placeholder="Lastname"
                  required
                  maxLength={32}
                  readOnly
                />
                <label htmlFor="AddLastname">
                  <span className="text-green-700">Lastname*</span>
                </label>
              </div>

              <div className="col s6 m2 input-field hidden">
                <input
                  id="editAge"
                  className="registerForm rfr profile"
                  name="age"
                  placeholder="Age"
                  required
                  maxLength={3}
                  readOnly
                />
                <label htmlFor="editAge">
                  <span className="text-green-700">Age*</span>
                </label>
              </div>

              <div
                className="col s6 m4 input-field dropdown-trigger !select-reg-data"
                data-target="selectSex"
              >
                <input
                  id="editSex"
                  className="registerForm rfr profile"
                  name="sex"
                  placeholder="Sex"
                  readOnly
                  required
                />
                <label htmlFor="editSex">
                  <span className="text-green-700">Sex*</span>
                </label>

                <ul id="selectSex" className="dropdown-content">
                  <li onClick={() => (editSex.value = "Male")}>
                    <a href="#">Male</a>
                  </li>
                  <li onClick={() => (editSex.value = "Female")}>
                    <a href="#">Female</a>
                  </li>
                </ul>
              </div>

              <div className="col s12 m4 row g-1">
                <div
                  className="col s4 m4 input-field  dropdown trigger !select-reg-data"
                  data-target="selectMonth"
                >
                  <input
                    id="editMonth"
                    className="registerForm rfr profile"
                    name="month"
                    placeholder="MM"
                    readOnly
                    required
                  />
                  <label htmlFor="editMonth">
                    <span className="text-green-700">Month*</span>
                  </label>

                  <ul id="selectMonth" className="dropdown-content">
                    <li onClick={() => (editMonth.value = "01")}>
                      <a href="#">January</a>
                    </li>
                    <li onClick={() => (editMonth.value = "02")}>
                      <a href="#">February</a>
                    </li>
                    <li onClick={() => (editMonth.value = "03")}>
                      <a href="#">March</a>
                    </li>
                    <li onClick={() => (editMonth.value = "04")}>
                      <a href="#">April</a>
                    </li>
                    <li onClick={() => (editMonth.value = "05")}>
                      <a href="#">May</a>
                    </li>
                    <li onClick={() => (editMonth.value = "06")}>
                      <a href="#">June</a>
                    </li>
                    <li onClick={() => (editMonth.value = "07")}>
                      <a href="#">July</a>
                    </li>
                    <li onClick={() => (editMonth.value = "08")}>
                      <a href="#">August</a>
                    </li>
                    <li onClick={() => (editMonth.value = "09")}>
                      <a href="#">September</a>
                    </li>
                    <li onClick={() => (editMonth.value = "10")}>
                      <a href="#">October</a>
                    </li>
                    <li onClick={() => (editMonth.value = "11")}>
                      <a href="#">November</a>
                    </li>
                    <li onClick={() => (editMonth.value = "12")}>
                      <a href="#">December</a>
                    </li>
                  </ul>
                </div>

                <div
                  className="col s4 m4 input-field  dropdown-trigger !select-reg-data"
                  data-target="selectDay"
                >
                  <input
                    id="editDay"
                    className="registerForm rfr profile"
                    name="day"
                    placeholder="DD"
                    readOnly
                    required
                  />
                  <label htmlFor="editDay">
                    <span className="text-green-700">Day*</span>
                  </label>

                  <ul id="selectDay" className="dropdown-content">
                    <Loop repeat={31}>
                      {(index) => (
                        <li
                          key={index}
                          onClick={() =>
                          (editDay.value =
                            index + 1 <= 9 ? `0${index + 1}` : index + 1)
                          }
                        >
                          <a href="#">
                            {index + 1 <= 9 ? `0${index + 1}` : index + 1}
                          </a>
                        </li>
                      )}
                    </Loop>
                  </ul>
                </div>

                <div
                  className="col s4 m4 input-field  dropdown-trigger !select-reg-data"
                  data-target="selectYear"
                >
                  <input
                    id="editYear"
                    className="registerForm rfr profile"
                    name="year"
                    placeholder="YYYY"
                    readOnly
                    required
                  />
                  <label htmlFor="editYear">
                    <span className="text-green-700">Year*</span>
                  </label>

                  <ul id="selectYear" className="dropdown-content">
                    <Loop repeat={200}>
                      {(index) => (
                        <li
                          key={index}
                          onClick={() => (editYear.value = 1900 + index)}
                        >
                          <a href="#">{1900 + index}</a>
                        </li>
                      )}
                    </Loop>
                  </ul>
                </div>
              </div>
              <div
                className="col s12 m2 input-field  dropdown-trigger !select-reg-data"
                data-target="selectCivilStatus"
              >
                <input
                  id="editCivilStatus"
                  className="registerForm rfr profile"
                  name="civilstatus"
                  placeholder="Civil status"
                  readOnly
                  required
                />
                <label htmlFor="editCivilStatus">
                  <span className="text-green-700">Civil status*</span>
                </label>

                <ul id="selectCivilStatus" className="dropdown-content">
                  <li onClick={() => (editCivilStatus.value = "Single")}>
                    <a href="#">Single</a>
                  </li>
                  <li onClick={() => (editCivilStatus.value = "Married")}>
                    <a href="#">Married</a>
                  </li>
                  <li onClick={() => (editCivilStatus.value = "Divorced")}>
                    <a href="#">Divorced</a>
                  </li>
                  <li onClick={() => (editCivilStatus.value = "Widowed")}>
                    <a href="#">Widowed</a>
                  </li>
                </ul>
              </div>

              <div
                className="col s12 m2 input-field  dropdown-trigger !select-reg-data"
                data-target="selectPurok"
              >
                <input
                  id="editPurok"
                  className="registerForm rfr profile"
                  name="purok"
                  placeholder="Purok"
                  readOnly
                  required
                />
                <label htmlFor="editPurok">
                  <span className="text-green-700">Purok*</span>
                </label>

                <ul id="selectPurok" className="dropdown-content">
                  <Loop repeat={7}>
                    {(index) => (
                      <li
                        key={index}
                        onClick={() => (editPurok.value = index + 1)}
                      >
                        <a href="#">{index + 1}</a>
                      </li>
                    )}
                  </Loop>
                </ul>
              </div>

              <div className="col s12 m4 input-field ">
                <input
                  id="editOccupation"
                  className="registerForm"
                  name="occupation"
                  placeholder="Occupation"
                  required
                  maxLength={32}
                  readOnly
                />
                <label htmlFor="editOccupation">
                  <span className="text-green-700">Occupation*</span>
                </label>
              </div>

              <div className="col s6 m4 input-field ">
                <input
                  id="editContactNumber"
                  className="registerForm"
                  name="contactnumber"
                  placeholder="Contact number"
                  maxLength={11}
                  readOnly
                />
                <label htmlFor="editContactNumber">
                  <span className="text-green-700">Contact number</span>
                </label>
              </div>

              <legend className="text-green-700 opacity-50 text-left col s12 p-0 m-0">
                <small>Label marked by (*) are required to fill.</small>
              </legend>

              <div
                id="socials"
                className="col s12 m12 row text-green-700 gap-0"
              >
                <span className="text-3xl col s12">Social links</span>

                <div className="divider my-3 col s12"></div>

                <div id="addLink" className="col s12 hidden">
                  <button
                    className="btn bg-green-500 waves-effect text-white"
                    type="button"
                    onClick={AddLink}
                  >
                    <i className="material-icons">add</i>
                    Add Link
                  </button>
                </div>
              </div>
            </div>

            <div className="col s12 my-5 flex justify-items-end text-white gap-3 fixed bottom-0 right-0 me-5">
              <div>
                <button
                  type="button"
                  className="btn bg-green-500 waves-effect"
                  onClick={CreateClearance}
                >
                  Create Clearance
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="btn bg-green-500 waves-effect"
                  onClick={CreateIndigency}
                >
                  Create Indigency
                </button>
              </div>
              <Link onClick={() => history.back()}>
                <button
                  className="btn bg-green-500 waves-effect"
                  onClick={ClearForm}
                >
                  Cancel
                </button>
              </Link>

              <button
                className="btn bg-green-500 waves-effect hidden"
                type="button"
                onClick={ClearForm}
              >
                Clear
              </button>

              <button
                className="btn bg-red-500 waves-effect modal-trigger"
                data-target="deleteResDlg"
                type="button"
                onClick={() => {
                  for (let r = 0; r < data.length; r++) {
                    SetResidentIdToDelete(
                      data[r].id,
                      `${data[r].firstname} ${data[r].lastname}`
                    );
                  }
                }}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
