"use client";
import React from 'react';

export default function Help() {
  const handleContact = () => {
    alert("Redirecting to support...");
  };

  return (
    <main>
      <h1>Help</h1>
      <p>If you have questions, please reach out.</p>
      <button onClick={handleContact}>Contact Support</button>
    </main>
  );
}
