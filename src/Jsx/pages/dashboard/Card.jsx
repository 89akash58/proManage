// src/components/Card.js
import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className={`card ${card.priority}`}>
      <div className="dotsbtn">
        <button className="dots">...</button>
      </div>
      <h3>{card.title}</h3>
      <p>Due: {card.dueDate}</p>
      <div className="herosectionbtn">
        <button className="hero_section_button">PROGRESS</button>
        <button className="hero_section_button">TO-DO</button>
        <button className="hero_section_button">DONE</button>
      </div>
    </div>
  );
};

export default Card;
