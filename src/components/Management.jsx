import { Link } from "react-router-dom";

export default function Management() {
  return (
    <div className="w-4/5 row p-5 h-max absolute right-0 top-12">
      <div className="col s12">
        <span className="text-6xl text-green-700">Management</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 m12">
        <span className="text-5xl text-green-700">What to manage?</span>
      </div>

      <div className="col s12 m6 row">
        <div className="col s12 m5">
          <Link to="/management/residents">
            <div className="card pop">
              <div className="card-content">
                <div className="card-body text-center">
                  <i className="material-icons text-green-700 text-6xl">
                    group
                  </i>
                  <br />
                  <strong className="text-3xl text-green-700">Residents</strong>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col s12 m5">
          <Link to="/management/accounts">
            <div className="card pop">
              <div className="card-content">
                <div className="card-body text-center">
                  <i className="material-icons text-green-700 text-6xl">
                    account_circle
                  </i>
                  <br />
                  <strong className="text-3xl text-green-700">Accounts</strong>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col s12 m5">
          <Link to="/management/feeds">
            <div className="card pop">
              <div className="card-content">
                <div className="card-body text-center">
                  <i className="material-icons text-green-700 text-6xl">
                    announcement
                  </i>
                  <br />
                  <strong className="text-3xl text-green-700">Feeds</strong>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
