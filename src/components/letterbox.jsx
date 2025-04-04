import { useState } from "react";
import "./letterbox.css"; // Import CSS file

const LetterBox = ({value, onChange, disabled,status}) => {
  const handleInputChange = (e) => {
    const uppercaseValue = e.target.value.toUpperCase(); // Convert input to uppercase
    onChange({ value: uppercaseValue }); // Call onChange with updated value
  
    console.log(status);
  };
  let className = "letter-box"
  if (status === "correct") {
    className += " green"; // Add green class for correct letters
  } else if (status === "wrong-position") {
    className += " yellow"; // Add yellow class for letters in the wrong position
  } else if (status === "incorrect") {
    className += " red"; // Add red class for incorrect letters
  }
  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      disabled={disabled}
      className={className}
      maxLength={1} // Ensure only one letter can be entered
      status={status}
      style={{ textTransform: 'uppercase' }}
    />
  );
};
export default LetterBox;
