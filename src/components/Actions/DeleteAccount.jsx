import axios from "axios";
import Message from "../../lib/components/Message";

let id = 0;
let username = "";

async function RemoveAccount() {
  let data = {
    id: id,
  };

  if (data) Message("Successfully deleted!");

  await axios.post("http://localhost:4435/accounts/delete", data);
}

export function SetUserInfo(idXYZ, usernameXYZ) {
  id = idXYZ;
  username = usernameXYZ;
}

export function DeleteAccount() {
  return (
    <div id="deleteAccDlg" className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <big className="text-3xl text-green-700">Delete Account</big>

          <div className="divider my-5"></div>

          <small className="text-2xl">
            Are you sure you want to delete this user,{" "}
            <strong className="text-green-700">{username}</strong>?
          </small>
        </div>

        <div className="modal-footer">
          <button className="btn-flat" type="button">
            <span className="text-green-700 modal-close">Cancel</span>
          </button>

          <button className="btn-flat" type="button" onClick={RemoveAccount}>
            <span className="text-red-700 modal-close">Done</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default { DeleteAccount, SetUserInfo };
