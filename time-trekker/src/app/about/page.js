"use client";
import React from 'react';

export default function About() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      flexDirection: 'column',
      padding: '2rem',
      color: '#1a3d2d'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About</h1>
      <p style={{ fontSize: '1.3rem', lineHeight: '1.8', maxWidth: '600px' , color:'black'}}>
        Time-Trekker helps you manage your productivity with a combination of Pomodoro timers and detailed task logging. Stay focused, track your progress, and optimize your workflow with ease.
      </p>
    </main>
  );
}
