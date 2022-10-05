import React, { useState } from "react";
import Cards from "../Cards/Cards";
import FourCards from "../FourCards/FourCards";
import TwoCards from "../TwoCards/TwoCards";
import Announcements from "../Announcements/Announcements";
import Github from "../Github/Github";

import "./MainDash.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { getUser } from "../../redux/user";

const MainDash = () => {
  const { user } = useSelector((state) => state.user);
  const [announcement, setAnnouncement] = useState([]);
  const [projects, setProjects] = useState(0);
  const dispatch = useDispatch();
  let cardUp = [
    {
      value: "Announcement",
      count: announcement.length,
    },
    {
      value: "Badges",
      count: user.badges.length,
    },
  ];
  let cardDown = [
    {
      value: "Certificates",
      count: user.certificates.length,
    },
    {
      value: "Projects",
      count: projects,
    },
  ];
  const fetchCount = async () => {
    try {
      const { data } = await axios.get("/announcement");
      const project = await axios.get("/project");
      setAnnouncement(data);
      setProjects(project.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUser = async () => {
    const { data } = await axios.get("/auth/");

    dispatch(getUser(data));
  };

  useEffect(() => {
    fetchCount();
    fetchUser();
  }, []);
  return (
    <>
      {!Cookies.get("ACM_THAPAR") && <Navigate to="/login" />}
      <div className="MainDash">
        <h1 className="name-maindash" style={{ fontSize: "2rem" }}>
          Hello {user.name}
        </h1>
        <h1 className="announcements">Announcements</h1>
        {announcement.length > 0 && (
          <Announcements announcement={announcement} />
        )}
        <h1 className="activeBootcamps">Active Bootcamps</h1>
        <Cards />
        <Github />
        <h1 className="activities"></h1>
        <FourCards dashData={cardUp} />
        <TwoCards dashData={cardDown} />
      </div>
    </>
  );
};

export default MainDash;
