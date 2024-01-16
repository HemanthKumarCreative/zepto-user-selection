import React, { useState } from "react";
import "./Input.css"; // Import the CSS file

const Input = ({ onFocus, onBlur }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
        // onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
