"use client";
import { useState, useEffect } from 'react';
import { useTasks } from '../../context/TaskContext';
import '../../styles/Pomodoro.css';

export default function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const { pomodoros, addPomodoro, updatePomodoro, deletePomodoro } = useTasks();

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      addPomodoro({
        id: Date.now(),
        content: 'Completed Pomodoro session',
        time: new Date().toLocaleString(),
      });
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="pomodoro-container">
      <h1 className="pomodoro-title">Pomodoro Timer</h1>
      <div className="clock">{formatTime(timeLeft)}</div>
      <div className="controls">
        <button onClick={() => setIsRunning(prev => !prev)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={() => {
          setIsRunning(false);
          setTimeLeft(25 * 60);
        }}>
          Reset
        </button>
      </div>

      <section className="pomodoro-info">
        <h2>What is Pomodoro?</h2>
        <p className="pomodoro-desc">
          The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
          It uses a timer to break work into intervals—typically 25 minutes—separated by short breaks.
          These intervals are known as “Pomodoros.” After completing four Pomodoros, take a longer break.
          This technique boosts focus, productivity, and mental clarity.
        </p>
      </section>

      <h2 className="history-title">Completed Pomodoros</h2>
      <ul className="pomodoro-list">
        {pomodoros.map((p) => (
          <li className="pomodoro-history-item" key={p.id}>
            {editingId === p.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => {
                  updatePomodoro(p.id, editText);
                  setEditingId(null);
                }}>Save</button>
              </>
            ) : (
              <>
                <strong>{p.content}</strong>
                <small> - {p.time}</small>
                <button onClick={() => {
                  setEditText(p.content);
                  setEditingId(p.id);
                }}>Edit</button>
                <button onClick={() => deletePomodoro(p.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
