import axios from "axios";
import Tick from "../components/Tick";

export let occupationDataMode = [] || null;
export let occupationDataName = [] || null;

let x = [];
let y = [];
let z = [];

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

let fetchOccupations = async () => {
  for (let r = 0; r < occupations.length; r++) {
    let res = await axios.post(
      "http://localhost:4435/residents/occupation/search",
      { occupation: occupations[r] }
    );
    occupationDataMode.push(res.data.length)
    occupationDataName.push(res.data);
  }
};


fetchOccupations();

export default { occupationDataMode, occupationDataName };
