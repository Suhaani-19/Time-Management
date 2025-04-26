import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TaskLog from './pages/TaskLog'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Help from './pages/Help'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Pomodoro from './pages/Pomodoro' // Import Pomodoro Page
import Navbar from './components/Navbar'

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasklog" element={<TaskLog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pomodoro" element={<Pomodoro />} /> {/* Add Pomodoro route */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
