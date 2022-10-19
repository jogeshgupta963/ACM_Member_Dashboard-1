import React from "react";
import Tilt from "react-parallax-tilt";
import "./Contribution.css";

const Contribution = () => {
  return (
    <a href="https://github.com/ACM-Thapar/CS_COURSE_GUIDE" target="__blank">
      <Tilt>
        <div className="cscourseguide">CS_COURSE_GUIDE</div>
      </Tilt>
    </a>
  );
};

export default Contribution;
