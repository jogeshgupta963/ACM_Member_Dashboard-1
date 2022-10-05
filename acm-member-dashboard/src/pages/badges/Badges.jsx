import React from "react";
import { useEffect, useState } from "react";
import Badge from "../../components/Badge/Badge";
import "./Badges.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
// import {useSelector} from "react-redux"

function Badges() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {!Cookies.get("ACM_THAPAR") && <Navigate to="/login" />}
      <div className="Badges">
        {user.badges.map((badge) => {
          return <Badge description={badge.description} />;
        })}
      </div>
    </>
  );
}

export default Badges;
