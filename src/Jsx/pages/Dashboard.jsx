import React from "react";
import NavBar from "./Navbar";
import Board from "./dashboard/Board";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <NavBar></NavBar>
        <Board></Board>
      </div>
    </div>
  );
}

export default Dashboard;
