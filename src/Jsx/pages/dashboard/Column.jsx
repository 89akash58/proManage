// src/components/Column.js
import React from "react";
import Card from "./Card";
import "./Column.css";
import { VscCollapseAll } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";

const Column = ({ title }) => {
  const cards = [
    { id: 1, title: "Hero section", priority: "high", dueDate: "Feb 10th" },
    {
      id: 2,
      title: "Typography change",
      priority: "moderate",
      dueDate: "Feb 10th",
    },
  ];

  return (
    <div className="column">
      <div className="titleandcollapse">
        <h2>{title}</h2>
        <div className="addandcollapse">
          <IoIosAdd className="addicon" />
          <VscCollapseAll className="collapseicon" />
        </div>
      </div>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Column;
