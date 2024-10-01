// routes/client.js
const express = require('express');
const router = express.Router();
const ClientEnquiry = require('../models/ClientEnquiry');

router.post('/api/client_enquiry', async (req, res) => {
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

    const newEnquiry = await ClientEnquiry.create({
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

    res.status(201).json(newEnquiry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
