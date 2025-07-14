import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  date: { type: String, required: true }
});

export default mongoose.model('Project', ProjectSchema);
