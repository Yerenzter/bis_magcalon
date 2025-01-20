import { Link } from "react-router-dom";
import { ClearForm } from "../Actions/ClearForm";
import { useEffect } from "react";
import { Loop, M } from "../../lib";

export default function RegisterResidentBulk() {
  useEffect(() => {
    MInit();
  }, []);

  const MInit = async () => {
    await M.Dropdown.init(document.querySelectorAll(".select-bulk-reg-data"));
  };

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

  return (
    <div className="w-full row p-5 h-max absolute left-0 right-0 z-50 bg-white top-12">
      <div className="col s12">
        <span className="text-3xl text-green-700">Bulk registration</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div id="bulkRoot" className="col s12 row">
        <div id="bulkContainer" className="col s12 grid grid-cols-9 g-1">
          <div className="bulkBox input-field">
            <input
              type="text"
              className="bulkFirstname registerForm"
              name="bulkFirstname"
              placeholder="Firstname"
            />
          </div>

          <div className="bulkBox input-field">
            <input
              type="text"
              className="bulkMiddlename registerForm"
              name="bulkMiddlename"
              placeholder="Middlename"
            />
          </div>

          <div className="bulkBox input-field">
            <input
              type="text"
              className="bulkLastname registerForm"
              name="bulkLastname"
              placeholder="Lastname"
            />
          </div>

          <div
            className="bulkBox input-field dropdown-trigger select-bulk-reg-data"
            data-target="selectBulkSex"
          >
            <input
              type="text"
              className="bulkSex registerForm"
              name="bulkSex"
              placeholder="Sex"
              readOnly
            />

            <ul id="selectBulkSex" className="dropdown-content">
              <li onClick={() => (addSex.value = "Male")}>
                <a href="#">Male</a>
              </li>
              <li onClick={() => (addSex.value = "Female")}>
                <a href="#">Female</a>
              </li>
            </ul>
          </div>

          <div className="bulkBox input-field flex">
            <input
              type="text"
              className="bulkMonth px-0 registerForm"
              name="bulkMonth"
              placeholder="MM"
              maxLength={2}
            />
            <input
              type="text"
              className="bulkDay px-0 registerForm"
              name="bulkDay"
              placeholder="DD"
              maxLength={2}
            />
            <input
              type="text"
              className="bulkYears px-0 registerForm"
              name="bulkYear"
              placeholder="YYYY"
              maxLength={4}
            />
          </div>

          <div
            className="bulkBox input-field dropdown-trigger select-bulk-reg-data"
            data-target="selectBulkCivilStatus"
          >
            <input
              type="text"
              className="bulkCivilStatus registerForm"
              name="bulkCivilStatus"
              placeholder="Civil Status"
              readOnly
            />

            <ul id="selectBulkCivilStatus" className="dropdown-content">
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
            className="bulkBox input-field dropdown-trigger select-bulk-reg-data"
            data-target="selectBulkPurok"
          >
            <input
              type="text"
              className="bulkPurok registerForm"
              name="bulkPurok"
              placeholder="Purok"
              readOnly
            />

            <ul id="selectBulkPurok" className="dropdown-content">
              <Loop repeat={7}>
                {(index) => (
                  <li key={index} onClick={() => (addPurok.value = index + 1)}>
                    <a href="#">{index + 1}</a>
                  </li>
                )}
              </Loop>
            </ul>
          </div>

          <div
            className="bulkBox input-field dropdown-trigger select-bulk-reg-data"
            data-target="selectBulkOccupation"
          >
            <input
              type="text"
              className="bulkOccupation registerForm"
              name="bulkOccupation"
              placeholder="Occupation"
              readOnly
            />

            <ul id="selectBulkOccupation" className="dropdown-content">
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

          <div className="bulkBox input-field ">
            <input
              type="text"
              className="bulkContactNumber registerForm"
              name="bulkContactNumber"
              placeholder="Contact #"
            />
          </div>
        </div>

        <div className="col s12 flex justify-center">
          <button type="button" className="btn bg-green-500 text-white waves-effect">Add</button>
        </div>
      </div>

      <div className="col s12 my-5 flex justify-items-end text-white gap-3 fixed bottom-0 right-0 me-5">
        <Link onClick={() => history.back()}>
          <button className="btn bg-gray-500 waves-effect" onClick={ClearForm}>
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
    </div>
  );
}
