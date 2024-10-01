const express = require('express');
const router = express.Router();
const { Owner } = require('../models/Owner');

// Route for user login
router.post('/api/login/owner_login', async (req, res) => {
  const { emailid, password } = req.body;

  try {
    console.log('Attempting to find owner with email:', emailid);
    // Find the owner by emailid
    const owner = await Owner.findOne({ where: { emailid } });

    if (!owner) {
      console.log('Owner not found with email:', emailid);
      return res.status(404).json({ message: 'Owner not found' });
    }

    // Compare the provided password with the stored password
    if (password !== owner.password) {
      console.log('Incorrect password for email:', emailid);
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // If emailid and password match, return success
    console.log('Login successful for email:', emailid);
    return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for password reset
router.post('/api/reset_password_owner', async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    console.log('Attempting to find owner with email:', email);
    // Find the owner by email
    const owner = await Owner.findOne({ where: { emailid: email } });

    if (!owner) {
      console.error('Owner not found with email:', email);
      return res.status(404).json({ message: 'Owner not found' });
    }

    // Update the owner's password
    owner.password = newPassword;
    await owner.save();

    console.log('Password updated successfully for email:', email);
    return res.status(200).json({ message: 'Password updated successfully' });

  } catch (error) {
    console.error('Password reset error:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
