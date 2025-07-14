import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  year: { type: String, required: true },
  created: { type: Date, default: Date.now }
});

export default mongoose.model('Education', educationSchema);
