// backend/routes/excuseRoutes.js
import express from 'express';
import Excuse from '../models/Excuse.js';

const router = express.Router();

// GET random excuse by category
router.get('/:category', async (req, res) => {
  const category = req.params.category;
  const excuses = await Excuse.find({ category });
  if (!excuses.length) return res.status(404).json({ message: "No excuses found" });

  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  res.json(randomExcuse);
});

export default router;
