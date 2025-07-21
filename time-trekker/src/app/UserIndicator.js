"use client";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase"; // adjust "../" if firebase.js is elsewhere
import { onAuthStateChanged, signOut } from "firebase/auth";
import '../styles/UserIndicator.css';

export default function UserIndicator() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  if (!user) return null;

  // Show first initial of displayName or email
  const display =
    user.displayName?.[0]?.toUpperCase() ||
    user.email?.[0]?.toUpperCase() ||
    "U";

  // (Optional) If photoURL is set, use img instead
  // if (user.photoURL) { ... }

  return (
    <div className="user-indicator" title={user.email}>
      {display}
      <div className="online-dot" />
      <button
        className="logout-btn"
        onClick={() => signOut(auth)}
        title="Logout"
      >
        ⎋
      </button>
    </div>
  );
}
