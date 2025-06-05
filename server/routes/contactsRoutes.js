import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} from '../controllers/contactsController.js';

const router = express.Router();

// GET all contacts
router.get('/', getAllContacts);

// GET contact by ID
router.get('/:id', getContactById);

// POST new contact
router.post('/', createContact);

// PUT update contact by ID
router.put('/:id', updateContact);

// DELETE contact by ID
router.delete('/:id', deleteContact);

// DELETE all contacts
router.delete('/', deleteAllContacts);

export default router;