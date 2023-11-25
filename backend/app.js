const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/users');

const app = express();
const port = 8080;

// Connect to MongoDB
mongoose.connect('mongodb+srv://areebbutt610:CTXu5lNP0Zp1QNtu@cluster0.u68wt69.mongodb.net/MESSI_STORE', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your routes and middleware here
app.get('/', (req, res) => {
  res.send('Hello World!');

});

app.get('/add-user', (req, res) => {
  const user = new User({
    username: 'areebbutt610',
    password: 'password',
    email: 'areeb@gmail.com',
    firstName: 'Areeb',
    lastName: 'Butt',
    role: 'admin',
  });
  user.save().then((result) => {
    res.send(result);
  });
}
);

app.get('/all-users', (req, res) => {
  User.find().then((result) => {
    res.send(result);
  });
}
);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
