// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import excuseRoutes from './routes/excuseRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import Excuse from './models/Excuse.js';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();
const app = express();

// CORS for all environments
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://excusify-m2ch.onrender.com' 
    : 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// API Routes first
app.use("/api/excuses", excuseRoutes);

// Production: Serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
}

// API status route (should be after static files in production)
app.get('/api', (req, res) => {
  res.send('👋 Excusify API is running!');
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

// Production: Catch-all for React Router
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
} else {
  // Development: Basic root route
  app.get('/', (req, res) => {
    res.send('👋 Excusify API is running in development!');
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));