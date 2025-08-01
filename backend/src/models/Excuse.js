// backend/models/Excuse.js
import mongoose from 'mongoose';

const ExcuseSchema = new mongoose.Schema({
  category: String,
  text: String
});

const Excuse = mongoose.model('Excuse', ExcuseSchema);
// backend/src/routes/excuseRoutes.js

export default Excuse;