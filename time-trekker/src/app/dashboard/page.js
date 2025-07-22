"use client";
import { useTasks } from "../../context/TaskContext";

// Optionally import Dashboard.css, or rely on global/globals.css
import '../../styles/Dashboard.css';


export default function Dashboard() {
  const { tasks, pomodoros } = useTasks();

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      <section>
        <h2>Tasks</h2>
        <div className="card-container">
          {tasks?.length ? (
            tasks.map((t) => (
              <div className="card" key={t.id}>
                {t.content}
              </div>
            ))
          ) : (
            <div style={{ opacity: 0.7, fontStyle: "italic", fontSize: "1.1em", minWidth:220 }}>
              No tasks yet.
            </div>
          )}
        </div>
      </section>

      <section>
        <h2>Pomodoros</h2>
        <div className="card-container">
          {pomodoros?.length ? (
            pomodoros.map((p) => (
              <div className="card" key={p.id}>
                {p.content}
              </div>
            ))
          ) : (
            <div style={{ opacity: 0.7, fontStyle: "italic", fontSize: "1.1em", minWidth:220 }}>
              No pomodoros yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
