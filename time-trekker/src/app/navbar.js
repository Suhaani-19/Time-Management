"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/Navbar.css";

export default function Navbar() {
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
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">Signup</Link></li>
      </ul>
    </div>
  );
}
