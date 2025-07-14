import express from 'express';
import { createEducation, getEducation, deleteEducation } from '../controllers/educationController.js';

const router = express.Router();

// POST /api/education
router.post('/', createEducation);

// GET /api/education
router.get('/', getEducation);

// DELETE /api/education/:id
router.delete('/:id', deleteEducation);

export default router;
