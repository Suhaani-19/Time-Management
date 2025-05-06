'use client';
import { useState } from 'react';
import { useTasks } from '../../context/TaskContext';

export default function TaskLog() {
  const { tasks, addTask, editTask, deleteTask } = useTasks(); // Added deleteTask and editTask
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && description.trim()) {
      if (editingId) {
        // If editing, update the task
        editTask(editingId, input, description);
        setEditingId(null);
      } else {
        // If not editing, add a new task
        addTask({ id: Date.now(), type: 'TaskLog', content: input, description, time: new Date().toLocaleString() });
      }
      setInput('');
      setDescription('');
    }
  };

  const handleEdit = (id, content, description) => {
    setEditingId(id);
    setInput(content);
    setDescription(description);
  };

  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <div>
      <h2>Task Log</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
        />
        <button type="submit">{editingId ? 'Save' : 'Add'} Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.content}</h3>
            <p>{task.description}</p>
            <small>{task.time}</small>
            <button onClick={() => handleEdit(task.id, task.content, task.description)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
