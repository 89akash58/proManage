import React, { useState } from "react";
import Column from "./Column";
import "./Board.css";
import { formatDate } from "../utils/Dateformatter";

const Board = () => {
  const columns = [
    { id: "backlog", title: "Backlog" },
    { id: "todo", title: "To do" },
    { id: "in-progress", title: "In progress" },
    { id: "done", title: "Done" },
  ];
  const todayDate = formatDate();

  const [selectedOption, setSelectedOption] = useState("This Week");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="boardmain">
      <div className="boardheading">
        <div className="left-section">
          <h3 className="welcome">Welcome Kumar!</h3>
          <h1 className="Boardname">Board</h1>
        </div>
        <div className="right-section">
          <h4 className="date">{todayDate}</h4>
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            className="dropdown"
          >
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="This Year">This Year</option>
          </select>
        </div>
      </div>
      <div className="board">
        {columns.map((column) => (
          <Column key={column.id} title={column.title} />
        ))}
      </div>
    </div>
  );
};

export default Board;
