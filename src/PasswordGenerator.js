import React, { useState } from "react";
import "./styles.css"; // Import the CSS file

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const generatePassword = () => {
    // Password generation logic based on criteria
    // You can implement this logic here
    // For example, you can use a library like 'password-generator'

    const characters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let validChars = "";

    if (includeLowercase) validChars += characters;
    if (includeUppercase) validChars += characters.toUpperCase();
    if (includeNumbers) validChars += numbers;
    if (includeSpecialChars) validChars += specialChars;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += validChars.charAt(
        Math.floor(Math.random() * validChars.length)
      );
    }

    setPassword(newPassword);
  };
  return (
    <div className="details-box">
      <div style={{ padding: "12px" }}>
        {" "}
        {/* Add padding below the checkboxes */}
        <label
          className="character-length-label"
          style={{ marginBottom: "10px" }}
        >
          Password Length: {length}
        </label>
        <input
          type="range"
          min="6"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
          style={{ padding: "10px" }} // Add padding around the checkbox
        />
        <label
          className="include-uppercase-label"
          style={{ paddingLeft: "8px" }}
        >
          Include Uppercase
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
          style={{ padding: "10px" }} // Add padding around the checkbox
        />
        <label
          className="include-lowercase-label"
          style={{ paddingLeft: "8px" }}
        >
          Include Lowercase
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
          style={{ padding: "10px" }} // Add padding around the checkbox
        />
        <label className="include-numbers-label" style={{ paddingLeft: "8px" }}>
          Include Numbers
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          style={{ padding: "10px" }} // Add padding around the checkbox
        />
        <label
          className="include-specialChars-label"
          style={{ paddingLeft: "10px" }}
        >
          Include Special Characters
        </label>
      </div>
      <button
        onClick={generatePassword}
        style={{
          width: "100%",
          height: "40px", // Make the button full width
          marginLeft: "auto", // Equal margin on the left
          marginRight: "auto",
          marginTop: "24px",
          marginBottom: "24px",
          borderRadius: "5px"
        }}
      >
        Generate Password
      </button>
      <div>
        <label className="generate-password-label">Generated Password:</label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
}
export default PasswordGenerator;
