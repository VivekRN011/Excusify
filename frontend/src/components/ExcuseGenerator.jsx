// src/components/ExcuseGenerator.jsx
/*import React, { useState } from 'react';
import api from '../lib/axios';

const ExcuseGenerator = () => {
  const [category, setCategory] = useState('school');
  const [excuse, setExcuse] = useState('');

  const getExcuse = async () => {
    try {
      const res = await api.get(`/${category}`);
      setExcuse(res.data.text);
    } catch (err) {
      setExcuse("😢 The excuse elves are on strike. Try again!");
      console.error("Error fetching excuse:", err);
    }
  };

  return (
    <div
      className="generator"
      style={{
        maxWidth: 400,
        margin: '40px auto',
        padding: 24,
        borderRadius: 16,
        background: '#e0f7fa',
        boxShadow: '0 4px 16px #0002',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Comic Sans MS, Comic Sans, cursive'
      }}
    >
      <h2 style={{ marginBottom: 8 }}>🎲 Random Excuse Generator</h2>
      <p style={{ fontSize: 14, color: '#00796b', marginBottom: 24 }}>
        Need a quick excuse? Spin the wheel of destiny! 🎡
      </p>
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 16,
          borderRadius: 8,
          border: '1px solid #26a69a',
          fontSize: 16,
          background: '#fffde7'
        }}
      >
        <option value="school">🎒 School</option>
        <option value="work">💼 Work</option>
        <option value="family">👨‍👩‍👧‍👦 Family</option>
        <option value="custom">🦄 Custom</option>
      </select>
      <button
        onClick={getExcuse}
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
        onMouseOver={e => (e.target.style.background = '#ffe29a')}
        onMouseOut={e => (e.target.style.background = '#ffb347')}
      >
        🎉 Generate Excuse!
      </button>
      {excuse && (
        <p
          style={{
            marginTop: 18,
            color: '#d84315',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
            background: '#fff3e0',
            borderRadius: 8,
            padding: 12,
            boxShadow: '0 2px 8px #0001'
          }}
        >
          📝 {excuse}
        </p>
      )}
    </div>
  );
};

export default ExcuseGenerator;

*/

// src/components/ExcuseGenerator.jsx
import React, { useState } from "react";
import api from "../lib/axios";

const ExcuseGenerator = () => {
  const [category, setCategory] = useState("real life");
  const [excuse, setExcuse] = useState("");
  const [excuseCategory, setExcuseCategory] = useState("");

  // filepath: d:\Excusify\frontend\src\components\ExcuseGenerator.jsx
  const getExcuse = async () => {
    console.log("🔥 Generate button clicked!");
    console.log("Selected category:", category);

    try {
      const endpoint =
        category === "random" ? "/" : `/${encodeURIComponent(category)}`;
      console.log("🌐 Fetching from endpoint:", endpoint);

      const res = await api.get(endpoint);
      console.log("✅ API Response:", res.data);

      setExcuse(res.data.text);
      setExcuseCategory(res.data.category || category);
    } catch (err) {
      console.error("❌ Error fetching excuse:", err);
      setExcuse("Oops! Even our excuses need an excuse right now. 🤷‍♂️");
    }
  };
  return (
    <div
      className="generator"
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        borderRadius: 16,
        background: "#e0f7fa",
        boxShadow: "0 4px 16px #0002",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Comic Sans MS, Comic Sans, cursive",
      }}
    >
      <h2 style={{ marginBottom: 8 }}>🎲 Random Excuse Generator</h2>
      <p style={{ fontSize: 14, color: "#00796b", marginBottom: 24 }}>
        Need a quick excuse? Spin the wheel of destiny! 🎡
      </p>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 16,
          borderRadius: 8,
          border: "1px solid #26a69a",
          fontSize: 16,
          background: "#fffde7",
        }}
      >
        <option value="random">🌈 Random</option>
        <option value="real life">🏃 Real Life</option>
        <option value="tech">💻 Tech</option>
        <option value="work">💼 Work</option>
        <option value="fantasy">🧙 Fantasy</option>
        <option value="weird">🦑 Weird</option>
        <option value="funny">😂 Funny</option>
      </select>
      <button
        onClick={getExcuse}
        style={{
          width: "100%",
          padding: 12,
          borderRadius: 8,
          background: "#ffb347",
          color: "#222",
          fontWeight: "bold",
          fontSize: 18,
          border: "none",
          cursor: "pointer",
          marginBottom: 12,
          transition: "background 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#ffe29a")}
        onMouseOut={(e) => (e.target.style.background = "#ffb347")}
      >
        🎉 Generate Excuse!
      </button>
      {excuse && (
        <div
          style={{
            marginTop: 18,
            color: "#d84315",
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            background: "#fff3e0",
            borderRadius: 8,
            padding: 12,
            boxShadow: "0 2px 8px #0001",
          }}
        >
          <div>📝 {excuse}</div>
          {excuseCategory && (
            <div style={{ fontSize: 14, color: "#00796b", marginTop: 6 }}>
              <b>Category:</b> {excuseCategory}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExcuseGenerator;
