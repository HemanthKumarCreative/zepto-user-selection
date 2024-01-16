// Card.js
import React from "react";
import "./Card.css"; // Import the CSS file

const Card = ({ user, onClick }) => (
  <div className="user-card" onClick={onClick}>
    <div className="user-image">
      <img
        src={`https://picsum.photos/50?random=${user.id}`}
        alt={`User ${user.name}`}
      />
    </div>
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  </div>
);

export default Card;
