import { Link } from "react-router-dom";

export default function Client() {
  return (
    <div className="w-full row p-5 h-max absolute right-0 top-12">
      <div className="col s12">
        <span className="text-6xl text-green-700">What to do?</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 row">
        <div className="col s6 m3">
          <Link to="/client/requests">
            <div className="card pop">
              <div className="card-content">
                <div className="card-body text-center">
                  <i className="material-icons text-green-700 text-6xl">
                    folder
                  </i>
                  <br />
                  <strong className="text-3xl text-green-700">
                    Requests
                  </strong>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col s6 m3">
          <Link to="/client/feed">
            <div className="card pop">
              <div className="card-content">
                <div className="card-body text-center">
                  <i className="material-icons text-green-700 text-6xl">
                    announcement
                  </i>
                  <br />
                  <strong className="text-3xl text-green-700">
                    Feeds
                  </strong>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
