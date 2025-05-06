"use client";
import React from 'react';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '90vh',
      textAlign: 'center',
      flexDirection: 'column',
      padding: '2rem',
      color: 'black',
      fontWeight:'bold'
    }}>
      <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>Welcome to TimeTrekker!</h1>
      <p style={{ fontSize: '1.4rem', maxWidth: '700px', marginBottom: '1rem' }}>
        TimeTrekker is your all-in-one productivity companion. Whether you are a student, a professional,
        or just someone trying to get things done, we have got you covered.
      </p>
      <p style={{ fontSize: '1.3rem', maxWidth: '700px', marginBottom: '1rem' }}>
        Use the Task Log to jot down tasks and ideas, the Pomodoro timer to stay focused, and the Dashboard
        to see your progress in one glance.
      </p>
      <p style={{ fontSize: '1.3rem', maxWidth: '700px' }}>
        Start your journey toward better time management, one session at a time. Welcome aboard!
      </p>
    </main>
  );
}
