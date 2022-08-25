import React from "react";
import Updates from "../Updates/Updates";
//import { RepoCard } from 'react-github-cards/dist/medium';
import 'react-github-cards/dist/medium.css';
import "./RightSide.css";
// <RepoCard username="ACM-Thapar" repo="CS_COURSE_GUIDE" />
const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="rightbar">
        <Updates />
      </div>
      <div className="csCourse">
      
      </div>
    </div>
  );
};

export default RightSide;
