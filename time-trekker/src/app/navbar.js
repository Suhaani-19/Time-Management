"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/Navbar.css";
import UserIndicator from "./UserIndicator"; // Import the indicator
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  // Track user for hiding login/signup links when logged in
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Image src="/logo.png" alt="TimeTrekker Logo" width={40} height={40} />
        <span className="title">TimeTrekker</span>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/tasklog">Task Log</Link></li>
        <li><Link href="/pomodoro">Pomodoro</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/help">Help</Link></li>
        {/* Show Login/Signup ONLY when not logged in */}
        {!user && (
          <>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/signup">Signup</Link></li>
          </>
        )}
      </ul>
      <UserIndicator />
    </div>
  );
}
