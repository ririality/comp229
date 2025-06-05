import Contact from '../models/Contacts.js';

// Get all contacts
export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// Get contact by ID
export const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};

// Add new contact
export const createContact = async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.json(newContact);
};

// Update contact by ID
export const updateContact = async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedContact);
};

// Remove contact by ID
export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
};

// Remove all contacts
export const deleteAllContacts = async (req, res) => {
  await Contact.deleteMany();
  res.json({ message: 'All contacts deleted' });
};
