import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import artImage from "../assets/Art.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import "./LoginAndRegister.css";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <div className="containerLeft">
        <div className="image">
          <div className="circle"></div>
          <img
            src={artImage}
            className="Art"
            alt=""
            height="400px"
            width="400px"
          />
        </div>
        <h1 className="Welcome">Welcome aboard my friend</h1>
        <p className="subheading">just a couple of clicks and we start</p>
      </div>
      <div className="containerRight">
        <div className="logincontainer">
          <h1 style={{ marginBottom: "50px" }}>Register</h1>
          <div className="login">
            <div className="emailpass">
              {" "}
              <IoPersonOutline className="icon" />
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="emailpass">
              {" "}
              <MdOutlineEmail className="icon" />
              <input type="text" placeholder="Email"></input>
            </div>
            <div className="emailpass password-container">
              <CiLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="emailpass password-container">
              <CiLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </div>
          <button className="dark">Register</button>
          <p>Have an account?</p>
          <button className="light" onClick={() => goToLogin()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;