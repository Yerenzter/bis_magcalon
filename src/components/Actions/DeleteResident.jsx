import axios from "axios";
import Message from "../../lib/components/Message";

let id = 0;
let fullname = "";

async function RemoveResident() {
  let data = {
    id: id,
  };

  if (data) history.back();

  await axios.post("http://localhost:4435/residents/delete", data);
}

export function SetResidentIdToDelete(idXYZ, fullnameXYZ) {
  id = idXYZ;
  fullname = fullnameXYZ;
}

export default function DeleteResident() {
  return (
    <div id="deleteResDlg" className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <big className="text-3xl text-green-700">Delete Resident</big>

          <div className="divider my-5"></div>

          <small className="text-2xl">
            Are you sure you want to delete this resident,{" "}
            <strong className="text-green-700">{fullname}</strong>?
          </small>
        </div>

        <div className="modal-footer">
          <button className="btn-flat modal-close" type="button">
            <span className="text-green-700">Cancel</span>
          </button>

          <button className="btn-flat modal-close" type="button" onClick={RemoveResident}>
            <span className="text-red-700">Done</span>
          </button>
        </div>
      </div>
    </div>
  );
}
