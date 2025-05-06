// src/app/dashboard/page.js
'use client';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext' // Assuming you're using TaskContext

export default function Dashboard() {
  const { tasks, pomodoros } = useContext(TaskContext);  // Retrieve tasks and pomodoros

  return (
    <div>
      <h1>Dashboard</h1>

      <section>
        <h2>Task Log</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.content}
              <small>{task.time}</small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Pomodoro Sessions</h2>
        <ul>
          {pomodoros.map((session) => (
            <li key={session.id}>
              {session.content}
              <small>{session.time}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
