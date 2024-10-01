// routes/client.js
const express = require('express');
const router = express.Router();
const ClientOrder = require('../models/ClientOrder');

router.get('/api/get_client_orders', async (req, res) => {
  try {
    const orders = await ClientOrder.findAll(); // Fetch all client enquiries from the database
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching client enquiries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/api/client_orders', async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      phone,
      email,
      companyname,
      loadport,
      dischargeport,
      incoterms,
      packages,
      typeofpackage,
      length,
      width,
      height,
      units,
      freighttype,
      loadtype,
    } = req.body;

    const newOrder = await ClientOrder.create({
        firstname,
        lastname,
        phone,
        email,
        companyname,
        loadport,
        dischargeport,
        incoterms,
        packages,
        typeofpackage,
        length,
        width,
        height,
        units,
        freighttype,
        loadtype,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
