// App.jsx
import React from 'react';
import './App.css'; // Any global styles you may have
import AppRoutes from './Routes'; // Import your routing logic from Routes.jsx

function App() {
  return (
    <div className="App">
      <AppRoutes /> {/* This will contain the routing logic */}
    </div>
  );
}

export default App;


