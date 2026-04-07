"use client"
import Link from 'next/link';
import '../styles/Sidebar.css';


export default function Sidebar() {
  return (

    <div className="sidebar">
      <Link href="/">🏠</Link>
      <Link href="/dashboard">📊</Link>
      <Link href="/tasklog">📝</Link>
      <Link href="/pomodoro">⏱️</Link>
      <Link href="/about">ℹ️</Link>
    </div>
  );
}
