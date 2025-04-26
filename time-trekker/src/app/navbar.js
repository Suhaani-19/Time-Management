import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/tasklog">Task Log</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/help">Help</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">Signup</Link></li>
        <li><Link href="/pomodoro">Pomodoro</Link></li>
      </ul>
    </nav>
  );
}
