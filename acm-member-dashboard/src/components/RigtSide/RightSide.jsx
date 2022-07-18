import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
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
      <UserCard username="Tusharbecoding" />
      </div>
    </div>
  );
};

export default RightSide;
