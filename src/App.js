import React from 'react';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="text-center mb-4">🏆 Leaderboard</h1>
      <Leaderboard />
    </div>
  );
}

export default App;
