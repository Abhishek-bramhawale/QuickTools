import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let charset = "";
    let guaranteedChars = [];
  
    if (includeUppercase) {
      charset += upper;
      guaranteedChars.push(upper[Math.floor(Math.random() * upper.length)]);
    }
    if (includeLowercase) {
      charset += lower;
      guaranteedChars.push(lower[Math.floor(Math.random() * lower.length)]);
    }
    if (includeNumbers) {
      charset += numbers;
      guaranteedChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (includeSymbols) {
      charset += symbols;
      guaranteedChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  
    if (charset === "") {
      alert("Please select at least one character type.");
      return;
    }
  
    let remainingLength = length - guaranteedChars.length;
    let result = [...guaranteedChars];
  
    for (let i = 0; i < remainingLength; i++) {
      const index = Math.floor(Math.random() * charset.length);
      result.push(charset[index]);
    }
  
    // Shuffle the result to avoid predictable patterns
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
  
    setPassword(result.join(""));
  };
  

  return (
    <div className="password-generator-container">
      <h2>Password Generator</h2>

      <label>Password Length: </label>
      <input
        type="number"
        min="4"
        max="32"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <div><br />
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div><br />

      <button onClick={generatePassword}>Generate Password</button>

      {password && (
        <div className="password-output">
          <strong>Generated Password:</strong>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
