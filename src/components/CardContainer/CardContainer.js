// src/CardContainer.js
import React from "react";
import "./CardContainer.css"; // Import the CSS file
import Card from "../Card/Card";

const CardContainer = ({ users, handleAddUser }) => (
  <div className="scrollable-card-list">
    {users?.map((user) => (
      <Card
        key={user.id}
        user={user}
        onClick={() => {
          handleAddUser(user);
        }}
      />
    ))}
  </div>
);

export default CardContainer;
