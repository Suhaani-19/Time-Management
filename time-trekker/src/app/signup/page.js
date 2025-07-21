// src/app/signup/page.js
"use client";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import '../../styles/Signup.css';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Optionally set user's display name:
      await updateProfile(userCredential.user, { displayName: name });
      alert("Signup Successful! You can now log in.");
      // Optionally redirect here
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main>
      <div className="signup-container">
        <h1>Signup</h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <input className="signup-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
          <input className="signup-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="signup-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="signup-btn" type="submit">Create Account</button>
          {error && <div style={{ color: "salmon", marginTop: 8 }}>{error}</div>}
        </form>
      </div>
    </main>
  );
}
