import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(130 * 60); // 130 minutes in seconds
  const [isPaused, setIsPaused] = useState(false);

  // Format time to HH:MM:SS
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let timer;
    if (!isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            // Handle exam submission when time is up
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused, timeLeft]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="timer-container">
      <div className={`timer ${isPaused ? "paused" : ""}`}>
        <span className="time-display">{formatTime(timeLeft)}</span>
        <button
          className="pause-button"
          onClick={togglePause}
          aria-label={isPaused ? "Resume Timer" : "Pause Timer"}
        >
          {isPaused ? "▶" : "⏸"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
