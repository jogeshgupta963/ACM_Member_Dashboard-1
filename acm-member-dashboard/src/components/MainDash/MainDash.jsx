import React from "react";
import Cards from "../Cards/Cards";
import FourCards from "../FourCards/FourCards";
import TwoCards from "../TwoCards/TwoCards";
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
      <h1 className="activities">Activities</h1>
      <FourCards />
      <TwoCards />
    </div>
  );
};

export default MainDash;
