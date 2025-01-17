import { M } from "@materializecss/materialize";
import axios from "axios";
import { Message } from "../../lib";

export default async function AddResident(e) {
  e.preventDefault();

  await Message("Successfully Registered!");

  let link = document.querySelectorAll(".link");
  let socials = { name: [], url: [] };

  for (let r = 0; r < link.length; r++) {
    socials.name.push(link[r].value);
    socials.url.push(link[r].value);
  }

  let data = {
    firstname: e.target.firstname.value,
    middlename: e.target.middlename.value,
    lastname: e.target.lastname.value,
    age: 0,
    sex: e.target.sex.value,
    birthday: `${e.target.year.value}${e.target.month.value}${e.target.day.value}`,
    civilstatus: e.target.civilstatus.value,
    occupation: e.target.occupation.value,
    purok: e.target.purok.value,
    contactnumber: e.target.contactnumber.value,
    information: socials,
  };

  await axios.post("http://localhost:4435/residents/post", data);
}
