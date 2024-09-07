import { ResetCount } from "../Registration/Actions/AddLink";

export async function ClearForm() {
  let registerForm = await document.querySelectorAll(".registerForm");
  let socials = await document.querySelector("#socials");
  let socialBox = await document.querySelectorAll(".social-box");

  for (let r = 0; r < registerForm.length; r++) {
    registerForm[r].value = "";
  }

  for (let r = 0; r < socialBox.length; r++) {
    socials.removeChild(socialBox[r]);
  }

  await ResetCount();
}

export default { ClearForm };
