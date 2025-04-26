import React, { useState } from 'react';

const TaskLog = () => {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !startTime || !endTime) {
      alert('Please fill in all fields');
      return;
    }

    // Add the task to the tasks array
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      start: startTime,
      end: endTime,
      duration: calculateDuration(startTime, endTime),
    };

    setTasks([...tasks, newTask]);

    // Clear the input fields
    setTaskName('');
    setStartTime('');
    setEndTime('');
  };

  // Function to calculate the duration
  const calculateDuration = (start, end) => {
    const startDate = new Date(`2025-01-01T${start}:00`);
    const endDate = new Date(`2025-01-01T${end}:00`);
    const duration = (endDate - startDate) / 1000 / 60; // Duration in minutes
    return duration;
  };

  return (
    <div className="task-log">
      <h2>Task Log</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
          />
        </div>
        <div>
          <label>Start Time (HH:MM):</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label>End Time (HH:MM):</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <button type="submit">Log Task</button>
      </form>

      <h3>Logged Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks logged yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.name}</strong> - {task.start} to {task.end} (
              {task.duration} minutes)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskLog;
