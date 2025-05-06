// / src/app/navbar.js
"use client";
import Link from "next/link";
import Image from "next/image";
import "../styles/Navbar.css";
export default function Navbar() {
return (
<nav className="navbar">
<div className="navbar-brand">
<Image
src="/logo.png" // Replace with your actual logo path
alt="Logo"
width={40}
height={40}
/>
<span className="brand-text">Time-Trekker</span>
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
</nav>
);
}