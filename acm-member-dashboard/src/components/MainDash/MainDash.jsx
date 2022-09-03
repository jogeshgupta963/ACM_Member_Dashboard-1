import React from "react";
import Cards from "../Cards/Cards";
import FourCards from "../FourCards/FourCards";
import TwoCards from "../TwoCards/TwoCards";
import Announcements from "../Announcements/Announcements";
import Github from "../Github/Github";

import "./MainDash.css";
import { useSelector } from "react-redux";

const MainDash = () => {
  const {user} = useSelector(state=>state.user)
  console.log(user)
  return (
    
    <div className="MainDash">
      <h1 className="name-maindash" style={{fontSize: "2rem", }}>Hello {user.name}</h1>
      <h1 className="announcements">Announcements</h1>
      <Announcements />
      <h1 className="activeBootcamps">Active Bootcamps</h1>
      <Cards /> 
      <Github />
      <h1 className="activities"></h1>
      <FourCards />
      <TwoCards />
    </div>
 
  );
};

export default MainDash;
