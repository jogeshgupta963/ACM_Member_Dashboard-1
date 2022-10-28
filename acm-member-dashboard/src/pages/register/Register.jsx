import "../login/Login.css";
import acmlogo from "../../imgs/acmlogo.png";
import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/user";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Register() {
  const email = useRef("");
  const name = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email.current.value.includes("@thapar.edu")) {
        const { data } = await axios.post("/auth/", {
          name: name.current.value,
          email: email.current.value,
        });
        console.log(data);
        dispatch(getUser(data));
        navigate("/");
      }
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
              <h1>Register Page</h1>
              <div className="inputs">
                <input
                  ref={name}
                  type="text"
                  placeholder="Name(Keep it formal)"
                  className="name"
                />
              </div>
              <div className="inputs">
                <input
                  ref={email}
                  type="email"
                  placeholder="Email id"
                  className="name"
                />
              </div>

              <div onClick={handleSubmit} className="login-button">
                <button>Register</button>
              </div>

              <p className="link">
                <a href="/forgotPassword">Forgot password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
