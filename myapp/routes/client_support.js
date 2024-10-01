// routes/contact.js
const express = require('express');
const router = express.Router();
const ClientSupport = require('../models/ClientSupport');

router.get('/api/client_support', async (req, res) => {
  try {
    const enquiries = await ClientSupport.findAll(); // Fetch all client enquiries from the database
    res.status(200).json(enquiries);
  } catch (error) {
    console.error('Error fetching client support:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/api/client_contact', async (req, res) => {
  try {
    const { firstname, lastname, phone, email, message } = req.body;
    const newContact = await ClientSupport.create({ firstname, lastname, phone, email, message });
    res.status(201).json(newContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
