import React from "react";
import "./Certificates.css";
import { UserCard } from "react-ui-cards";
import { CertificatesData } from "../../Data/Data";
import header from "../../imgs/header2.jpeg";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Certificates = () => {
  return (
    <>
      {!Cookies.get("ACM_THAPAR") && <Navigate to="/login" />}
      <div className="container">
        {CertificatesData.map((certificate) => {
          return (
            <>
            <div className="container-certificate">
              <UserCard
                float
                href={certificate.url}
                header={header}
                avatar={certificate.img}
                name={certificate.title}
                className="card"
                style={{ backgroundColor: "rgb(30, 31, 37)",}}
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
