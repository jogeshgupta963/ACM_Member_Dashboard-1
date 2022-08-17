import React from "react";
import Cards from "../Cards/Cards";
import Announcements from "../Announcements/Announcements";
import Github from "../Github/Github";

import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1 className="name">Hello Tushar</h1>
      <h1 className="announcements">Announcements</h1>
      <Announcements />
      <h1 className="activeBootcamps">Active Bootcamps</h1>
      <Cards /> 
      <Github />
      
    </div>
  );
};

export default MainDash;
