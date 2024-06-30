import React from "react";
import "./Navbar.css";
import sandImage from "../assets/codesandbox.png";
import { IoLogOutOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const gotoDashboard = () => {
    navigate("./");
  };
  const gotoSetting = () => {
    navigate("./setting");
  };
  return (
    <div className="navbar">
      <div className="brand">
        <img src={sandImage} alt="" className="logo" />
        <h4>Pro Manage</h4>
      </div>
      <div className="list">
        <button className="items" onClick={() => gotoDashboard()}>
          <MdOutlineSpaceDashboard className="icons" />
          board
        </button>

        <button className="items">
          <GoDatabase className="icons" />
          Analytics
        </button>

        <button className="items" onClick={() => gotoSetting()}>
          <CiSettings className="icons" />
          Settings
        </button>
      </div>
      <div className="logout">
        <button className="logoutbutton">
          <IoLogOutOutline className="log" />
          Log out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
