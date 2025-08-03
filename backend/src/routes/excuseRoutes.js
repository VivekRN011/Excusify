// backend/routes/excuseRoutes.js
/*import express from 'express';
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

router.post("/", async (req,res)=>{
    try{
        const {category,text} =req.body;

        if(!category || !text){
            return res.status(400).json({message:"Category and text are required"});
        }

        const newExcuse = new Excuse({category,text});
        await newExcuse.save();
        res.status(201).json(newExcuse);

    }catch(error){
        res.status(500).json({message:"Internal server error"});
    }

});

export default router;
*/

import express from 'express';
import Excuse from '../models/Excuse.js';

const router = express.Router();



// Get a random excuse from all categories
router.get('/', async (req, res) => {
  try {
    const [excuse] = await Excuse.aggregate([{ $sample: { size: 1 } }]);
    if (!excuse) {
      return res.status(404).json({ text: "No excuses found!" });
    }
    res.json({ text: excuse.text, category: excuse.category });
  } catch (err) {
    res.status(500).json({ text: "Server error" });
  }
});

// Get a random excuse (optionally by category)
router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const match = category && category !== 'custom'
      ? { category }
      : {};
    const [excuse] = await Excuse.aggregate([
      { $match: match },
      { $sample: { size: 1 } }
    ]);
    if (!excuse) {
      return res.status(404).json({ text: "No excuses found!" });
    }
    res.json({ text: excuse.text, category: excuse.category });
  } catch (err) {
    res.status(500).json({ text: "Server error" });
  }
});

router.post('/', async (req, res) => {
  try {
    const { category, text } = req.body;
    if (!category || !text) {
      return res.status(400).json({ message: "Category and text are required" });
    }

    const newExcuse = new Excuse({ category, text });
    await newExcuse.save();
    res.status(201).json(newExcuse);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;