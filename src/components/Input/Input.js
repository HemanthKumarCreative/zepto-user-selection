import React, { useState } from "react";
import "./Input.css"; // Import the CSS file

const Input = ({
  onFocus,
  inputValue,
  setInputValue,
  users,
  setUsers,
  setFilteredUsers,
}) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      if (users?.length > 0) {
        setFilteredUsers((prevFilteredUsers) => [
          ...prevFilteredUsers,
          users[users?.length - 1],
        ]);
        setUsers(users?.slice(0, users?.length - 1));
      }
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className={`underlined-input ${inputValue && "has-value"}`}
        value={inputValue}
        onChange={handleChange}
        placeholder="Add new user..."
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
