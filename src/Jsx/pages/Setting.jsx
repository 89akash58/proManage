import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Setting() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="container">
        <div className="Setting">
          <h1 style={{ margin: "40px", fontSize: "20px" }}>Settings</h1>
          <div className="login">
            <div className="emailpass">
              {" "}
              <IoPersonOutline className="icon" />
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="emailpass">
              {" "}
              <MdOutlineEmail className="icon" />
              <input type="text" placeholder="Update Email"></input>
            </div>
            <div className="emailpass password-container">
              <CiLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Old Password"
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="emailpass password-container">
              <CiLock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </div>
          <button className="dark" style={{ marginLeft: "50px" }}>
            update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
