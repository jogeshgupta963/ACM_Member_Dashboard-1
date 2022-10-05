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
              <UserCard
                float
                href={certificate.url}
                header={header}
                avatar={certificate.img}
                name={certificate.title}
                className="card"
                style={{ backgroundColor: "#7FA8E5" }}
              />
              <UserCard
                float
                href={certificate.url}
                header={header}
                avatar={certificate.img}
                name={certificate.title}
                className="card"
                style={{ backgroundColor: "#7FA8E5" }}
              />
              <UserCard
                float
                href={certificate.url}
                header={header}
                avatar={certificate.img}
                name={certificate.title}
                className="card"
                style={{ backgroundColor: "#7FA8E5" }}
              />
              <UserCard
                float
                href={certificate.url}
                header={header}
                avatar={certificate.img}
                name={certificate.title}
                className="card"
                style={{ backgroundColor: "#7FA8E5" }}
              />
              <UserCard
                float
                href={certificate.url}
                header={header}
                avatar={certificate.img}
                name={certificate.title}
                className="card"
                style={{ backgroundColor: "#7FA8E5" }}
              />
              <UserCard
                float
                href={certificate.url}
                header={header}
                avatar={certificate.img}
                name={certificate.title}
                className="card"
                style={{ backgroundColor: "#7FA8E5" }}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Certificates;
