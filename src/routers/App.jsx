import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Help,
  Home,
  ManageAccounts,
  Management,
  ManageResidents,
  Notifications,
  Profile,
  RegisterAccount,
  RegisterResident,
  Registration,
  Settings,
} from "../components";
import Sidenav from "./Sidenav";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/" element={<Sidenav />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registration" element={<Registration />} />
          <Route path="management" element={<Management />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="registration/resident" element={<RegisterResident />} />
          <Route path="registration/account" element={<RegisterAccount />} />
          <Route path="management/residents" element={<ManageResidents />} />
          <Route
            path="management/residents/profile/:id"
              element={<Profile ideal={window.location.pathname.match(/[0-9]/)}/>}
          />
          <Route path="management/accounts" element={<ManageAccounts />} />
          <Route path="help" element={<Help />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
