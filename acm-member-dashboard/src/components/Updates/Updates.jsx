import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const Updates = () => {
  const { user } = useSelector((state) => state.user);

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
                <div className="details" style={{ marginBottom: "0.5rem" }}>
                  <span
                    className="name-updates"
                    style={{ marginRight: "0.2rem" }}
                  >
                    {user.name}
                  </span>
                  <p>About</p>
                  <div className="about-box">
                    <textarea
                      name="about"
                      className="about"
                      disabled
                      cols="30"
                      rows="10"
                    >
                      {user.about}
                    </textarea>
                  </div>

                  <p>Socials</p>
                  <div className="social-icons">
                    <a
                      href={user.socials[0]}
                      rel="noreferrer"
                      style={{ color: "black" }}
                    >
                      <AiFillGithub style={{ height: 40, width: 40 }} />
                    </a>
                    <a
                      href={user.socials[1]}
                      rel="noreferrer"
                      style={{ color: "#00acee" }}
                    >
                      <AiFillTwitterCircle
                        url={user.socials[2]}
                        style={{ height: 40, width: 40 }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tushar-chopra-960532215/"
                      rel="noreferrer"
                      target="_blank"
                      style={{ color: "#0077b5" }}
                    >
                      <AiFillLinkedin
                        url="https://twitter.com/TusharC29050031"
                        style={{ height: 40, width: 40 }}
                      />
                    </a>
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
