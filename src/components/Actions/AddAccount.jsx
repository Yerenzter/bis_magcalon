import axios from "axios";
import { GetDate, Message } from "../../lib";
import { M } from "@materializecss/materialize";

export default async function AddAccount(e) {
  e.preventDefault();

  let data = {
    username: e.target.username.value,
    password: e.target.password.value,
    role: e.target.role.value,
    creation: GetDate(),
  };

  if (e.target.confirmpassword.value !== e.target.password.value)
    return Message("Password does not match.");

  if(true) await Message("Successfully registered!");

  return await axios
    .post("http://localhost:4435/accounts/post", data)
    .then(() => Message("Server is now running!"))
    .finally(() => Message("Server is down!"));
}
