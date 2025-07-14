import Project from '../models/Projects.js';

export const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json({ message: 'Project added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add project.' });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects.' });
  }
};
