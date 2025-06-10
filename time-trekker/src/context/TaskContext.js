'use client';
import { createContext, useState, useEffect, useContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [pomodoros, setPomodoros] = useState([]);

  // Load tasks and pomodoros from local storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const savedPomodoros = JSON.parse(localStorage.getItem('pomodoros')) || [];
    setTasks(savedTasks);
    setPomodoros(savedPomodoros);
  }, []);

  // Save to local storage whenever tasks or pomodoros change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('pomodoros', JSON.stringify(pomodoros));
  }, [tasks, pomodoros]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, newContent, newDescription) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, content: newContent, description: newDescription } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const addPomodoro = (pomodoro) => {
    setPomodoros([...pomodoros, pomodoro]);
  }
  const updatePomodoro = (id, updatedText) => {
  setPomodoros(prev =>
    prev.map(p => (p.id === id ? { ...p, content: updatedText } : p))
  );
};

const deletePomodoro = (id) => {
  setPomodoros(prev => prev.filter(p => p.id !== id));
};


  return (
  <TaskContext.Provider
    value={{
      tasks,
      pomodoros,
      addTask,
      editTask,
      deleteTask,     // ← add this
      addPomodoro,
      updatePomodoro,
      deletePomodoro, // ← add this
    }}
  >
    {children}
  </TaskContext.Provider>
);

};

// Custom hook to use TaskContext
export const useTasks = () => {
  return useContext(TaskContext);
};
