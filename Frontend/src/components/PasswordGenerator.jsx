import React, { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setPassword(result);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Password Generator</h2>

      <label>Enter password length:</label>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        min="4"
        max="20"
        style={{ display: "block", margin: "10px 0" }}
      />

      <button onClick={generatePassword}>Generate Password</button>

      {password && (
        <div style={{ marginTop: "20px" }}>
          <strong>Your Password:</strong>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
}
