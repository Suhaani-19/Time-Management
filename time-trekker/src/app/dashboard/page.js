"use client"
import { useTasks } from '../../context/TaskContext';

export default function Dashboard() {
  const { tasks, pomodoros } = useTasks();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <section>
        <h2>Tasks</h2>
        <div className="card-container">
          {tasks.map(t => (
            <div className="card" key={t.id}>{t.content}</div>
          ))}
        </div>
      </section>
      <section>
        <h2>Pomodoros</h2>
        <div className="card-container">
          {pomodoros.map(p => (
            <div className="card" key={p.id}>{p.content}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
