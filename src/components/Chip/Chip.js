import React from "react";
import "./Chip.css";

const Chip = ({ user, onDelete }) => (
  <div className="chip">
    <div className="chip-content">
      <div className="chip-image">
        <img
          src={`https://picsum.photos/40?random=${user.id}`}
          alt={`User ${user.name}`}
        />
      </div>
      <div className="chip-details">
        <p>{user.name}</p>
      </div>
    </div>
    <button className="delete-button" onClick={() => onDelete(user.id)}>
      &#10006;
    </button>
  </div>
);

export default Chip;
