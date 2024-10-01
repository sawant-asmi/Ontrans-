// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/api/contact', async (req, res) => {
  try {
    const { firstname, lastname, phone, email, message } = req.body;
    const newContact = await Contact.create({ firstname, lastname, phone, email, message });
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
