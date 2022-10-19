import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import Logins from "./pages/login/Login";
import Badges from "./pages/badges/Badges";
import Projects from "./pages/projects/Projects";
import { Outlet } from "react-router";
import React from "react";
import Calendar from "./pages/calendar/Calendar";
import Announcements from "./pages/announcements/Announcements";

import Certificates from "./pages/certificates/Certificates";
import Register from "./pages/register/Register";
import Password from "./pages/ResetLink/Password";
import ForgotPass from "./pages/ForgotPassword/ForgotPass";
import Settings from "./pages/Settings/Settings";

function Nav() {
  return (
    <div>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Outlet />
          <RightSide />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Logins />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgotPassword" element={<Password />} />
        <Route exact path="/user/resetPassword/:id" element={<ForgotPass />} />
        <Route element={<Nav />}>
          <Route path="/" element={<MainDash />} exact />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
