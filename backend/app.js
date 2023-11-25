const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

// Connect to MongoDB
mongoose.connect('mongodb+srv://areebbutt610:CTXu5lNP0Zp1QNtu@cluster0.u68wt69.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
