import "../login/Login.css";
import acmlogo from "../../imgs/acmlogo.png";
import axios from "axios";
import { useRef } from "react";

import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";

function ForgotPass() {
  const pass = useRef("");
  const conPass = useRef("");
  const navigate = useNavigate();
  const [sent, setSent] = useState(0);
  const { id } = useParams();
  const resetPassword = async () => {
    try {
      if (pass.current.value !== conPass.current.value) {
        console.log("Passwords dont match");
      }
      const { data } = await axios.post(`/auth/resetPassword/${id}`, {
        password: pass.current.value,
      });
      if (data) {
        navigate("/login");
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
              <h1>Reset Password</h1>

              <div className="inputs">
                <input
                  ref={pass}
                  type="password"
                  placeholder="Password"
                  className="name"
                />
              </div>
              <div className="inputs">
                <input
                  ref={conPass}
                  type="password"
                  placeholder="confirm password"
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

export default ForgotPass;
