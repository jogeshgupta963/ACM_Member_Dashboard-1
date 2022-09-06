import React from "react";
import Tilt from "react-parallax-tilt";
import "./Badge.css";

function Badge({ description }) {
  return (
    <div>
      <Tilt>
        <div className="Badge">
            <p>{description}</p>
        </div>
      </Tilt>
    </div>
  );
}

export default Badge;
