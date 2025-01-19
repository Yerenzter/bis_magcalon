import { M } from "@materializecss/materialize";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loop, Message } from "../../lib";
import AddResident from "../Actions/AddResident";
import { AddLink } from "./Actions/AddLink";
import { ClearForm } from "../Actions/ClearForm";

export default function RegisterResident() {
  useEffect(() => {
    MInit();
  }, []);

  let occupations = [
    "Accountant",
    "Actor/Actress",
    "Architect",
    "Artist",
    "Banker",
    "Carpenter",
    "Cashier",
    "Chef",
    "Dancer",
    "Doctor",
    "Driver",
    "Electrician",
    "Engineer",
    "Farmer",
    "Fisherman",
    "Housewife",
    "Manager",
    "Model",
    "Nurse",
    "OFW",
    "Pilot",
    "Police Officer",
    "Programmer",
    "Retailer",
    "Seafarer",
    "Security Guard",
    "Soldier",
    "Stewardress",
    "Student",
    "Teacher",
    "Vendor",
    "Others",
  ];

  const MInit = async () => {
    M.Dropdown.init(document.querySelectorAll(".select-reg-data"));
  };
  return (
    <div className="w-4/5 row p-5 h-max absolute right-0">
      <div className="col s12">
        <span className="text-6xl text-green-700">Register new resident</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 row">
        <div className="col s12 m3 grid justify-items-center h-max">
          <strong className="text-3xl text-center text-green-700 opacity-25">
            Upload avatar is not available at this moment.
          </strong>
        </div>

        <form className="col s12 m9" onSubmit={AddResident}>
          <div className="col s12 m9 row">
            <div className="col s12 m4 input-field outlined">
              <input
                id="addFirstname"
                className="registerForm rfr"
                name="firstname"
                placeholder="Firstname"
                required
                maxLength={32}
              />
              <label htmlFor="addFirstsname">
                <span className="text-green-700">Firstname*</span>
              </label>
            </div>

            <div className="col s12 m4 input-field outlined">
              <input
                id="addMiddlename"
                className="registerForm rfr"
                name="middlename"
                placeholder="Middlename"
                required
                maxLength={32}
              />
              <label htmlFor="addMiddlename">
                <span className="text-green-700">Middlename*</span>
              </label>
            </div>

            <div className="col s12 m4 input-field outlined">
              <input
                id="addLastname"
                className="registerForm rfr"
                name="lastname"
                placeholder="Lastname"
                required
                maxLength={32}
              />
              <label htmlFor="addLastname">
                <span className="text-green-700">Lastname*</span>
              </label>
            </div>

            <div className="col s6 m2 input-field outlined hidden">
              <input
                id="addAge"
                className="registerForm rfr"
                name="age"
                placeholder="Age"
                maxLength={3}
              />
              <label htmlFor="addAge">
                <span className="text-green-700">Age*</span>
              </label>
            </div>

            <div
              className="col s6 m4 input-field outlined dropdown-trigger select-reg-data"
              data-target="selectSex"
            >
              <input
                id="addSex"
                className="registerForm rfr"
                name="sex"
                placeholder="Sex"
                readOnly
                required
              />
              <label htmlFor="addSex">
                <span className="text-green-700">Sex*</span>
              </label>

              <ul id="selectSex" className="dropdown-content">
                <li onClick={() => (addSex.value = "Male")}>
                  <a href="#">Male</a>
                </li>
                <li onClick={() => (addSex.value = "Female")}>
                  <a href="#">Female</a>
                </li>
              </ul>
            </div>

            <div className="col s12 m4 row gap-1">
              <div
                className="col s4 m4 input-field outlined dropdown trigger select-reg-data"
                data-target="selectMonth"
              >
                <input
                  id="addMonth"
                  className="registerForm rfr"
                  name="month"
                  placeholder="MM"
                  readOnly
                  required
                />
                <label htmlFor="addMonth">
                  <span className="text-green-700">Month*</span>
                </label>

                <ul id="selectMonth" className="dropdown-content">
                  <li onClick={() => (addMonth.value = "01")}>
                    <a href="#">January</a>
                  </li>
                  <li onClick={() => (addMonth.value = "02")}>
                    <a href="#">February</a>
                  </li>
                  <li onClick={() => (addMonth.value = "03")}>
                    <a href="#">March</a>
                  </li>
                  <li onClick={() => (addMonth.value = "04")}>
                    <a href="#">April</a>
                  </li>
                  <li onClick={() => (addMonth.value = "05")}>
                    <a href="#">May</a>
                  </li>
                  <li onClick={() => (addMonth.value = "06")}>
                    <a href="#">June</a>
                  </li>
                  <li onClick={() => (addMonth.value = "07")}>
                    <a href="#">July</a>
                  </li>
                  <li onClick={() => (addMonth.value = "08")}>
                    <a href="#">August</a>
                  </li>
                  <li onClick={() => (addMonth.value = "09")}>
                    <a href="#">September</a>
                  </li>
                  <li onClick={() => (addMonth.value = "10")}>
                    <a href="#">October</a>
                  </li>
                  <li onClick={() => (addMonth.value = "11")}>
                    <a href="#">November</a>
                  </li>
                  <li onClick={() => (addMonth.value = "12")}>
                    <a href="#">December</a>
                  </li>
                </ul>
              </div>

              <div
                className="col s4 m4 input-field outlined dropdown-trigger select-reg-data"
                data-target="selectDay"
              >
                <input
                  id="addDay"
                  className="registerForm rfr"
                  name="day"
                  placeholder="DD"
                  readOnly
                  required
                />
                <label htmlFor="addDay">
                  <span className="text-green-700">Day*</span>
                </label>

                <ul id="selectDay" className="dropdown-content">
                  <Loop repeat={32}>
                    {(index) => (
                      <li
                        key={index}
                        onClick={() =>
                          (addDay.value =
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
                className="col s4 m4 input-field outlined dropdown-trigger select-reg-data"
                data-target="selectYear"
              >
                <input
                  id="addYear"
                  className="registerForm rfr"
                  name="year"
                  placeholder="YYYY"
                  readOnly
                  required
                />
                <label htmlFor="addYear">
                  <span className="text-green-700">Year*</span>
                </label>

                <ul id="selectYear" className="dropdown-content">
                  <Loop repeat={200}>
                    {(index) => (
                      <li
                        key={index}
                        onClick={() => (addYear.value = 1900 + index)}
                      >
                        <a href="#">{1900 + index}</a>
                      </li>
                    )}
                  </Loop>
                </ul>
              </div>
            </div>
            <div
              className="col s12 m2 input-field outlined dropdown-trigger select-reg-data"
              data-target="selectCivilStatus"
            >
              <input
                id="addCivilStatus"
                className="registerForm rfr"
                name="civilstatus"
                placeholder="Civil status"
                readOnly
                required
              />
              <label htmlFor="addCivilStatus">
                <span className="text-green-700">Civil status*</span>
              </label>

              <ul id="selectCivilStatus" className="dropdown-content">
                <li onClick={() => (addCivilStatus.value = "Single")}>
                  <a href="#">Single</a>
                </li>
                <li onClick={() => (addCivilStatus.value = "Married")}>
                  <a href="#">Married</a>
                </li>
                <li onClick={() => (addCivilStatus.value = "Divorced")}>
                  <a href="#">Divorced</a>
                </li>
                <li onClick={() => (addCivilStatus.value = "Widowed")}>
                  <a href="#">Widowed</a>
                </li>
              </ul>
            </div>

            <div
              className="col s12 m2 input-field outlined dropdown-trigger select-reg-data"
              data-target="selectPurok"
            >
              <input
                id="addPurok"
                className="registerForm rfr"
                name="purok"
                placeholder="Purok"
                readOnly
                required
              />
              <label htmlFor="addPurok">
                <span className="text-green-700">Purok*</span>
              </label>

              <ul id="selectPurok" className="dropdown-content">
                <Loop repeat={7}>
                  {(index) => (
                    <li
                      key={index}
                      onClick={() => (addPurok.value = index + 1)}
                    >
                      <a href="#">{index + 1}</a>
                    </li>
                  )}
                </Loop>
              </ul>
            </div>

            <div
              className="col s12 m4 input-field outlined dropdown-trigger select-reg-data"
              data-target="selectOccupation"
            >
              <input
                id="addOccupation"
                className="registerForm"
                name="occupation"
                placeholder="Occupation"
                required
                maxLength={32}
                readOnly
              />
              <label htmlFor="addOccupation">
                <span className="text-green-700">Occupation*</span>
              </label>

              <ul id="selectOccupation" className="dropdown-content">
                <Loop repeat={occupations.length}>
                  {(index) => (
                    <li
                      onClick={() =>
                        (document.querySelector("#addOccupation").value =
                          occupations[index])
                      }
                      key={index}
                    >
                      <a href="#">{occupations[index]}</a>
                    </li>
                  )}
                </Loop>
              </ul>
            </div>

            <div className="col s6 m4 input-field outlined">
              <input
                id="addContactNumber"
                className="registerForm"
                name="contactnumber"
                placeholder="Contact number"
                maxLength={11}
              />
              <label htmlFor="addContactNumber">
                <span className="text-green-700">Contact number</span>
              </label>
            </div>

            <legend className="text-green-700 opacity-50 text-left col s12 p-0 m-0">
              <small>Label marked by (*) are require to fill.</small>
            </legend>

            <div id="socials" className="col s12 m12 row text-green-700 gap-0">
              <span className="text-3xl col s12">
                Register multiple residents at the same time?
              </span>

              <div className="divider my-3 col s12"></div>

              <div id="addLink" className="col s12">
                <Link to="/registration/resident/bulk">
                  <button
                    className="btn bg-green-500 waves-effect text-white"
                    type="button"
                  >
                    <i className="material-icons mr-3">checklist</i>
                    Try Bulk Registration
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col s12 my-5 flex justify-items-end text-white gap-3 fixed bottom-0 right-0 me-5">
            <Link onClick={() => history.back()}>
              <button
                className="btn bg-gray-500 waves-effect"
                onClick={ClearForm}
              >
                Cancel
              </button>
            </Link>

            <button
              className="btn bg-red-500 waves-effect"
              type="button"
              onClick={ClearForm}
            >
              Clear
            </button>

            <button className="btn bg-green-500 waves-effect" type="submit">
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
