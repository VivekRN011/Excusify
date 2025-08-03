// src/components/ExcuseForm.jsx
import React, { useState } from 'react';
import api from '../lib/axios';

const ExcuseForm = () => {
  const [category, setCategory] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const submitExcuse = async () => {
    try {
      await api.post('/', { category, text });
      setMessage('🚀 Excuse launched into the universe! 🚀');
      setText('');
      setCategory('');
    } catch (err) {
      setMessage('😱 Oops! Your excuse got lost in cyberspace.');
      console.error("Error submitting excuse:", err);
    }
  };

  return (
    <div
      className="form"
      style={{
        maxWidth: 400,
        margin: '40px auto',
        padding: 24,
        borderRadius: 16,
        background: '#f9f9f9',
        boxShadow: '0 4px 16px #0001',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive'
      }}
    >
      <h2 style={{ marginBottom: 8 }}>📝 Submit Your Legendary Excuse</h2>
      <p style={{ fontSize: 14, color: '#888', marginBottom: 24 }}>
        Make it wild, make it weird, make it unforgettable!
      </p>
      <select
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 16,
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: 16
        }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select category</option>
        <option value="real life">🏃 Real Life</option>
        <option value="tech">💻 Tech</option>
        <option value="work">💼 Work</option>
        <option value="fantasy">🧙 Fantasy</option>
        <option value="weird">🦑 Weird</option>
        <option value="funny">😂 Funny</option>
      </select>
      <textarea
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 16,
          borderRadius: 8,
          border: '1px solid #ccc',
          fontSize: 16,
          minHeight: 60,
          resize: 'vertical'
        }}
        placeholder="Type your excuse here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        style={{
          width: '100%',
          padding: 12,
          borderRadius: 8,
          background: '#ffb347',
          color: '#222',
          fontWeight: 'bold',
          fontSize: 18,
          border: 'none',
          cursor: 'pointer',
          marginBottom: 12,
          transition: 'background 0.2s'
        }}
        onClick={submitExcuse}
        onMouseOver={e => (e.target.style.background = '#ffe29a')}
        onMouseOut={e => (e.target.style.background = '#ffb347')}
      >
        🚩 Submit Excuse!
      </button>
      {message && (
        <p style={{ marginTop: 10, color: '#4caf50', fontWeight: 'bold', textAlign: 'center' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default ExcuseForm;
