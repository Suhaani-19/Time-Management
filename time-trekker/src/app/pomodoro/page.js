"use client"
import { useState, useEffect } from 'react';

export default function Pomodoro() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);  // 25 minutes in seconds
  const [isWork, setIsWork] = useState(true); // Track work or break phase

  // Update the timer every second if it's active
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            setIsWork(!isWork);  // Toggle between work and break phases
            return isWork ? 5 * 60 : 25 * 60;  // Reset timer to 25 mins (work) or 5 mins (break)
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);  // Clean up interval on component unmount
  }, [isActive, timeLeft, isWork]);

  // Format seconds to mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  // Start/Stop the timer
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(isWork ? 25 * 60 : 5 * 60);
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>{isWork ? 'Work Phase' : 'Break Phase'}</p>
      <div>
        <h2>{formatTime(timeLeft)}</h2>
      </div>
      <button onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
