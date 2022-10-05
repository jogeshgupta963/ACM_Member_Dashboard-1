import React from "react";
import Updates from "../Updates/Updates";
import { RepoCard } from 'react-github-cards/dist/medium';
import 'react-github-cards/dist/medium.css';
import "./RightSide.css";
import Cookies from "js-cookie";
import Contribution from "../Contribution/Contribution";
import { UserCard } from 'react-ui-cards';
// <RepoCard username="ACM-Thapar" repo="CS_COURSE_GUIDE" />
const RightSide = () => {
  return (
    <>
      <div className="RightSide">
        <div className="rightbar">
          <Updates />
        </div>
        <div className="csCourse">
        <UserCard 
        float
        href="https://github.com/ACM-Thapar/CS_COURSE_GUIDE"
        name="CS_COURSE_GUIDE" 
        className="card"
        style={{backgroundColor: '#7FA8E5', width: '100px', marginRight: '10px', marginLeft: '0px', borderRadius: '15px', height: '100px'}}
        />
        </div>
      </div>
    </>
  );
};

export default RightSide;
