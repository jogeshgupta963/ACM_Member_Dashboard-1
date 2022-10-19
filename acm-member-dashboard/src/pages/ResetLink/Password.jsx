import "../login/Login.css";
import acmlogo from "../../imgs/acmlogo.png";
import axios from "axios";
import { useRef } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";

function Password() {
  const email = useRef("");
  const [sent, setSent] = useState(0);
  const resetPassword = async () => {
    try {
      const { data } = await axios.post("/auth/forgot-password", {
        email: email.current.value,
      });
      if (data) {
        setSent(1);
      }
    } catch (error) {
      setSent(0);
    }
  };

  return (
    <>
      {Cookies.get("ACM_THAPAR") && <Navigate to="/" />}
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={acmlogo} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Forgot Password</h1>
              <div className="inputs">
                <input
                  ref={email}
                  type="email"
                  placeholder="Email id"
                  className="name"
                />
              </div>
              <div onClick={resetPassword} className="login-button">
                <button>Reset Password</button>
              </div>
              {sent ? (
                <>
                  <div>
                    <p>An email has been sent to you to change your password</p>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
