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
        <Route element={<Nav />}>
          <Route path="/" element={<MainDash />} exact />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
