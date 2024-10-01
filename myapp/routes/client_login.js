const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Route for user login
router.post('/api/login/client', async (req, res) => {
  const { emailid, password } = req.body;

  try {
    // Find the client by emailid
    const client = await Client.findOne({ where: { emailid } });

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    // Compare the provided password with the stored password
    if (password !== client.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // If emailid and password match, return success
    return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for password reset
router.post('/api/reset_password', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // Find the client by email
    const client = await Client.findOne({ where: { emailid: email } });

    if (!client) {
      console.error('Client not found with email:', email);
      return res.status(404).json({ message: 'Client not found' });
    }

    // Update the client's password
    client.password = newPassword;
    await client.save();

    return res.status(200).json({ message: 'Password updated successfully' });

  } catch (error) {
    console.error('Password reset error:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
