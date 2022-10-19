import React from "react";
import "./Certificates.css";
import { UserCard } from "react-ui-cards";
import { CertificatesData } from "../../Data/Data";
import avatar from "../../imgs/acmlogo.png";
import header from "../../imgs/header2.jpeg";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Certificates = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {!Cookies.get("ACM_THAPAR") && <Navigate to="/login" />}
      <div className="container">
        {user.certificates.map((certificate) => {
          return (
            <>
              <div className="container-certificate">
                <UserCard
                  float
                  href={certificate.url}
                  header={header}
                  avatar={avatar}
                  name={certificate.title}
                  className="card"
                  style={{ backgroundColor: "rgb(30, 31, 37)" }}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Certificates;
