// app/Navbar.js or app/navbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UserIndicator from "./UserIndicator";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const hideMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Image
          src="/logo.png"
          alt="TimeTrekker Logo"
          width={40}
          height={40}
          className="navbar-logo logo-glass" // <-- ADD logo-glass HERE
        />
        <span className="title neon-glass">TimeTrekker</span>
      </div>

      {/* Hamburger menu button (visible only on mobile) */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
        <li onClick={hideMenu}><Link href="/">Home</Link></li>
        <li onClick={hideMenu}><Link href="/dashboard">Dashboard</Link></li>
        <li onClick={hideMenu}><Link href="/tasklog">Task Log</Link></li>
        <li onClick={hideMenu}><Link href="/pomodoro">Pomodoro</Link></li>
        <li onClick={hideMenu}><Link href="/about">About</Link></li>
        <li onClick={hideMenu}><Link href="/help">Help</Link></li>
        <li onClick={hideMenu}><Link href="/login">Login</Link></li>
        <li onClick={hideMenu}><Link href="/signup">Signup</Link></li>
      </ul>
      <UserIndicator />
    </div>
  );
}
