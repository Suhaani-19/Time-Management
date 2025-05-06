// src/app/pomodoro/page.js (or wherever your pomodoro component is located)
'use client';
import { useState, useEffect } from 'react';
import { useTasks } from '../../context/TaskContext'; // Adjust path if needed

export default function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const { addTask } = useTasks();

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      clearInterval(timer);
      setIsRunning(false);
      addTask({
        id: Date.now(),
        type: 'Pomodoro',
        content: 'Completed Pomodoro session',
        time: new Date().toLocaleString(),
      });
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, addTask]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Pomodoro Timer</h1>
      <h2>{formatTime(timeLeft)}</h2>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer} style={{ marginLeft: '1rem' }}>Reset</button>
    </div>
  );
}
