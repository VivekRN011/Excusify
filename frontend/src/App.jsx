// src/App.jsx
import React from 'react';
import ExcuseGenerator from './components/ExcuseGenerator';
import ExcuseForm from './components/ExcuseForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="excusify-title">
        <span className="floating" style={{ fontSize: '2.5rem' }}>🛸</span>
        🤪 Excusify
        <span className="floating" style={{ fontSize: '2.5rem' }}>🦄</span>
      </div>
      <ExcuseGenerator />
      <hr />
      <ExcuseForm />
      <div style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        fontSize: '2.2rem',
        pointerEvents: 'none',
        opacity: 0.7,
        animation: 'float 3s ease-in-out infinite'
      }}>
        🐙
      </div>
      <div style={{
        position: 'fixed',
        top: 24,
        left: 24,
        fontSize: '2.2rem',
        pointerEvents: 'none',
        opacity: 0.7,
        animation: 'float 2.2s ease-in-out infinite'
      }}>
        🐉
      </div>
    </div>
  );
};

export default App;