const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

router.post('/api/enquiry', async (req, res) => {
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

    // Create a new enquiry in the database
    const newEnquiry = await Enquiry.create({
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
