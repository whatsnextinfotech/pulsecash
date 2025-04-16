import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact
} from '../controller/contactController.js';

const router = express.Router();

// POST: Create a new contact
router.post('/contacts', createContact);

// GET: Get all contacts
router.get('/contacts', getAllContacts);

// GET: Get a specific contact by ID
router.get('/contacts/:id', getContactById);

// PUT: Update a contact by ID
router.put('/contacts/:id', updateContact);

// DELETE: Delete a contact by ID
router.delete('/contacts/:id', deleteContact);

export default router;
