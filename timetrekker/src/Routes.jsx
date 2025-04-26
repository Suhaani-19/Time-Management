// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import TaskLog from './pages/TaskLog'; // TaskLog page
import Dashboard from './pages/Dashboard'; // Dashboard page
import About from './pages/About'; // About page
import Help from './pages/Help'; // Help page
import Login from './pages/Login'; // Login page
import Signup from './pages/Signup'; // Signup page
import Pomodoro from './pages/Pomodoro'; // Pomodoro page
import Navbar from './components/Navbar'; // Navbar component

const AppRoutes = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will be shown on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasklog" element={<TaskLog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
