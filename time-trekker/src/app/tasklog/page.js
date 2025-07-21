"use client";
import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import '../../styles/TaskLog.css';

export default function TaskLog() {
  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask({
        id: Date.now(),
        type: "TaskLog",
        content: input,
        description: desc,
        time: new Date().toLocaleString(),
      });
      setInput("");
      setDesc("");
    }
  };

  const handleUpdate = (id, field, value) => {
    updateTask(id, field, value);
  };

  return (
    <div className="tasklog-container">
      <h2>Task Log</h2>
      <form className="tasklog-form" onSubmit={handleAdd}>
        <input
          className="tasklog-input"
          style={{height:'58px', minHeight:'58px', maxHeight:'140px'}}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task title"
        />
        <textarea
          className="tasklog-desc"
          style={{height:'58px', minHeight:'58px', maxHeight:'140px', resize:'none'}}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Task description"
        />
        <button className="tasklog-addbtn" type="submit">Add</button>
      </form>

      <ul className="tasklog-list">
        {tasks
          .filter((task) => task.type === "TaskLog")
          .map((task) => (
            <li className="tasklog-card" key={task.id}>
              <input
                className="tasklog-input"
                value={task.content}
                onChange={(e) => handleUpdate(task.id, "content", e.target.value)}
              />
              <textarea
                className="tasklog-desc"
                value={task.description || ""}
                onChange={(e) => handleUpdate(task.id, "description", e.target.value)}
              />
              <small className="tasklog-time">{task.time}</small>
              <button
                className="tasklog-delbtn"
                onClick={() => deleteTask(task.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
