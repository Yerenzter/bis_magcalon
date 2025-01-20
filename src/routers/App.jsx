import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Appearance,
  Dashboard,
  Feedback,
  Help,
  Home,
  ManageAccounts,
  Management,
  ManageResidents,
  Notifications,
  Profile,
  RegisterAccount,
  RegisterResident,
  RegisterResidentBulk,
  Registration,
  Settings,
} from "../components";
import Sidenav from "./Sidenav";
import AppBar from "./AppBar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/" element={<AppBar/>}>
        <Route
          path="/"
          element={
            <Sidenav/>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registration" element={<Registration />} />
          <Route path="management" element={<Management />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="registration/resident" element={<RegisterResident />} />
          <Route path="registration/account" element={<RegisterAccount />} />
          <Route path="management/residents" element={<ManageResidents />} />
          <Route
            path="management/residents/profile/:id"
            element={
              <Profile ideal={window.location.pathname.match(/[0-9]/)} />
            }
          />
          <Route path="management/accounts" element={<ManageAccounts />} />
          <Route path="help" element={<Help />} />
          <Route path="help/about" element={<About />} />
          <Route path="help/feedback" element={<Feedback />} />
          <Route path="settings" element={<Settings />} />
          <Route path="settings/themes" element={<Appearance />} />
        </Route>
        </Route>
      </Routes>

      <Routes>
        <Route
          path="registration/resident/bulk"
          element={<RegisterResidentBulk />}
        />
      </Routes>
    </BrowserRouter>
  );
}
