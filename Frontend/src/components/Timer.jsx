import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft === 0) {
      setIsTimeUp(true);
      setIsRunning(false);
      if (audioRef.current) {
        audioRef.current.play();
      }
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isRunning]);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const handleStart = () => {
    const totalSeconds =
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(seconds, 10);

    if (
      isNaN(totalSeconds) ||
      totalSeconds <= 0 ||
      parseInt(minutes, 10) > 59 ||
      parseInt(seconds, 10) > 59
    ) {
      alert("Please enter a valid time (minutes and seconds should be 0-59).");
      return;
    }

    setTimeLeft(totalSeconds);
    setIsTimeUp(false);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setIsTimeUp(false);
    setHours("0");
    setMinutes("0");
    setSeconds("0");
  };

  return (
    <div className="currency-converter-container" style={{ maxWidth: 400 }}>
      <h2>Countdown Timer</h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Hours:{" "}
          <input
            type="number"
            min="0"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            disabled={isRunning}
            style={{ width: 60, marginRight: 10 }}
          />
        </label><br />

        <label>
          Minutes:{" "}
          <input
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            disabled={isRunning}
            style={{ width: 60, marginRight: 10 }}
          />
        </label><br />

        <label>
          Seconds:{" "}
          <input
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            disabled={isRunning}
            style={{ width: 60 }}
          />
        </label>
      </div>

      <button
        onClick={handleStart}
        disabled={isRunning}
        style={{ marginRight: 10 }}
      >
        Start
      </button><br /><br />

      <button onClick={handleReset} disabled={!isRunning && timeLeft === 0}>
        Reset
      </button>

      <div
        className="currency-output"
        style={{ textAlign: "center", fontSize: "1.8rem", marginTop: "1.5rem" }}
      >
        {isTimeUp ? "Time’s up!" : formatTime(timeLeft)}
      </div>

      <audio
  ref={audioRef}
  src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
  preload="auto"
/>
    </div>
  );
};

export default Timer;
