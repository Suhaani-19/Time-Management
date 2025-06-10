// src/app/tasklog/page.js
"use client";
import { useState } from "react";
import { useTasks } from "../../context/TaskContext";

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
    <div>
      <h2>Task Log</h2>
      <form onSubmit={handleAdd}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task title"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Task description"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks
          .filter((task) => task.type === "TaskLog")
          .map((task) => (
            <li key={task.id}>
              <input
                value={task.content}
                onChange={(e) => handleUpdate(task.id, "content", e.target.value)}
              />
              <textarea
                value={task.description || ""}
                onChange={(e) => handleUpdate(task.id, "description", e.target.value)}
              />
              <small>{task.time}</small>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

