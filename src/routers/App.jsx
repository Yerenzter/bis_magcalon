import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Appearance,
  Client,
  Dashboard,
  Feed,
  Feedback,
  Help,
  Home,
  ManageAccounts,
  ManageFeeds,
  Management,
  ManageResidents,
  Notifications,
  Profile,
  RegisterAccount,
  RegisterResident,
  RegisterResidentBulk,
  Registration,
  Requests,
  Settings,
} from "../components";
import Sidenav from "./Sidenav";
import AppBar from "./AppBar";
import AppBarClient from "./AppBarClient";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/" element={<AppBar />}>
          <Route path="/" element={<Sidenav />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="registration" element={<Registration />} />
            <Route path="management" element={<Management />} />
            <Route path="notifications" element={<Notifications />} />
            <Route
              path="registration/resident"
              element={<RegisterResident />}
            />
            <Route path="registration/account" element={<RegisterAccount />} />
            <Route path="management/residents" element={<ManageResidents />} />
            <Route
              path="management/residents/profile/:id"
              element={
                <Profile ideal={window.location.pathname.match(/[0-9]/)} />
              }
            />
            <Route path="management/accounts" element={<ManageAccounts />} />
            <Route path="management/feeds" element={<ManageFeeds />} />
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

      <Routes>
        <Route element={<AppBarClient />}>
          <Route path="client" element={<Client />} />
          <Route path="client/requests" element={<Requests />} />
          <Route path="client/feed" element={<Feed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
