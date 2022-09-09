import React from "react";
import "./Announcements.css";

const Announcements = ({ announcement }) => {
  return (
    <div className="aContainer">
      <div className="section1 section">
        {/* <h4>{announcement[announcement.length - 1].heading}</h4> */}
        <h4>{announcement[announcement.length - 1].heading}</h4>
        <p className="info">{announcement[announcement.length - 1].date}</p>
        <p>{announcement[announcement.length - 1].venue}</p>
      </div>
      <div className="section2 section">
        <h4>{announcement[announcement.length - 2].heading}</h4>
        <p className="info">{announcement[announcement.length - 2].date}</p>
        <p>{announcement[announcement.length - 2].venue}</p>
      </div>
      <div className="section3 section">
        <h4>{announcement[announcement.length - 3].heading}</h4>
        <p className="info">{announcement[announcement.length - 3].date}</p>
        <p>{announcement[announcement.length - 3].venue}</p>
      </div>
    </div>
  );
};

export default Announcements;
