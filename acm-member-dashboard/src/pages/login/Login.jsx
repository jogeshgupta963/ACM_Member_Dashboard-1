import "./Login.css";
import acmlogo from "../../imgs/acmlogo.png";
import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/user";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Logins() {
  const email = useRef("");
  const password = useRef("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      console.log(data);
      dispatch(getUser(data));
      navigate("/");
    } catch (err) {
      console.log(err);
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
              <h1>Login Page</h1>
              <div className="inputs">
                <input
                  ref={email}
                  type="email"
                  placeholder="Email id"
                  className="name"
                />
              </div>
              <div className="second-input inputs">
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="name"
                />
              </div>
              <div onClick={handleSubmit} className="login-button">
                <button>Login</button>
              </div>

              <p className="link">
                <Link to="/register">Don't Have an Account? Register</Link>
              </p>
              <p className="link">
                <Link to="/forgotPassword">Forgot password?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logins;
