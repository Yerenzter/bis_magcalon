import { Link, Outlet } from "react-router-dom";

export default function Sidenav() {
  return (
    <>
      <div className="w-1/5 bg-green-500 text-white p-3 fixed top-0 bottom-0 z-50">
        <div className="text-left py-5">
          <h1 className="text-3xl">
            <i className="material-icons">person</i>
            &nbsp; Hi, Admin!
          </h1>
        </div>
        <div className="divider my-5"></div>

        <ul className="h-4/6">
          <li className="mb-3">
            <Link to="/dashboard" className="text-white flex text-3xl">
              <i className="material-icons">dashboard</i>
              &nbsp; Dashboard
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/registration" className="text-white flex text-3xl">
              <i className="material-icons">assignment</i>
              &nbsp; Registration
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/management" className="text-white flex text-3xl">
              <i className="material-icons">manage_accounts</i>
              &nbsp; Management
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/notifications" className="text-white flex text-3xl">
              <i className="material-icons">notifications</i>
              &nbsp; Notifications
            </Link>
          </li>
        </ul>

        <div className="divider my-5"></div>

        <ul className="flex justify-center gap-x-5">
          <li>
            <Link to="/help" className="text-white">
              <i className="material-icons">info</i>
            </Link>
          </li>

          <li>
            <Link to="/settings" className="text-white">
              <i className="material-icons">settings</i>
            </Link>
          </li>

          <li>
            <Link to="/" className="text-white">
              <i className="material-icons">logout</i>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
