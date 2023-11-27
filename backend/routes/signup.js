const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', async (req, res) => {
    console.log(req.body);
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({ firstName, lastName, email, password});
     await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get('/', (req, res) => {
    console.log('Hello World!');
    res.send('Hello World!');
    }
);
module.exports = router;