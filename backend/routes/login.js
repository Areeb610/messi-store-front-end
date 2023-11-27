const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
  
      const isPasswordValid = await user.comparePassword(password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
  
      res.status(200).json({ message: 'Login successful.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.get('/', (req, res) => {
    console.log('Hello World!');
    res.send('Hello World!');
  });

module.exports = router;