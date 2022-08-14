import React from "react";
import Updates from "../Updates/Updates";
import { UserCard, RepoCard } from 'react-github-cards/dist/medium';
import 'react-github-cards/dist/medium.css';
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="rightbar">
        
        <Updates />
      </div>
      <div>
      <UserCard username="Tusharbecoding" className="medium-theme github-card header"/> </div>
      <div>
      <RepoCard username="ACM-Thapar" repo="CS_COURSE_GUIDE" className="medium-theme github-card header important" />
      </div>
    </div>
  );
};

export default RightSide;
