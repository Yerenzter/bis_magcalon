import { Link } from "react-router-dom";

export default function Help() {
    return (
      <div className="w-4/5 row p-5 h-max absolute right-0 top-12">
        <div className="col s12">
          <span className="text-6xl text-green-700">Help</span>
        </div>
  
        <div className="divider my-3 col s12"></div>

        <div className="col s12 row">
          <div className="col s12 m3">
            <Link to="/help/about">
              <div className="card pop">
                <div className="card-content">
                  <div className="card-body text-center">
                    <i className="material-icons text-green-700 text-6xl">
                      info
                    </i>
                    <br />
                    <strong className="text-3xl text-green-700">About us</strong>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col s12 m3">
            <Link to="/help/feedback">
              <div className="card pop">
                <div className="card-content">
                  <div className="card-body text-center">
                    <i className="material-icons text-green-700 text-6xl">
                      feedback
                    </i>
                    <br />
                    <strong className="text-3xl text-green-700">Feedback</strong>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  