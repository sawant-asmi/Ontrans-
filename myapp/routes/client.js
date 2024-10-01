const express = require('express');
const router = express.Router();
const Client = require('../models/Client'); // No destructuring

router.post('/api/client', async (req, res) => {
  try {
    const {
      companyname,
      panid,
      gstno,
      iecno,
      emailid,
      phone,
      contactpersonname,
      contactpersonphone,
      password,
      firstTime,
    } = req.body;

    const newClient = await Client.create({
      companyname,
      panid,
      gstno,
      iecno,
      emailid,
      phone,
      contactpersonname,
      contactpersonphone,
      password,
      firstTime,
    });

    res.status(201).json(newClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
