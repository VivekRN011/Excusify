// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import excuseRoutes from './routes/excuseRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import Excuse from './models/Excuse.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/excuses", excuseRoutes);

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


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
