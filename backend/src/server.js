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
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true
  }));
}

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

// Routes
app.use("/api/excuses", excuseRoutes);



app.get('/', (req, res) => {
  res.send('👋 Excusify API is running!');
});
/*
app.get('/seed', async (req, res) => {
  
  await Excuse.insertMany([
    { category: "work", text: "I accidentally joined a Zoom call from 2020." },
    { category: "work", text: "My WiFi mistook itself for a potato today." },
    { category: "school", text: "My pen broke under academic pressure." },
    { category: "school", text: "I was busy rewriting history... literally." },
    { category: "relationship", text: "My horoscope said 'avoid emotional conversations'." }
  ]);
  res.send("Test data inserted!");
});
*/

app.get('/favicon.ico', (req, res) => res.status(204).end());
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
