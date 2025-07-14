import Education from '../models/Education.js';

// Create new education entry
export const createEducation = async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.json({ message: 'Education entry created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create education entry' });
  }
};

// Get all education entries
export const getEducation = async (req, res) => {
  try {
    const all = await Education.find();
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve education entries' });
  }
};

// Delete an education entry
export const deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: 'Education entry deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete education entry' });
  }
};
