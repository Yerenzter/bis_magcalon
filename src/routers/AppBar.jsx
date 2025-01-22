import { Outlet } from "react-router-dom";

// COMMITED NA!

export default function AppBar() {
  return (
    <>
      <div className="w-full fixed left-0 right-0 p-3 bg-green-600 z-50 flex justify-end">
        <span className="text-4xl text-white">Hi, Admin</span>
      </div>
      <Outlet />
    </>
  );
}