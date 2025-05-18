import React, { useState } from "react";


export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const now = new Date();

    const diffMs = now - birthDate;

    if (isNaN(diffMs) || diffMs < 0) {
      setAge(null);
      return;
    }

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44); // average month
    const years = Math.floor(days / 365.25); // including leap years

    setAge({
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <label>Enter your date of birth:</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>

      {age && (
        <div className="results">
          <p><strong>Years:</strong> {age.years}</p>
          <p><strong>Months:</strong> {age.months}</p>
          <p><strong>Weeks:</strong> {age.weeks}</p>
          <p><strong>Days:</strong> {age.days}</p>
          <p><strong>Hours:</strong> {age.hours}</p>
          <p><strong>Minutes:</strong> {age.minutes}</p>
          <p><strong>Seconds:</strong> {age.seconds}</p>
        </div>
      )}
    </div>
  );
}


