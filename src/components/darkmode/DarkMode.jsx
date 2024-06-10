import React from "react";
import "./DarkMode.css";

const DarkMode = ({ handleChange, isChecked }) => {
  return (
    <div className="dark-mode">
      <input
        type="checkbox"
        id="check"
        className="dark"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};

export default DarkMode;
