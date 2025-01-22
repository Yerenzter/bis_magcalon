import { Link } from "react-router-dom";

export default function Requests() {
  return (
    <div className="w-full row p-5 h-max absolute right-0 top-12">
      <div className="col s12">
        <span className="text-6xl text-green-700">Requests</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 row">
        <div className="col s6 m3">
          <Link to="/settings/themes">
            <div className="card pop">
              <div className="card-content">
                <div className="card-body text-center">
                  <i className="material-icons text-green-700 text-6xl">
                    folder
                  </i>
                  <br />
                  <strong className="text-3xl text-green-700">Clearance</strong>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col s6 m3">
          <Link to="/settings/themes">
            <div className="card pop">
              <div className="card-content">
                <div className="card-body text-center">
                  <i className="material-icons text-green-700 text-6xl">
                    folder
                  </i>
                  <br />
                  <strong className="text-3xl text-green-700">Indigency</strong>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="col s12 text-white flex justify-items-end gap-3 fixed bottom-0 right-0 my-5 me-5">
        <button
          type="submit"
          className="btn bg-green-500 waves-effect"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
