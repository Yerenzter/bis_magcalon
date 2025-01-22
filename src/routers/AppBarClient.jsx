import { Link, Outlet } from "react-router-dom";

export default function AppBarClient() {
  return (
    <>
      <div className="w-full fixed right-0 p-3 row bg-green-600 z-50">
        <div className="col s6 text-left">
          <span className="text-4xl text-white">Hi, User</span>
        </div>
        <div className="col s6 text-right">
          <Link to="/" className="text-4xl text-white text-right">
            <span className="material-icons">logout</span>
          </Link>
        </div>
      </div>

      <Outlet />
    </>
  );
}
