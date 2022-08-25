import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";
import { SocialIcon } from 'react-social-icons';


const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <>
          <div className="banner">
            <img src={update.banner} alt="" />
          </div>
          <div className="update">
            <img src={update.img} alt="profile" />
            <div className="noti">
              <div className="details" style={{marginBottom: '0.5rem'}}>
                <span className="name">{update.name}</span>
                <p>About</p>
                <div className="about-box">
                <span className="about"> {update.about}</span></div>                
                <p>Socials</p>
                <div className="social-icons">
                  <SocialIcon url="https://twitter.com/TusharC29050031" style={{height: 40, width: 40}} />
                  <SocialIcon url="https://github.com/Tusharbecoding" style={{height: 40, width: 40, marginLeft: 10}} />
                  <SocialIcon url="https://www.linkedin.com/in/tushar-chopra-960532215/" style={{height: 40, width: 40, marginLeft: 10}} />
                </div>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
};

export default Updates;
