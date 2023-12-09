const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/users');
const loginRoutes = require('./routes/login');
const signUpRoutes = require('./routes/signup');
const ProductRoutes = require('./routes/products');
const CartRoutes = require('./routes/cart');
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();
const port = 8080;

// Connect to MongoDB
mongoose.connect('mongodb+srv://areebbutt610:CTXu5lNP0Zp1QNtu@cluster0.u68wt69.mongodb.net/MESSI_STORE', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());
app.use('/login', loginRoutes);
app.use('/signup', signUpRoutes);
app.use('/products', ProductRoutes);
app.use('/cart', CartRoutes);

app.get('/', (req, res) => { 
    res.send('Hello World!');
    }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
